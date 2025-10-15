<template>
  <div class="layout layout--default">
    <slot name="header"></slot>

    <div class="main">
      <slot />
    </div>

    <slot name="footer"></slot>

  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  padding: 24px;
}

.main {
  padding: 24px 0;
  min-height: 100%;
}
</style>