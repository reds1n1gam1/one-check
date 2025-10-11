<template>
    <div class="dashboard">
        <div class="dashboard__header">
            <p>Things to check before leave</p>
        </div>
        <div class="dashboard__content">
            <CheckItem @click="toggleState(item.id)" v-for="(item, index) in checkItems" :key="index" :title="item.title"
                :icon="item.icon" :state="item.state">
            </CheckItem>

        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import CheckItem from './CheckItem.vue';

type CheckupItem = {
    id: number;
    title: string;
    icon: string;
    state: boolean;
}


let list: CheckupItem[] = [
    {
        id: 1,
        title: 'House Camera',
        icon: 'camera',
        state: false,
    }, {
        id: 2,
        title: 'Computer',
        icon: 'computer',
        state: false,
    },
    {
        id: 3,
        title: 'Water in shower',
        icon: 'water',
        state: false,
    },
    {
        id: 4,
        title: 'Water in bathroom',
        icon: 'water',
        state: false,
    },
    {
        id: 5,
        title: 'Water in kitchen',
        icon: 'water',
        state: false,
    },
    {
        id: 6,
        title: 'Stove',
        icon: 'fire-burner',
        state: false,
    },
    {
        id: 7,
        title: 'Toaster',
        icon: 'bread-slice',
        state: false,
    },
    {
        id: 8,
        title: 'Main window in living room',
        icon: 'house-chimney-window',
        state: false,
    },
]

const checkItems = ref<CheckupItem[]>(list)

function toggleState(id: number) {
    console.warn('toggleState ', id)
    const itemIndex = checkItems.value.findIndex(item => item.id === id)
    checkItems.value[itemIndex].state = !checkItems.value[itemIndex].state
}
</script>
<style scoped>
.dashboard {
    background: #2d2d2d;
    border-radius: 12px;
    padding: 12px 20px;
}

.dashboard__header {
    font-size: 36px;
    font-weight: 700;
    flex-grow: 1;
}

.dashboard__content {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(5, 1fr);
}
</style>