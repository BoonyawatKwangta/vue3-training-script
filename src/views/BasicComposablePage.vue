<template>
  <!-- <p>Position X: {{ mouse.x }}</p>
  <p>Position Y: {{ mouse.y }}</p> -->

  <!-- เปรียบเทียบการ Sync กันของ Composable และ Pinia -->
  <!-- Composables -->
  <!-- Counter A -->
  <div>
    <p>Counter A: {{ a.count }}</p>
    <button @click="a.increment">เพิ่ม A</button>
  </div>

  <!-- Counter B -->
  <div style="margin-top: 1em;">
    <p>Counter B: {{ b.count }}</p>
    <button @click="b.increment">เพิ่ม B</button>
  </div>

  <!-- Pinia -->
  <p>count: {{ counterStore.count }}</p>
  <p>doubleCount: {{ counterStore.doubleCount }}</p>

  <button @click="counterStore.increment"> + </button>
</template>

<script lang="ts" setup>
  import { useCounter } from '@/composables/useCounter'
  import { useCounterStore } from '@/stores/counter'
  const counterStore = useCounterStore()
  // import { useMouse } from '@/composables/useMouse'
  // const mouse = useMouse()
  const a = useCounter()
  const b = useCounter()
</script>

<style scoped>

</style>