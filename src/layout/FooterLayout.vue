<template>
  <div class="footer-layout">
    <div class="footer-layout__left">
      <div class="white--text mb-2">
        © Bản quyền thuộc
        <strong>TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA</strong>
      </div>
      <div class="white--text mb-1">Phát triển bởi <span class="red--text">Viettel</span></div>
      <img src="../assets/images/logo1.png" alt="logo" />
    </div>
    <div class="footer-layout__right">
      <div class="white--text float-right mb-2">
        Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm
      </div>
      <div class="footer-layout__right__buttons mb-5">
        <v-btn outlined color="white">App tiêm di động (Cho HCM)</v-btn>
        <v-btn outlined color="white">App Store</v-btn>
        <v-btn outlined color="white">Google play</v-btn>
      </div>
      <img src="../assets/images/logo2.png" alt="logo" class="float-right" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FooterLayout extends Vue {}
</script>

<style lang="scss" scoped>
.footer-layout {
  background: #2d2188;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  &__right {
    &__buttons {
      button {
        border-radius: 8px 8px 8px 0px;
        margin-left: 12px;
      }
    }
  }
}
</style>
