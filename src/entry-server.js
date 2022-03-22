import createApp from './app';
import { getUseAsyncDataComponents } from '@/utils';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    router.push(context.url).then(async () => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) return reject({ code: 404 });

      const COMPONENTS_STATE = {};
      try {
        await Promise.all(getUseAsyncDataComponents(matchedComponents).map(component => {
          return component.asyncData({store, route: router.currentRoute}).then(result => {
            if (!component.name) throw `[asyncData] 'name' property is required`;
            if (COMPONENTS_STATE[component.name]) throw `[asyncData] duplicated name(${component.name}) property`;
            COMPONENTS_STATE[component.name] = component.__INITIAL_STATE__ = result;
          });
        }));
      } catch(e) {
        console.error(e);
        reject({ code: 500, message: e.message || e });
        return;
      }

      context.rendered = () => {
        context.state = store.state;
        context.state.__COMPONENTS_STATE__ = COMPONENTS_STATE;
        context.meta = app.$meta();
      };

      resolve(app);
    }).catch(e => {
      console.error(e);
      reject({ code: 500, message: e.message || e });
    });
  })
};
