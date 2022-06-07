import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './type';
import { user } from './user/index';

Vue.use(Vuex);

export const store: StoreOptions<RootState> = {
  modules: {
    user
  }
};

export default new Vuex.Store<any>(store);
