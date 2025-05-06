<template>
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Router View & Router Link </b> </p>
  <div>
    <router-link to="/basic-essentials"> Basic Essentials </router-link>
  </div>
  <div>
    <router-link to="/basic-components"> Basic Components </router-link>
  </div>
  <div>
    <button @click="goToEssential"> Go To Basic Essentials </button>
  </div>
  <div>
    <button @click="goToComponent"> Go To Basic Components </button>
  </div>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Dynamic Route </b> </p>
  <button @click="goToProductID(123)">
    Go To Product
  </button>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  // ---------- Router View & Router Link ----------
  function goToEssential () {
    router.push('/basic-essentials')
  }
  function goToComponent () {
    router.push('/basic-components')
  }

  // ---------- Dynamic Route ----------
function goToProductID (productId: number) {
  router.push({
    name: 'ProductPage',
    params: { id: productId }
  })
}
</script>

<style scoped>
</style>