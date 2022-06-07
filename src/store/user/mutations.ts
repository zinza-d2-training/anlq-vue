import { MutationTree } from 'vuex';
import { UserState } from './type';

export enum UserMutation {
  SET_USER = 'SET_USER',
  SET_TOKEN = 'SET_TOKEN',
  SET_INFO = 'SET_INFO'
}

export const mutations: MutationTree<UserState> = {
  [UserMutation.SET_USER](state: UserState, payload: UserState): void {
    state.cmnd = payload.cmnd;
    state.password = payload.password;
  },

  [UserMutation.SET_TOKEN](state: UserState, payload: string): void {
    state.token = payload;
  },

  [UserMutation.SET_INFO](state: UserState, payload: UserState): void {
    state.name = payload.name;
    state.username = payload.username;
    state.email = payload.email;
    state.phone = payload.phone;
  }
};
