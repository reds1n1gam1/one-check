<template>
    <div class="check-item">
        <i :class="'check-item__icon fa-solid fa-' + icon"></i>
        <p class="check-item__text"> {{ title }} </p>
    </div>
</template>

<script>
export default {
    props: ['title', 'icon'],
    setup(props) {
        console.log(props.title)
    }
}
</script>

<style scoped>
.check-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #fff;
    aspect-ratio: 1;
    border-radius: 24px;
    padding: 12px;
}

.check-item__icon {
    font-size: 30px;
}

.check-item__text {
    font-size: 10px;
}
</style>