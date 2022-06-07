<template>
  <AccountLayout>
    <div class="forgot-password">
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="submitForm" class="forgot-password__form">
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <div class="forgot-password__form__input">
              <label for="email">
                <p class="text-center">
                  Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã dùng để đăng ký
                  <span class="red--text">(*)</span>
                </p>
              </label>
              <v-text-field
                v-model="email"
                outlined
                type="text"
                name="email"
                :error-messages="errors[0]"
                placeholder="user@gmail.com"></v-text-field>
            </div>
          </ValidationProvider>
          <div class="forgot-password__form__button pt-3">
            <v-btn class="mr-2" outlined color="indigo">
              <router-link to="login">Quay lại</router-link>
            </v-btn>
            <v-btn
              type="submit"
              :disabled="invalid || isLoading"
              color="indigo"
              class="white--text">
              Gửi
            </v-btn>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </AccountLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { delay } from '../utils/common';
import AccountLayout from '../layout/AccountLayout.vue';

extend('required', {
  ...required,
  message: 'Trường này không được để trống.'
});

extend('email', {
  ...email,
  message: 'Bạn đã nhập sai định dạng của email.'
});

@Component({
  components: {
    AccountLayout
  }
})
export default class Login extends Vue {
  $router: any;
  email: string = '';
  isLoading: boolean = false;

  async submitForm() {
    try {
      this.isLoading = true;
      await delay(2000);
      this.isLoading = false;
      this.$router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped>
.forgot-password {
  &__form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &__button {
      display: flex;
      justify-content: center;

      button {
        border-radius: 10px 10px 10px 0px;
        font-weight: 900;

        a {
          color: #3039f9;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
