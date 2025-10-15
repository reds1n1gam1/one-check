<template>
    <div class="check">
        <div class="check__title">
            Check item list
        </div>

        <div class="check__list">
            <ul v-for="item in items" :key="String(item.id)">
                <CheckItem :title="item.title" :icon="item.icon" :state="item.state" />
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">
import { CheckItem, type ICheckItem } from '@/entities/check-item'

defineProps<{
    items: ICheckItem[]
}>()
</script>

<style scoped>
.check {
    display: grid;
    gap: 12px;
}

.check__title {
    font-size: 16px;
    font-weight: 700;
}

.check__list {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(5, 1fr);
}
</style>