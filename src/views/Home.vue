<template>
  <v-container class="Home">
    <h2 class="text-center">Trang chủ</h2>
    <router-link to="/login" class="text-center">Đăng nhập</router-link>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
