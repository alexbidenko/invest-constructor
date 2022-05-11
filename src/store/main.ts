import {defineStore} from 'pinia';

import {UserType} from '~/types/common';

export const useMainStore = defineStore('main', {
  state: () => ({user: {} as UserType}),
  actions: {
    setUser(value: UserType) {
      this.user = value;
    },
  },
  getters: {},
});
