<template>
    <div :class="'check-item check-item--state-' + (state ? 'checked' : 'not-checked')">
        <template v-if="state">
            <i class="check-item__icon check-item__icon--checked fa-solid fa-check"></i>
        </template>
        <template v-else>
            <i :class="'check-item__icon fa-solid fa-' + icon"></i>
            <p class="check-item__text"> {{ title }} </p>
        </template>
    </div>
</template>

<script lang="ts">
export default {
    props: ['title', 'icon', 'state']
}
</script>

<style scoped>
.check-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #2d2d2d;
    border: 1px solid #545454;
    aspect-ratio: 1;
    border-radius: 24px;
    padding: 12px;
}

.check-item--state-checked {
    background: #fff;
    color: #2d2d2d;
}

.check-item__icon {
    font-size: 30px;
}

.check-item__text {
    font-size: 10px;
}
</style>