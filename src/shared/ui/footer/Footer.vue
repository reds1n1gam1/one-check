<template>
    <div class="footer">
        <p>
            © {{ initYear }}
            <span v-if="currentYear > initYear"> - {{ currentYear }}</span>
            Polka
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const initYear = ref(2023)
const currentYear = ref(new Date().getFullYear())
</script>