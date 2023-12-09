<template>
  <section>
    <mainHeadding title="our customers" id="customers-header" />
    <div class="container">
      <div
        class="customer"
        v-for="customer in customers"
        :key="customer"
        :class="[`customer-${customer}`, customerShow ? 'show' : '']"
      >
        <div class="customerInfo-container">
          <img :src="customer.profile_image" alt="" />
          <div class="customerInfo">
            <span class="username">{{ customer.name }}</span>
            <div class="rate">
              <span :class="[state.icon, 'star']" v-for="rate in customer.rate" :key="rate"
                >star</span
              >
            </div>
          </div>
        </div>
        <div class="comment">
          <p>{{ customer.comment }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import mainHeadding from './mainHeadding.vue'
import { useStore } from 'vuex'
const state = useStore().state
const customers = state.comments.comments
const customerShow = ref(false)

onMounted(() => {
  setTimeout(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= document.querySelector('#customers-header').offsetTop - 600) {
        customerShow.value = true
      }
    })
  }, 700)
})
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  column-gap: 20px;
  row-gap: 10px;
  .customer {
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 lightgray;
    background: rgba(228, 227, 227, 0.64);
    transform: translateX(100%);
    transition: 0.5s;
    opacity: 0;
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    @for $i from 1 through 6 {
      &.customer-#{$i} {
        transition-delay: #{'0.' + ($i + 2)} + s;
      }
    }
    .customerInfo-container {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: 0.2s;
        cursor: pointer;
        box-shadow: 3px 4px 1px 1px rgb(51, 109, 160);
        scale: 1.1;
        transform: translate(-1px);
        &:hover {
          box-shadow: 0 0 0 0 transparent;
          scale: 1;
          transform: translate(0);
        }
      }
      .star {
        color: goldenrod;
      }
      .username {
        font-weight: 600;
        text-transform: capitalize;
        font-size: 15px;
      }
    }
    .comment {
      margin-top: 10px;
      p {
        font-weight: 600;
        color: rgb(68, 68, 68);
      }
    }
  }
}
</style>
