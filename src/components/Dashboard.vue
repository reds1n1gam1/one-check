<template>
    <div class="dashboard">
        <div class="dashboard__header">
            <p>Things to check before leave</p>
        </div>
        <div class="dashboard__content">
            <CheckItem v-for="(item, index) in list" :key="index" :title="item.title" :icon="item.icon"
                :state="item.state">
            </CheckItem>

        </div>
    </div>

</template>

<script setup lang="ts">
import CheckItem from './CheckItem.vue';

type CheckupItem = {
    title: string;
    icon: string;
    state: boolean;
}

const list: CheckupItem[] = [
    {
        title: 'House Camera',
        icon: 'camera',
        state: true,
    }, {
        title: 'Computer',
        icon: 'computer',
        state: false,
    },
    {
        title: 'Water in shower',
        icon: 'water',
        state: false,
    },
    {
        title: 'Water in bathroom',
        icon: 'water',
        state: false,
    },
    {
        title: 'Water in kitchen',
        icon: 'water',
        state: false,
    },
    {
        title: 'Stove',
        icon: 'fire-burner',
        state: false,
    },
    {
        title: 'Toaster',
        icon: 'bread-slice',
        state: false,
    },
    {
        title: 'Main window in living room',
        icon: 'house-chimney-window',
        state: false,
    },
]
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