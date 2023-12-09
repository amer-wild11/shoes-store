<template>
  <div class="container" id="landing">
    <div class="landding">
      <div class="intro" :class="mounted ? 'show' : ''">
        <div class="text">
          <p class="title">n <span>i</span> ke</p>
          <p class="disc">collection</p>
          <p class="any">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis inventore impedit beatae
            magni ipsum autem tempore debitis aliquam atque aperiam assumenda, itaque fuga labore
            amet sint.
          </p>
        </div>
        <div class="button">
          <button>
            <span>shop now </span><span :class="[state.icon, 'icon']">arrow_forward</span>
          </button>
        </div>
      </div>
      <div class="img" :class="mounted? 'show' : ''">
        <img src="../assets/imgs/shoes.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const state = useStore().state
const mounted = ref(false)

onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 500)
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  background-image: url(../assets/imgs/bg1.png);
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: var(--header-height);
}
.landding {
  width: 90%;
  height: calc(100vh - var(--header-height) - 10px);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    .img {
      display: none !important;
    }
  }
  .intro {
    width: 90%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    transition: 0.6s ease-in-out;
    background: rgb(228, 226, 226);
    transform: translateX(-1000px);
    &.show {
      background: none;
      transform: translateX(0);
    }
    @media (max-width: 767px) {
      width: 100%;
      text-align: center;
    }
    .title {
      font-size: 70px;
      text-transform: uppercase;
      font-family: 'Pacifico', cursive;
      color: var(--logo-color);
      span {
        color: black;
      }
    }
    p.disc {
      font-size: 60px;
      font-weight: 600;
      text-transform: capitalize;
      color: black;
    }
    p.any {
      font-weight: 600;
      font-size: 20px;
      color: rgb(124, 122, 122);
    }
    .button {
      flex: 1;
      display: flex;
      align-items: end;
    }
    button {
      padding: 5px 10px;
      border: none;
      background: linear-gradient(to right, #8a1f928a, var(--logo-color));
      cursor: pointer;
      border-radius: 5px;
      text-transform: capitalize;
      font-weight: 600;
      color: white;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: 0.2s;
      .icon {
        transition: 0.4s;
      }
      &:hover {
        span.icon {
          rotate: 180deg;
        }
      }
    }
  }
  .img {
    display: flex;
    justify-content: end;
    width: 100%;
    transition: 0.6s ease-out;
    transform: translateX(1000px);
    &.show {
      transform: translateX(0);
    }
    img {
      max-width: 600px;
      width: 100%;
    }
  }
}
</style>
