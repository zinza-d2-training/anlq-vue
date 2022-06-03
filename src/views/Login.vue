<template>
  <v-container class="login">
    <v-row no-gutters class="login--row">
      <v-col cols="6" class="login--row--col">
        <img src="../assets/images/login.png" alt="login" class="login--row--col--image" />
      </v-col>
      <v-col cols="6" class="login--row--col">
        <form class="login--row--col--form">
          <p>Chào mừng trở lại</p>
          <h1>Đăng nhập vào tài khoản</h1>
          <div class="login--row--col--form--input">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="admin@gmail.com" />
          </div>
          <div class="login--row--col--form--input">
            <label for="password">Mật khẩu</label>
            <input type="password" name="password" placeholder="*********" />
          </div>
          <a>Quên mật khẩu?</a>
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
  &--row {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 10px #c9c9c9;

    &--col {
      position: relative;

      &--image {
        width: 100%;
        height: 100%;
      }

      &--form {
        width: 350px;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &--input {
          margin-top: 15px;

          label {
            display: flex;
          }
          input {
            border: 1px solid #b3b3b373;
            padding: 12px 10px;
            margin: 10px 0px;
            border-radius: 5px;
            width: 100%;
            overflow: hidden;
          }
        }

        a {
          margin: 15px 0px;
          float: right;
        }

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
