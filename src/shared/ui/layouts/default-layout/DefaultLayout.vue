<template>
  <div class="layout layout--default">
    <slot name="header"></slot>
    <slot name="navigation"></slot>

    <div class="main">

      <slot />
    </div>

    <slot name="footer"></slot>

  </div>
</template>