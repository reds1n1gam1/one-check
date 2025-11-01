<template>
    <div>
        <CheckItemList :items="store.getItemsToCheck"/>
    </div>
</template>

<script setup lang="ts">
import { CheckItemList } from '@/widgets/check-item-list';
import { useCheckItemModel } from '@/entities/check-item';

const store = useCheckItemModel()
</script>

<style scoped></style>