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
            <router-link to="login">
              <v-btn class="mr-2" outlined color="indigo">Quay lại</v-btn>
            </router-link>
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
import { delay } from '../utils/common';
import AccountLayout from '../layout/AccountLayout.vue';

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__form {
    &__button {
      display: flex;
      justify-content: center;

      button {
        border-radius: 10px 10px 10px 0px;
        font-weight: bold;
      }

      a {
        color: #3039f9;
        text-decoration: none;
      }
    }
  }
}
</style>
