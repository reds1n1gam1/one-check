<template>
    <component :is="layout">
        <template v-slot:header>
            <!-- <Header /> -->
        </template>

        <template v-slot:navigation>
            <!-- <Navigation /> -->
        </template>

        <template v-slot:default>
            <RouterView />
        </template>

        <template v-slot:footer>
            <!-- <Footer /> -->
        </template>
    </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
// import { Header } from '@/widgets/header'
// import { Navigation } from '@/widgets/navigation'
// import { Footer } from '@/shared/ui/footer'
import { DefaultLayout } from '@/shared/ui/layouts'

const route = useRoute()

// const layout = computed(() => route.meta.layout || DefaultLayout)
const layout = DefaultLayout
</script>

<style>
@import 'index.css';
</style>