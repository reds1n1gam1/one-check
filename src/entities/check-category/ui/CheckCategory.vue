<template>
    <div class="check-category">
        <div class="check-category__header">
            <p>Things to check before leave</p>
        </div>

        <div class="check-category__content">
            <CheckItem @click="toggleState(item.id)" v-for="(item, index) in checkItems" :key="index"
                :title="item.title" :icon="item.icon" :state="item.state">
            </CheckItem>
        </div>

    </div>
</template>

<script>

import { ref } from 'vue'
import CheckItem from '../entities/check-item/ui/CheckItem.vue';

const checkItems = ref < CheckupItem[] > (list)

function toggleState(id: number) {
    console.warn('toggleState ', id)
    const itemIndex = checkItems.value.findIndex(item => item.id === id)
    checkItems.value[itemIndex].state = !checkItems.value[itemIndex].state
}
</script>

<style scoped>
.check-category {
    background: #2d2d2d;
    border-radius: 12px;
    padding: 12px 20px;
}

.check-category__header {
    font-size: 36px;
    font-weight: 700;
    flex-grow: 1;
}

.check-category__content {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(5, 1fr);
}
</style>