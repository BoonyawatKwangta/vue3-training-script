<template>
  <p>Position X: {{ mouse.x }}</p>
  <p>Position Y: {{ mouse.y }}</p>
</template>

<script lang="ts" setup>
  import { useMouse } from '@/composables/useMouse'
  const mouse = useMouse()
</script>

<style scoped>

</style>