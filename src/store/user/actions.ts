import { UserMutation } from './mutations';
import { ActionTree } from 'vuex';
import { RootState } from '../type';
import { UserState } from './type';

export enum UserAction {
  ADD_USER_INFO = 'ADD_USER_INFO'
}

export const actions: ActionTree<UserState, RootState> = {
  [UserAction.ADD_USER_INFO]({ state, commit }, userInfo) {
    commit(UserMutation.SET_INFO, userInfo);
  }
};
