<script setup>
import { RouterView } from 'vue-router'
import headerView from './components/headerView.vue';
import footerSec from './components/footerSec.vue';
</script>

<template>
   <headerView />
   <RouterView />
   <footerSec />
</template>
