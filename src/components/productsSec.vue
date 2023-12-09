<template>
  <section>
    <mainHeadding title="products" id="products-header" />
    <div class="container" id="productsContainer">
      <div
        :class="[scrollIsHere ? 'show' : '', `product-${product}`, 'product']"
        v-for="product in products"
        :key="product"
      >
        <div class="productImage">
          <img :src="product.image" alt="" />
        </div>
        <div class="title">
          <span>{{ product.title }}</span>
        </div>
        <div class="disc">
          <span>{{ product.disc }}</span>
        </div>
        <div class="price">
          <span>{{ product.price }}$</span>
        </div>
        <div class="rate">
          <span :class="[state.icon, 'star']" v-for="rate in product.rate" :key="rate">star</span>
        </div>
        <div class="cartButton">
          <button>add to cart</button>
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
const scrollIsHere = ref(false)
const products = state.allProducts.products

onMounted(() => {
  setTimeout(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= document.querySelector('#products-header').offsetTop - 200) {
        scrollIsHere.value = true
      }
    })
  }, 700)
})
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 5%;
  .product {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 10px 0 lightgray;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.315);
    gap: 5px;
    background: rgba(67, 76, 252, 0.064);
    box-shadow:
      0 0 10px 0 transparent,
      1px 1px 10px 0 rgba(137, 56, 194, 0.187);
    margin-bottom: 20px;
    transform: translateX(100%);
    opacity: 0;
    transition: 0.6s;
    @for $i from 1 through 5 {
      &.product-#{$i} {
        transition-delay: #{'0.' + ($i + 2)} + s;
      }
    }
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    &:hover {
      box-shadow:
        0 0 10px 0 var(--logo-color),
        1px 1px 10px 0 rgba(137, 56, 194, 0.187);
    }
    .productImage {
      width: 80%;
      img {
        width: 100%;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      padding: 5px 0;
      span {
        font-weight: 600;
        font-size: 40px;
        background-image: linear-gradient(to right, rgb(95, 46, 138), rgb(100, 51, 135));
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .disc {
      text-align: center;
      font-size: 18px;
      color: rgb(123, 123, 123);
      span {
        font-weight: 600;
      }
    }
    .price {
      font-size: 24px;
      span {
        font-weight: 600;
      }
    }
    .rate {
      .star {
        color: rgb(233, 205, 26);
      }
    }
    .cartButton {
      button {
        padding: 5px 10px;
        border-radius: 4px;
        border: 1px solid lightgray;
        background: linear-gradient(to right, rgb(138, 68, 188), rgb(170, 0, 255));
        font-weight: 500;
        font-size: 18px;
        text-transform: capitalize;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>
