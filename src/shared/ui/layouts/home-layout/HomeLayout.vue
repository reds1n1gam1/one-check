<template>
    <div class="layout layout--home">
        <slot name="header"></slot>
        <slot name="navigation"></slot>

        <div class="main">
            <slot />
        </div>

        <slot name="footer"></slot>

    </div>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
</script>