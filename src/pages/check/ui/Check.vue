<template>
    <div>
        <CheckItemList :items="checkItemsModel.items"/>
    </div>
</template>

<script setup lang="ts">
import { CheckItemList } from '@/widgets/check-item-list';
import { useCheckItemModel } from '@/entities/check-item';

const checkItemsModel = useCheckItemModel()
</script>

<style scoped></style>