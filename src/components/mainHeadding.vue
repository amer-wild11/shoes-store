<template>
   <div class="mainHeadding" :id="id">
      <h2>{{ title }}</h2>
   </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

</script>

<style scoped lang="scss">
.mainHeadding {
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 100px 0;
   h2 {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 2rem;
      background-image: linear-gradient(to right, rgb(119, 0, 255), var(--logo-color));
      background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: .2s ease-out;
   }
}
</style>
