<!-- Component ลูก -->
<template>
  <p> A: {{ number }}</p>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  
  const number = ref(0)
  
  function count () {
    number.value += 1
  }

  defineExpose({ number, count })
</script>

<style scoped>
</style>