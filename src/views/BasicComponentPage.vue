<template>
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Prop </b> </p>
  <learn-prop />
  <hr>
  
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Emit </b> </p>
  <learn-emit @update="updateCount" />
  <p>Number {{ number }}</p>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Slot  </b> </p>
  <!-- ไม่มีการเรียก Slot -->
  <learn-slot />
  <!-- เรียก Fallback Content Slot  -->
  <learn-slot>
    Slot Content
  </learn-slot>
  <!-- เรียก Fallback Named Slot  -->
  <learn-slot>
    <template v-slot:body> Slot </template>
  </learn-slot>
  <hr>
  
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Expose  </b> </p>
  <!-- ไม่มีการเรียก Slot -->
  <learn-expose ref="learn-expose" />
  <button @click="count"> + </button>
</template>

<script lang="ts" setup>
  import { ref, useTemplateRef } from 'vue'
  import LearnProp from '@/components/LearnProp.vue'
  import LearnEmit from '@/components/LearnEmit.vue'
  import LearnSlot from '@/components/LearnSlot.vue'
  import LearnExpose from '@/components/LearnExpose.vue'
  
  // ---------- Emit ----------
  const number = ref(0)
  function updateCount (params: number) {
    number.value += params
  }

  // ---------- Expose ----------
  const expose = useTemplateRef('learn-expose')
  function count () {
    expose.value!.count()
  }
</script>

<style scoped>

</style>