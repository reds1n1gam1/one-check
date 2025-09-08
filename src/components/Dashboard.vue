<template>
    <div v-for="(item, index) in list" :key="index">
        {{  item.name }}
    </div>
</template>

<script setup lang="ts">
type CheckupItem = {
    name: string;
}

const list: CheckupItem[] = [
    {
        name: 'test1'
    }, {
        name: 'test2'
    },
    {
        name: 'test3'
    },
]
</script>
<style scoped></style>