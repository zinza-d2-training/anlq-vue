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
          <button :disabled="invalid || isLoading">Đăng nhập</button>
        </form>
      </ValidationObserver>
    </div>
  </AccountLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { extend } from 'vee-validate';
import { required, min, regex, numeric } from 'vee-validate/dist/rules';
import { mapMutations, mapState } from 'vuex';
import { UserMutation } from '../store/user/mutations';
import { UserState } from '../store/user/type';
import { delay } from '../utils/common';
import AccountLayout from '../layout/AccountLayout.vue';

extend('required', {
  ...required,
  message: 'Trường này không được để trống.'
});

extend('min', {
  ...min,
  message: 'Mật khẩu ít nhất phải có 8 ký tự.'
});

extend('regex', {
  ...regex,
  message: 'Trường này không được chứa dấu cách.'
});

extend('numeric', {
  ...numeric,
  message: 'Trường này chỉ bao gồm các số.'
});

extend('validateCMND', {
  validate: (value) => {
    return value.length == 9 || value.length == 12;
  },
  message: 'Hãy nhập CMND 9 hoặc CCCD 12 số'
});

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
  &__form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    button {
      color: white;
      background: #5bcd6e;
      width: 100%;
      border-radius: 5px;
      padding: 11px;
    }
  }
}
</style>
