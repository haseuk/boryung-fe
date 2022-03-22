import _ from 'lodash';

const assignPrefetchedData = (context, type) => {
  const data = context.constructor.extendOptions && context.constructor.extendOptions[type];
  if (data) {
    context.constructor.extendOptions[type] = null;
    context.__fetched = true;
    _.assign(context.$data, data);
  }
};

export default {
  created() {
    if (this.$options.asyncData) {
      assignPrefetchedData(this, '__INITIAL_STATE__');
    }
  },
  mounted() {
    if (this.$options.asyncData) {
      assignPrefetchedData(this, '__RESTORE_STATE__');
      this.$watch('$route', () => assignPrefetchedData(this, '__INITIAL_STATE__'));
    }
  }
};
