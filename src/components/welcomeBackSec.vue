<template>
  <section class="wrapper" id="subscribe">
    <div class="container">
      <div class="content">
        <img src="../assets/imgs/logshoes.png" alt="" :class="showForm ? 'show' : ''" />
        <form :class="['login', showForm ? 'show' : '']">
          <p>welocome back!</p>
          <div class="usename input">
            <input type="text" id="username" placeholder="username" />
            <label for="username"><span :class="[state.icon, 'icon']">person</span></label>
          </div>
          <div class="password input">
            <input type="text" id="password" placeholder="password" />
            <label for="password"><span :class="[state.icon, 'icon']">lock</span></label>
          </div>
          <p>forget password?</p>
          <button>login</button>
          <div class="icons">
            <img src="../assets/imgs/google.png" alt="" />
            <img src="../assets/imgs/facebook.png" alt="" />
            <img src="../assets/imgs/twitter.png" alt="" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
const state = useStore().state

const showForm = ref(false)

onMounted(() => {
  setTimeout(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= document.querySelector('#subscribe').offsetTop - 200) {
        showForm.value = true
      }
    })
  }, 700)
})
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-image: url(../assets/imgs/loging_bg.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.container {
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 50%;
      transform: translateX(-100%);
      opacity: 0;
      transition: 0.4s;
      &.show {
        transform: translateX(0);
        opacity: 1;
      }
      @media (max-width: 767px) {
        display: none;
      }
    }
    form {
      width: 500px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: rgba(255, 255, 255, 0.251);
      padding: 20px;
      transform: translateX(100%);
      opacity: 0;
      transition: 0.6s;
      transition-delay: 0.5s;
      &.show {
        transform: translateX(0);
        opacity: 1;
      }
      @media (max-width: 767px) {
        width: 90%;
        margin: auto;
      }
      p:first-child {
        margin-bottom: 30px;
        text-align: center;
        font-weight: 700;
        font-size: 30px;
      }
      p {
        text-align: end;
      }
      .input {
        position: relative;
        label {
          position: absolute;
          top: 50%;
          left: 3px;
          transform: translate(0, -50%);
          span {
            font-size: 17px;
          }
        }
      }
      input {
        width: 100%;
        padding: 5px 30px;
        border-radius: 5px;
        background: none;
        border: 2px solid rgb(139, 65, 196);
        outline: none;
        &::placeholder {
          font-weight: 600;
          text-transform: capitalize;
        }
      }
      button {
        padding: 4px 0;
        border: none;
        border-radius: 5px;
        background: linear-gradient(to right, rgb(148, 38, 181), rgb(159, 50, 243));
        font-weight: 600;
        font-size: 15px;
        text-transform: capitalize;
        color: white;
        cursor: pointer;
      }
      .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: white;
          padding: 5px;
        }
      }
    }
  }
}
</style>
