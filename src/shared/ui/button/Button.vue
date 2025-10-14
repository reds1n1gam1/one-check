<template>
    <button :type="type">{{ title }}</button>
</template>

<script setup>
defineProps(['title', 'type'])
</script>