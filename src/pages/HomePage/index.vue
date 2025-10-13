<template>
    <div class="home-page">

        <div class="home-page__notification">
            <p>Your last check for category homs is {{ Date.now() }}</p>
        </div>

        <div class="home-page__menu">
            <button>Check Home</button>
            <button>Check Car</button>
            <button>Add new category</button>
            <button>Edit category</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>