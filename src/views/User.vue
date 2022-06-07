<template>
  <v-container class="home">
    <div v-if="!isLoading">
      <h2 class="text-center">Thông tin user</h2>
      <ul>
        <li>Name: {{ user.name }}</li>
        <li>Username: {{ user.username }}</li>
        <li>Email: {{ user.email }}</li>
        <li>Phone: {{ user.phone }}</li>
      </ul>
    </div>
    <div v-else>
      <h2 class="text-center">Loading.....</h2>
    </div>
  </v-container>
</template>

<script lang="ts">
import { UserAction } from '@/store/user/actions';
import { UserState } from '@/store/user/type';
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import { delay } from '../utils/common';

@Component({
  computed: {
    ...mapState({ user: (state) => state })
  },
  methods: {
    ...mapActions(['user/addUserInfo'])
  }
})
export default class User extends Vue {
  $store: any;
  isLoading: boolean = true;
  user!: UserState;

  async getUserInfo() {
    try {
      await delay(5000);
      let id = localStorage.getItem('token');
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          response.data.forEach((element: any) => {
            if (element.id == id) {
              this.user.name = element.name;
              this.user.username = element.username;
              this.user.phone = element.phone;
              this.user.email = element.email;
              this.$store.dispatch(UserAction.ADD_USER_INFO, this.user);
              this.isLoading = false;
              return;
            }
          });
        })
        .catch((error) => console.log(error));
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
