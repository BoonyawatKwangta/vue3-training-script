<template>
  <button @click="count"> + </button>
</template>

<script setup lang="ts">
  interface Emit {
    update: [value: number]
  }
  const emit = defineEmits<Emit>()
  function count () {
    emit('update', 1)
  }

</script>

<style scoped>

</style>