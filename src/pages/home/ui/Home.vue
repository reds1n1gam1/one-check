<template>
    <div class="main">
        <div class="main__categories">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
        </div>
    </div>
</template>

<script setup lang="ts">
import { CategoryItem } from '@/widgets/category-item';


</script>

<style scoped>
.main__categories {
    display: grid;
    gap: 20px;
}
</style>