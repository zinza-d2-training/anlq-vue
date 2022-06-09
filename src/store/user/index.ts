import { Module } from 'vuex';
import { RootState } from '../type';
import { UserState } from './type';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state: UserState = {
  cmnd: '',
  password: '',
  token: '',
  name: '',
  username: '',
  email: '',
  phone: '',
  gender: '',
  dateOfBirth: ''
};

export const user: Module<UserState, RootState> = {
  state,
  getters,
  mutations,
  actions
};
