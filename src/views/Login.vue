<template>
  <div class="login">
    <v-row no-gutters class="login__row">
      <v-col cols="6" class="login__row__col">
        <img src="../assets/images/login.png" alt="login" class="login__row__col__image" />
      </v-col>
      <v-col cols="6" class="login__row__col">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="submitForm" class="login__row__col__form">
            <p class="text-left">Chào mừng trở lại</p>
            <h2 class="text-left pb-3">Đăng nhập vào tài khoản</h2>
            <ValidationProvider rules="required|numeric|validateCMND" v-slot="{ errors }">
              <div class="login__row__col__form__input">
                <label for="cmnd" class="d-flex">Chứng minh nhân dân/Căn cước công dân</label>
                <v-text-field
                  v-model="user.cmnd"
                  outlined
                  type="text"
                  name="cmnd"
                  placeholder="123456789"></v-text-field>
                <span class="login__row__col__form__input--error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required|min:8|regex:^\S+$" v-slot="{ errors }">
              <div class="login__row__col__form__input">
                <label for="password" class="d-flex">Mật khẩu</label>
                <v-text-field
                  v-model="user.password"
                  type="password"
                  name="password"
                  outlined
                  placeholder="**************"></v-text-field>
                <span class="login__row__col__form__input--error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <router-link to="forgot-password" class="float-right py-2">Quên mật khẩu?</router-link>
            <button :disabled="invalid || isLoading">Đăng nhập</button>
          </form>
        </ValidationObserver>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { extend } from 'vee-validate';
import { required, min, regex, numeric } from 'vee-validate/dist/rules';
import { mapMutations, mapState } from 'vuex';
import { UserMutation } from '../store/user/mutations';
import { UserState } from '../store/user/type';
import { delay } from '../utils/common';

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
  overflow: hidden;
  height: 100%;
  width: 100%;

  &__row {
    height: 100%;
    width: 100%;

    &__col {
      position: relative;

      &__image {
        position: absolute;
        width: 100%;
        height: 100%;
      }

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

        &__input {
          &--error {
            color: red;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
