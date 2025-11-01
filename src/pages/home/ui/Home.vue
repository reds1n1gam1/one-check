<template>
    <div class="main">
        <div class="main__categories">
            <CategoryItem v-for="category in categoriesModel.categories" :category="category" />
        </div>
        <div class="main__action">
            <button class="main__button" type="button">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CategoryItem } from '@/entities/category-item';
import { useCategoryModel } from '@/entities/category-item/model';

const categoriesModel = useCategoryModel()

</script>

<style scoped>
.main{
    display: grid;
    gap: 20px;
}

.main__categories {
    display: grid;
    gap: 20px;
}

.main__button {
    width: 100%;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    padding-block: 20px;
}
</style>