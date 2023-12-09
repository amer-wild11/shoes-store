<template>
  <div class="container">
    <div class="contact-container">
      <h3 class="header">contact</h3>
      <div class="contacts">
        <span class="contact"><span :class="[state.icon, 'icon']">home</span> iraq / karbala</span>
        <span class="contact"><span :class="[state.icon, 'icon']">call</span> 045459458948</span>
        <span class="contact"><span :class="[state.icon, 'icon']">email</span> amer@amer.com</span>
      </div>
    </div>
    <div class="contact-container help-container">
      <h3 class="header">get help</h3>
      <div class="contacts get-help">
        <span class="contact">FAQ</span>
        <span class="contact">shipping</span>
        <span class="contact">returns</span>
        <span class="contact">payment options</span>
      </div>
    </div>
    <div class="contact-container">
      <h3 class="header">our sotres</h3>
      <div class="contacts">
        <span class="contact">sri</span>
        <span class="contact">USA</span>
        <span class="contact">india</span>
        <span class="contact">japan</span>
      </div>
    </div>
    <div class="contact-container follow-us">
      <h3 class="header">follow us</h3>
      <div class="follow-links">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
    <div class="contact-container newsletter-container">
      <h3 class="header">newsletter</h3>
      <div class="contacts newsletter">
        <input type="text" placeholder="your email id here" />
        <button>subscribe</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const state = useStore().state
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 50px;
  background-color: rgba(211, 211, 211, 0.588);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  .contact-container {
    width: 300px;
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
      text-align: center;
      .contacts {
        align-items: center !important;
        justify-content: center !important;
      }
      .follow-links{
        justify-content: center;
        align-items: center;
      }
    }
    .header {
      font-size: 30px;
      font-weight: 600;
      text-transform: capitalize;
      color: var(--logo-color);
      margin-bottom: 10px;
    }
    .contacts {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 10px;
      letter-spacing: 2px;
    }
    .contact {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 15px;
      .icon {
        font-size: 20px;
      }
    }
  }
  .follow-us {
    .follow-links {
      display: flex;
      align-items: center;
      gap: 10px;
      i {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: white;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .newsletter {
    input {
      padding: 6px 10px;
      border-radius: 20px;
      border: 1px solid rgb(100, 50, 193);
      outline: none;
      &::placeholder {
        font-weight: 500;
        text-transform: capitalize;
        letter-spacing: 1.3px;
        font-family: sans-serif;
      }
    }
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      background: linear-gradient(90deg, rgba(34, 39, 195, 0.717) 0%, rgba(163, 45, 253, 0.741) 100%);
      font-weight: 600;
      text-transform: capitalize;
      letter-spacing: 1.3px;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
