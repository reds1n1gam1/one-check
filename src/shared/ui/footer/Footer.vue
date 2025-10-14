<template>
    <div class="footer">
        <p>
            © {{ initYear }}
            <span v-if="currentYear > initYear"> - {{ currentYear }}</span>
            OneClick
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const initYear = ref(2025)
const currentYear = ref(new Date().getFullYear())
</script>