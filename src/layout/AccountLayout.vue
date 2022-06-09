<template>
  <div class="account-layout">
    <v-row no-gutters class="account-layout__row">
      <v-col cols="6" class="account-layout__row__col">
        <img src="../assets/images/login.png" alt="login" class="account-layout__row__col__image" />
      </v-col>
      <v-col cols="6" class="account-layout__row__col">
        <slot></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AccountLayout extends Vue {}
</script>

<style lang="scss" scoped>
.account-layout {
  overflow: hidden;
  height: 100%;
  width: 100%;

  &__row {
    height: 100%;
    width: 100%;

    &__col {
      &__image {
        position: fixed;
        width: 50%;
        height: 100%;
      }
    }
  }
}
</style>
