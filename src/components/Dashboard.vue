<template>
    <div class="dashboard">
        <div class="dashboard__header">
            <p>Things to check before leave</p>
        </div>
        <div class="dashboard__content">
            <CheckItem v-for="(item, index) in list" :key="index" :title="item.title" :icon="item.icon"></CheckItem>

        </div>
    </div>

</template>

<script setup lang="ts">
import CheckItem from './CheckItem.vue';

type CheckupItem = {
    title: string;
    icon: string;
}

const list: CheckupItem[] = [
    {
        title: 'House Camera',
        icon: 'camera'
    }, {
        title: 'Computer',
        icon: 'computer'
    },
    {
        title: 'Water in shower',
        icon: 'water'
    },
    {
        title: 'Water in bathroom',
        icon: 'water'
    },
    {
        title: 'Water in kitchen',
        icon: 'water'
    },
    {
        title: 'Stove',
        icon: 'fire-burner'
    },
    {
        title: 'Toaster',
        icon: 'bread-slice'
    },
    {
        title: 'Main window in living room',
        icon: 'house-chimney-window'
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