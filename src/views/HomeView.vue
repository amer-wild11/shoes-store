<script setup>
import landdingSec from '../components/landdingSec.vue'
import productsSec from '../components/productsSec.vue'
import webAbout from '../components/webAbout.vue'
import customersReview from '../components/customersReview.vue'
import ourServices from '../components/ourServices.vue'
import welcomeBackSec from '../components/welcomeBackSec.vue'
</script>

<template>
  <main>
    <landdingSec />
    <productsSec />
    <webAbout />
    <customersReview />
    <ourServices />
    <welcomeBackSec />
  </main>
</template>

<style scoped lang="scss">
main {
  margin-top: 10px;
  width: 100%;
  min-height: calc(100vh - var(--header-height) - 10px);
}
</style>
