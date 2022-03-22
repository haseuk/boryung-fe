import ModalContainer from './components/ModalContainer';

export default {
  install(Vue) {
    const getContainer = (c) => {
      let modalHolder = c;
      while(modalHolder.$parent) {
        if (modalHolder.$options['modalHolder']) break;
        modalHolder = modalHolder.$parent;
      }

      if (!modalHolder._modalContainer) {
        modalHolder._modalContainer = new (Vue.extend(ModalContainer))({ parent: modalHolder });
        modalHolder._modalContainer.$mount();
        modalHolder.$el.appendChild(modalHolder._modalContainer.$el);
      }
      return modalHolder._modalContainer;
    };

    Vue.prototype.$modal = function(component, options) {
      return getContainer(this).add(component, options);
    };
  }
}
