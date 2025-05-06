<template>
  <p>count: {{ count }}</p>
  <p>doubleCount: {{ doubleCount }}</p>

  <button @click="increment"> + </button>
</template>

<script lang="ts" setup>
  import { useCounterStore } from '@/stores/counter'
  const { count, doubleCount, increment } = useCounterStore()
</script>

<style scoped>

</style>