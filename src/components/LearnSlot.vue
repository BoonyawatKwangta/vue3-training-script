<template>
  <p> Header </p>
  <slot> 
    <p> Default Fallback Content Slot </p>
  </slot>
  <slot name="body">
    <p> Default Fallback Named Slot </p>
  </slot>
  <p> Footer </p>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>