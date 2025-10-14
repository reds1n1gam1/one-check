<template>
    <div class="navigation">
        Navigation
        <div class="ul">
            <li v-for="({ icon, title, to }, index) in items">
                <RouterLink :to="to">{{ title }}</RouterLink>
            </li>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const items = reactive([
    {
        title: 'Home',
        to: '/',
        icon: 'home'
    },
    {
        title: 'Categories',
        to: '/category',
        icon: 'category'
    },
    {
        title: 'Check page',
        to: '/check',
        icon: 'bookshelf'
    }
])
</script>