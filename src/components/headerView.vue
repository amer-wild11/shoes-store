<template>
  <header>
    <div class="logo">
      <span :class="['myLogo-title', mounted? 'show' : '']">Wi<span>l</span>d</span>
      <img src="../assets/logo.ico" alt="" :class="['myLogo', mounted ? 'show' : '']" />
    </div>
    <ul class="links">
      <li
        v-for="link in state.headerLinks"
        :key="link"
        :class="[`link-${link.id}`, mounted ? 'show' : '']"
      >
        <a :href="link.path">{{ link.name }}</a>
      </li>
    </ul>
    <ul class="icons">
      <li>
        <span class="after"></span>
        <span :class="[state.icon, 'icon']">notifications</span>
      </li>
      <li>
        <span class="after"></span>
        <span :class="[state.icon, 'icon']">shopping_bag</span>
      </li>
      <li>
        <span class="after"></span>
        <span :class="[state.icon, 'icon']">account_circle</span>
      </li>
      <li class="sidebar-button" :class="sidebar ? 'sidebar-show' : ''">
        <span class="after"></span>
        <span :class="[state.icon, 'icon']" @click="sidebar = !sidebar">{{
          sidebar ? 'menu_open' : 'menu'
        }}</span>
      </li>
    </ul>
    <ul class="sidebar" :class="sidebar ? 'show' : ''">
      <ul>
        <li v-for="link in state.headerLinks" :key="link">
          <a :href="link.path">
            <span :class="[state.icon, 'icon']">{{ link.icon }}</span>
            <span>{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </ul>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const state = useStore().state
const sidebar = ref(false)

document.addEventListener('click', (e) => {
  const sidebarSec = document.querySelector('.sidebar')
  const sidebarButton = document.querySelector('.sidebar-button')

  if (!sidebarSec.contains(e.target) && !sidebarButton.contains(e.target)) {
    sidebar.value = false
  }
})

const mounted = ref(false)

onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 900)
})
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 10.5px 20px;
  box-shadow: 0 0 10px 0 lightgray;
  gap: 20px;
  background-color: white;
  z-index: 100;
  .logo {
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    align-items: center;
    gap: 10px;
    .myLogo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: 0.2s;
      transition-duration: 0.5s;
      transform: translateY(-100px);
      &.show {
        transform: translateY(0);
      }
    }
    span {
      letter-spacing: 1px;
      font-family: 'Ephesis', cursive;
    }
    span:first-child {
      color: black;
      font-weight: 600;
      font-size: 20px;
      text-transform: capitalize;
      transition: .2s;
      transform: translateY(-100px);
      &.show {
        transform: translateY(0);
      }
      span {
        color: var(--logo-color);
      }
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 19px;
    border-right: 1px solid lightgray;
    padding: 0 10px;
    width: 100%;
    @media (max-width: 950px) {
      display: none;
    }
    li {
      height: 26px;
      padding: 0 5px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: start;
      transition: 0.6s;
      cursor: pointer;
      user-select: none;
      font-size: 13px;
      transform: translateX(800px);
      @for $i from 1 through 6 {
        &.link-#{$i} {
          transition-duration: #{'0.' + $i} + s;
        }
      }
      &.show {
        transform: translateX(0);
      }
      &:not(:last-child) {
        border-right: 1px solid lightgray;
      }
      a {
        color: black;
        font-weight: 700;
        letter-spacing: 1.1px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
      }
      .icon {
        margin-top: 2px;
        font-size: 20px;
      }
      span {
        font-weight: 600;
        text-transform: capitalize;
        transition: 0.2s;
        &:not(.icon) {
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
      }
      @media (min-width: 767px) {
        &:hover {
          background: var(--logo-color);
          a {
            color: white;
          }
          span {
            color: whitesmoke;
          }
        }
      }
    }
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 5px;
    li {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: relative;
      .after {
        width: 10px;
        height: 10px;
        background: var(--logo-color);
        position: absolute;
        top: 2px;
        right: 4px;
        border-radius: 50%;
        display: none;
      }
    }
    .sidebar-button {
      @media (min-width: 950px) {
        display: none;
      }
      &.sidebar-show {
        background: var(--logo-color);
        color: white;
      }
    }
    .icon {
      width: 27px;
      height: 27px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      @media (max-width: 950px) {
        width: 33px;
        height: 33px;
        font-size: 20px;
      }
      transition: 0.2s;
      cursor: pointer;
      position: relative;
      user-select: none;
      @media (min-width: 767px) {
        &:hover {
          background: var(--logo-color);
          color: white;
        }
      }
    }
  }
  .sidebar {
    position: fixed;
    height: 100%;
    top: var(--header-height);
    right: var(--hidden-sidebar-width);
    background-color: white;
    border: 1px solid lightgray;
    border-top: none;
    transition: 0.2s ease-in-out;
    &.show {
      right: 0;
    }
    ul {
      width: var(--sidebar-width);
      padding: 10px;
      display: flex;
      flex-direction: column;
    }
    li {
      border-radius: 4px;
      position: relative;
      transition: 0.2s;
      scale: 0.9;
      cursor: pointer;
      &:hover {
        scale: 1.1;
        a {
          color: black;
          span {
            font-weight: 700;
          }
        }
      }
      a {
        font-weight: 600;
        text-transform: capitalize;
        color: rgba(0, 0, 0, 0.622);
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 10px;
        .icon {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
