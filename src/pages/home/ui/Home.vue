<template>
    <div class="main">
        <div class="main__categories">
            <CategoryItem v-for="category in categoriesModel.categories" :category="category" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { CategoryItem } from '@/entities/category-item';
import { userCategoryModel } from '@/entities/category-item/model';

const categoriesModel = userCategoryModel()

</script>

<style scoped>
.main__categories {
    display: grid;
    gap: 20px;
}
</style>