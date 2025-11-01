<template>
    <div>
        <CheckItemList :items="getItemsByCategory($route.params.categoryName)" />
    </div>
</template>

<script setup lang="ts">
import { CheckItemList } from '@/widgets/check-item-list';
import { useCheckItemModel } from '@/entities/check-item';
import { storeToRefs } from 'pinia';

const store = useCheckItemModel()

const { getItemsByCategory } = storeToRefs(store)
</script>

<style scoped></style>