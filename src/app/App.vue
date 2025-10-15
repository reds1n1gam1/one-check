<template>
    <component :is="layout">
        <template v-slot:header>
            <Header />
        </template>

        <template v-slot:default>
            <RouterView />
        </template>

        <template v-slot:footer>
            <Footer />
        </template>
    </component>
</template>

<script setup lang="ts">
import { Header } from '@/widgets/header'
import { Footer } from '@/shared/ui/footer'
import { DefaultLayout } from '@/shared/ui/layouts'

const layout = DefaultLayout
</script>

<style>
@import '_reset.css';
@import 'index.css';
</style>