<template>
    <div :class="'category ' + (category.state ? 'category--checked' : 'category--no-checked')"
        @click="openCategoryCheck(category.code)">
        <div class="category__header">
            <p class="category__title"> {{ category.title }} </p>
        </div>
        <div class="category__content">
            <div class="category__description"> {{ category.description }}</div>
            <div class="category__icon-wrap">
                <i :class="'fa-solid fa-' + category.icon"></i>
            </div>
            <div class="category__meta">
                <div class="category__block category__block--left">Last check:</div>
                <div class="category__block category__block--right">{{ category.lastCheck }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICategoryItem } from '@/entities/category-item/model/types';
import { useRouter } from 'vue-router';

const router = useRouter()

const openCategoryCheck = (categoryName: string) => {
    router.push({ path: `/category/${categoryName}` })
}
defineProps<{
    category: ICategoryItem
}>()
</script>

<style scoped>
.category {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 200px;
    background-color: var(--oc-primary-color);
    border-radius: 24px;
    padding: 24px;
    display: grid;
    gap: 12px;
}

.category--checked::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(256, 256, 256, 0.4);
    border-radius: 24px;
}

.category__title {
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 300;
    text-align: left;
    max-width: 35%;
    line-height: 1.6;
}

.category__content {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, auto);
    background-color: var(--oc-accent-color);
    padding: 24px;
    border-radius: 24px;
    color: var(--oc-tertiary-color);
}

.category__description {
    text-align: left;
}

.category__icon-wrap {
    font-size: 48px;
    text-align: right;
}

.category__meta {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.category__block {
    text-align: left;
}

.category__block--right {
    font-size: 16px;
    font-weight: 600;
    text-align: right;
}
</style>