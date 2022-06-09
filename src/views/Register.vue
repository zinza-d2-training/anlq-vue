<template>
  <AccountLayout>
    <div class="register">
      <ValidationObserver v-slot="{ invalid }" class="register__span">
        <form @submit.prevent="submitForm" class="register__span__form">
          <h2 class="text-left pb-3">Đăng ký tài khoản</h2>
          <ValidationProvider rules="required|numeric|validateCMND" v-slot="{ errors }">
            <div class="register__span__form__input">
              <label for="cmnd" class="d-flex">
                Số CMND/CCCD <span class="red--text">(*)</span>
              </label>
              <v-text-field
                v-model="user.cmnd"
                outlined
                type="text"
                name="cmnd"
                :error-messages="errors[0]"
                placeholder="Số CMND/CCCD"></v-text-field>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <div class="register__span__form__input">
              <label for="email" class="d-flex"> Email <span class="red--text">(*)</span> </label>
              <v-text-field
                v-model="user.email"
                outlined
                type="text"
                name="email"
                :error-messages="errors[0]"
                placeholder="Email"></v-text-field>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|min:8|regex:^\S+$" v-slot="{ errors }">
            <div class="register__span__form__input">
              <label for="password" class="d-flex">
                Mật khẩu <span class="red--text">(*)</span>
              </label>
              <v-text-field
                v-model="user.password"
                type="password"
                name="password"
                outlined
                :error-messages="errors[0]"
                placeholder="**************"></v-text-field>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="register__span__form__input">
              <label for="name" class="d-flex">
                Họ và tên <span class="red--text">(*)</span>
              </label>
              <v-text-field
                v-model="user.name"
                outlined
                type="text"
                name="name"
                :error-messages="errors[0]"
                placeholder="Họ và tên"></v-text-field>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="register__span__form__input">
              <label for="dateOfBirth" class="d-flex">
                Ngày sinh <span class="red--text">(*)</span>
              </label>
              <v-menu
                v-model="isDate"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto">
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormatted"
                    readonly
                    v-on="on"
                    outlined
                    type="text"
                    name="dateOfBirth"
                    :error-messages="errors[0]"
                    placeholder="Ngày/Tháng/Năm"></v-text-field>
                </template>
                <v-date-picker
                  v-model="user.dateOfBirth"
                  @input="isDate = false"
                  :date-format="(dateFormatted = formatDate(user.dateOfBirth))"></v-date-picker>
              </v-menu>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="register__span__form__input">
              <label for="gender" class="d-flex">
                Giới tính <span class="red--text">(*)</span>
              </label>
              <v-select
                :items="genders"
                v-model="user.gender"
                outlined
                type="text"
                name="gender"
                :error-messages="errors[0]"
                placeholder="Giới tính"></v-select>
            </div>
          </ValidationProvider>
          <button :disabled="invalid || isLoading" class="float-right">
            Tiếp tục <v-icon color="indigo">mdi-arrow-right</v-icon>
          </button>
        </form>
      </ValidationObserver>
    </div>
  </AccountLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
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
    formatDate(date) {
      if (!date) {
        return null;
      }
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    }
  }
})
export default class Register extends Vue {
  genders: Array<string> = ['Nam', 'Nữ'];
  dateFormatted: string = '';
  $router: any;
  user!: UserState;
  isLoading: boolean = false;
  isDate: boolean = false;

  async submitForm() {
    try {
      this.isLoading = true;
      await delay(5000);
      this.isLoading = false;
      this.$router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__span {
    width: 50%;

    &__form {
      button {
        color: #000d80;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
