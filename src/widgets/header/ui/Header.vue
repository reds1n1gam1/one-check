<template>
  <div class="header">
    <div class="header__logo">
      <i @click="goToHome" class="header__icon fa-solid fa-check-to-slot"></i>
    </div>

    <div class="header__center">
      <p class="header__text"> {{ route.name }} </p>
    </div>

    <div class="header__settings-icon">
      <i class="header__icon fa-solid fa-gear"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goToHome = () => {
  router.push({ path: '/' })
}
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
}

.header__icon {
  font-size: 24px;
}

.header__text {
  font-size: 24px;
  font-weight: 700;
}
</style>