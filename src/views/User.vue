<template>
  <v-container class="home">
    <div v-if="!isLoading">
      <h2 class="text-center">Thông tin user</h2>
      <ul>
        <li>Name: {{ userInfo.name }}</li>
        <li>Username: {{ userInfo.username }}</li>
        <li>Email: {{ userInfo.email }}</li>
        <li>Phone: {{ userInfo.phone }}</li>
      </ul>
    </div>
    <div v-else>
      <h2 class="text-center">Loading.....</h2>
    </div>
  </v-container>
</template>

<script lang="ts">
import { UserAction } from '@/store/user/actions';
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import { delay } from '../utils/common';

@Component({
  computed: {
    ...mapState({ user: (state) => state })
  },
  methods: {
    ...mapActions([UserAction.ADD_USER_INFO])
  }
})
export default class User extends Vue {
  $store: any;
  isLoading: boolean = true;
  userInfo: any;
  // eslint-disable-next-line no-unused-vars
  [UserAction.ADD_USER_INFO]: (userInfo: any) => void;

  async getUserInfo() {
    try {
      await delay(5000);
      let id = localStorage.getItem('token');
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      response.data.forEach((element: any) => {
        if (element.id == id) {
          this.userInfo = element;
          this[UserAction.ADD_USER_INFO](element);
          this.isLoading = false;
          return;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  mounted() {
    this.getUserInfo();
  }
}
</script>

<style lang="scss" scoped></style>
