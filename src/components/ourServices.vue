<template>
  <section>
    <mainHeadding title="our services" id="services-header" />
    <div class="container">
      <div
        :class="['serv', `serv-${serv}`, servShow ? 'show' : '']"
        v-for="serv in servs"
        :key="serv"
      >
        <span :class="[state.icon, 'icon']">local_shipping</span>
        <span class="serv-title">fast delivery</span>
        <span class="serv-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import mainHeadding from './mainHeadding.vue'
import { useStore } from 'vuex'
const state = useStore().state

const servs = ref(3)
const servShow = ref(false)

onMounted(() => {
  setTimeout(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= document.querySelector('#services-header').offsetTop - 500) {
        servShow.value = true
      }
    })
  }, 900)
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .serv {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex: 0.23;
    transition: 0.7s;
    transform: translateX(100%);
    opacity: 0;
    &.show {
      transform: translateX(0);
      opacity: 1;
    }
    @for $i from 1 through 3 {
      &.serv-#{$i} {
        transition-delay: #{'0.' + ($i + 3) + s};
      }
    }
    .icon {
      font-size: 60px;
      color: rgb(231, 175, 33);
    }
    .serv-title {
      font-weight: 600;
      font-size: 24px;
      text-transform: capitalize;
      @media (max-width: 767px) {
        text-align: center;
      }
    }
    .serv-disc {
      text-align: center;
      font-weight: 600;
      font-size: 16px;
      color: rgb(104, 104, 104);
    }
  }
}
</style>
