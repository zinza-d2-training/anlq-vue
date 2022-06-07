<template>
  <div class="forgot-password">
    <v-row no-gutters class="forgot-password__row">
      <v-col cols="6" class="forgot-password__row__col">
        <img
          src="../assets/images/login.png"
          alt="login"
          class="forgot-password__row__col__image" />
      </v-col>
      <v-col cols="6" class="forgot-password__row__col">
        <h2 class="text-center">Quên mật khẩu</h2>
        <p class="text-center">
          <router-link to="/login">Quay trở lại trang đăng nhập</router-link>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ForgotPassword extends Vue {}
</script>

<style lang="scss" scoped>
.forgot-password {
  &__row {
    &__col {
      &__image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
