<template>
  <div class="header">
    Header
    <img @click="goToHome" src="/public/vite.svg" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push({ path: '/' })
}
</script>