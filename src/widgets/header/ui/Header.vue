<template>
  <div class="header">
    Header
    <img class="header__logo" @click="goToHome" src="/public/logo.png" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push({ path: '/' })
}
</script>

<style scoped>
.header__logo {
  --oc-logo-size: 36px;

  width: var(--oc-logo-size);
  height: var(--oc-logo-size);
  object-fit: cover;
}
</style>