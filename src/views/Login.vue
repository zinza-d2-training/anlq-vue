<template>
  <AccountLayout>
    <div class="login">
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="submitForm" class="login__form">
          <p class="text-left">Chào mừng trở lại</p>
          <h2 class="text-left pb-3">Đăng nhập vào tài khoản</h2>
          <ValidationProvider rules="required|numeric|validateCMND" v-slot="{ errors }">
            <div class="login__form__input">
              <label for="cmnd" class="d-flex">Chứng minh nhân dân/Căn cước công dân</label>
              <v-text-field
                v-model="user.cmnd"
                outlined
                type="text"
                name="cmnd"
                :error-messages="errors[0]"
                placeholder="123456789"></v-text-field>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|min:8|regex:^\S+$" v-slot="{ errors }">
            <div class="login__form__input">
              <label for="password" class="d-flex">Mật khẩu</label>
              <v-text-field
                v-model="user.password"
                type="password"
                name="password"
                outlined
                :error-messages="errors[0]"
                placeholder="**************"></v-text-field>
            </div>
          </ValidationProvider>

          <router-link to="forgot-password" class="float-right py-2">Quên mật khẩu?</router-link>
          <v-btn type="submit" :disabled="invalid || isLoading" color="green" class="white--text">
            Đăng nhập
          </v-btn>
          <p class="py-6">Hoặc đăng ký tài khoản, nếu chưa đăng ký!</p>
          <router-link to="register">
            <v-btn outlined color="green"> Đăng ký </v-btn>
          </router-link>
        </form>
      </ValidationObserver>
    </div>
  </AccountLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapMutations, mapState } from 'vuex';
import { UserMutation } from '../store/user/mutations';
import { UserState } from '../store/user/type';
import { delay } from '../utils/common';
import AccountLayout from '../layout/AccountLayout.vue';

@Component({
  components: {
    AccountLayout
  },
  computed: {
    ...mapState({ user: (state) => state })
  },
  methods: {
    ...mapMutations([UserMutation.SET_USER, UserMutation.SET_TOKEN])
  }
})
export default class Login extends Vue {
  $router: any;
  $store: any;
  user!: UserState;
  isLoading: boolean = false;
  // eslint-disable-next-line no-unused-vars
  [UserMutation.SET_USER]: (user: UserState) => void;
  // eslint-disable-next-line no-unused-vars
  [UserMutation.SET_TOKEN]: (token: string) => void;

  async submitForm() {
    try {
      this.isLoading = true;
      let token = '2';
      localStorage.setItem('token', token);
      this[UserMutation.SET_USER](this.user);
      this[UserMutation.SET_TOKEN](token);
      await delay(5000);
      this.isLoading = false;
      this.$router.push('/user');
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__form {
    button {
      width: 100%;
      border-radius: 5px;
      padding: 11px;
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
