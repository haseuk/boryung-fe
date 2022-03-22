<template>
  <div modal-container v-show="modals.length">
    <component v-for="modal in modals" :is="modal.component" :options="modal.options" :key="modal.id"
               @close="close(modal.id)"
               @resolve="(result) => resolve(modal.id, result)"
               @reject="(result) => reject(modal.id, result)" />
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'ModalContainer',
  data() {
    return {
      seq: 0,
      modals: [],
    };
  },
  methods: {
    add(component, options) {
      return new Promise((resolve, reject) => {
        this.modals.push({id: this.seq++, component, resolve, reject, options});
      });
    },
    getModal(id) {
      return _.find(this.modals, m => m.id === id);
    },
    resolve(id, result) {
      this.getModal(id).resolve(result);
      this.close(id);
    },
    reject(id, result) {
      this.getModal(id).reject(result);
      this.close(id);
    },
    close(id) {
      this.modals = _.filter(this.modals, m => m.id !== id);
    }
  },
};
</script>

<style>
[modal-container] { position: fixed; width: 100%; height: 100%; left:0; top:0; z-index: 99; }
</style>
