<template>
  <v-container class="login">
    <v-row no-gutters class="login__row">
      <v-col cols="6" class="login__row__col">
        <img src="../assets/images/login.png" alt="login" class="login__row__col__image" />
      </v-col>
      <v-col cols="6" class="login__row__col">
        <form class="login__row__col__form">
          <p class="text-left">Chào mừng trở lại</p>
          <h2 class="text-left pb-3">Đăng nhập vào tài khoản</h2>
          <div class="login__row__col__form__input">
            <label for="email" class="d-flex">Email</label>
            <v-text-field
              outlined
              type="email"
              name="email"
              placeholder="admin@gmail.com"></v-text-field>
          </div>
          <div class="login__row__col__form__input">
            <label for="password" class="d-flex">Mật khẩu</label>
            <v-text-field
              type="password"
              name="password"
              outlined
              placeholder="**************"></v-text-field>
          </div>
          <a class="float-right py-2">Quên mật khẩu?</a>
          <button>Đăng nhập</button>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.login {
  &__row {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 10px #c9c9c9;

    &__col {
      position: relative;

      &__image {
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
      }
    }
  }
}
</style>
