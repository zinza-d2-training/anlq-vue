<template>
  <div class="header-layout">
    <v-toolbar class="header-layout__toolbar" elevation="0">
      <router-link to="/">
        <img src="../assets/images/icon-home.png" alt="icon-home" />
        <v-toolbar-title class="white--text ml-5">
          CỔNG THÔNG TIN TIÊM CHỦNG COVID-19
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="header-layout__toolbar__menu">
        <ul class="header-layout__toolbar__menu__ul">
          <li class="header-layout__toolbar__menu__ul__li">
            <router-link to="/">Trang chủ</router-link>
          </li>
          <li class="header-layout__toolbar__menu__ul__li">Đăng ký tiêm</li>
          <li class="header-layout__toolbar__menu__ul__li">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <button v-on="on">Tra cứu <v-icon color="white">mdi-menu-down</v-icon></button>
              </template>
              <v-list class="pt-5">
                <v-list-item>
                  <v-icon color="purple">mdi-account-multiple</v-icon>
                  <v-list-item-title class="mx-3">
                    <div>Tra cứu chứng nhận tiêm</div>
                    <div class="caption">Cập nhập nhanh và chính xác</div>
                  </v-list-item-title>
                  <v-icon color="purple">mdi-arrow-right</v-icon>
                </v-list-item>
                <v-list-item>
                  <v-icon color="blue">mdi-account-multiple</v-icon>
                  <v-list-item-title class="mx-3">
                    <div>Tra cứu kết quả đăng ký</div>
                    <div class="caption">Cập nhập nhanh và chính xác</div>
                  </v-list-item-title>
                  <v-icon color="blue">mdi-arrow-right</v-icon>
                </v-list-item>
              </v-list>
            </v-menu>
          </li>
          <li class="header-layout__toolbar__menu__ul__li">Tài liệu</li>
          <li class="header-layout__toolbar__menu__ul__li mr-6">
            <router-link
              to="/login"
              class="header-layout__toolbar__menu__ul__li__login"
              v-if="username == null">
              Đăng nhập
            </router-link>
            {{ username }}
          </li>
        </ul>
      </div>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { mapActions, mapState } from 'vuex';
import { UserAction } from '@/store/user/actions';
import { UserState } from '@/store/user/type';
import { delay } from '@/utils/common';

@Component({
  computed: {
    ...mapState({ user: (state) => state })
  },
  methods: {
    ...mapActions([UserAction.ADD_USER_INFO])
  }
})
export default class HeaderLayout extends Vue {
  username: string | null = null;
  $store: any;
  userInfo!: UserState;
  // eslint-disable-next-line no-unused-vars
  [UserAction.ADD_USER_INFO]: (user: UserState) => void;

  async getUserInfo() {
    try {
      await delay(5000);
      let id = localStorage.getItem('token');
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      response.data.forEach((element: any) => {
        if (element.id == id) {
          this[UserAction.ADD_USER_INFO](element);
          return;
        }
      });
      this.username = this.$store.state.user.username;
    } catch (error) {
      console.log(error);
    }
  }
  mounted() {
    this.getUserInfo();
  }
}
</script>

<style lang="scss" scoped>
.header-layout {
  &__toolbar {
    background: linear-gradient(133deg, #ed1b23, #2e3091, #253494);

    a {
      color: white;
      display: flex;
      align-items: center;

      img {
        max-height: 40px;
      }
    }

    &__menu {
      &__ul {
        color: white;
        display: flex;
        list-style: none;
        align-items: center;

        &__li {
          margin: 0px 10px;

          &__login {
            background: white;
            padding: 10px 10px;
            border-radius: 10px 10px 10px 0px;
            font-weight: bold;
            color: #003f81 !important;
          }
        }
      }
    }
  }
}

.v-menu__content {
  margin-top: 12px;
  transform: translateX(-80px);
}
</style>
