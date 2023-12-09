<template>
  <section>
    <mainHeadding title="web about" id="about-header" />
    <div class="container">
      <div class="content">
        <div :class="['review', reviewShow ? 'show' : '']">
          <div class="imgs">
            <img
              src="../assets/imgs/red_shoes1.png"
              class="imgs active"
              alt=""
              id="img1"
              @click="choosen"
            />
            <img
              src="../assets/imgs/red_shoes2.png"
              class="imgs"
              alt=""
              id="img2"
              @click="choosen"
            />
            <img
              src="../assets/imgs/red_shoes3.png"
              class="imgs"
              alt=""
              id="img3"
              @click="choosen"
            />
            <img
              src="../assets/imgs/red_shoes4.png"
              class="imgs"
              alt=""
              id="img4"
              @click="choosen"
            />
          </div>
          <div class="mainImg">
            <img ref="reviewImage" src="../assets/imgs/red_shoes1.png" alt="" />
          </div>
        </div>
        <div :class="['about', reviewShow ? 'show' : '']">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi obcaecati fuga possimus
            facere sapiente laborum, itaque neque quas, in aperiam et earum accusamus quisquam
            minus? Magnam voluptatibus itaque natus minus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta consequuntur nobis atque totam veritatis culpa, accusamus
            maiores eum. Exercitationem quod voluptate, fugit alias consectetur assumenda non
            provident quos quaerat earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae laborum dolorem magni veniam sunt quae totam, doloribus repellat fugit esse
            voluptatum obcaecati quidem, tenetur hic repellendus, necessitatibus perspiciatis
            quisquam dolorum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            voluptatum, quasi blanditiis, accusamus facilis maiores est numquam repellat, ipsum
            sequi ullam debitis minus maxime saepe et? Quisquam vitae dicta recusandae.
          </p>
        </div>
      </div>
      <div class="button">
        <button>shop now</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import mainHeadding from './mainHeadding.vue'
import { ref, onMounted } from 'vue'

const reviewImage = ref('')
const reviewShow = ref(false)

const choosen = (e) => {
  let imgs = document.querySelectorAll('.imgs')
  imgs.forEach((img) => {
    img.classList.remove('active')
  })
  e.target.classList.add('active')
  reviewImage.value.src = e.target.src
}

onMounted(() => {
  setTimeout(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= document.querySelector('#about-header').offsetTop - 200) {
        reviewShow.value = true
      }
    })
  }, 800)
})
</script>

<style lang="scss" scoped>
.container {
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 1313px) {
      flex-direction: column;
    }
  }
  .review {
    width: 45%;
    display: flex;
    align-items: center;
    gap: 30px;
    transform: translateX(-100%);
    opacity: 0;
    transition: 0.6s;
    &.show {
      transform: translateX(0);
      opacity: 1;
    }
    @media (max-width: 1313px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      align-items: start;
      justify-content: start;
      flex-direction: column;
    }
    img {
      width: 100%;
    }
    .imgs {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      flex-direction: column;
      @media (max-width: 767px) {
        flex-direction: row;
        width: 100%;
      }
      img {
        width: 100px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ca4b59;
        box-shadow: 0 0 10px -2px rgb(244, 80, 80);
        cursor: pointer;
        transition: 0.2s;
        @media (max-width: 767px) {
          width: 100%;
        }
        &:hover {
          border: 1px solid var(--logo-color);
          box-shadow: 0 0 10px -2px var(--logo-color);
        }
        &.active {
          border: 1px solid var(--logo-color);
          box-shadow: 0 0 10px -2px var(--logo-color);
        }
      }
    }
    .mainImg {
      max-width: 100%;
      border: 1px solid lightgray;
      padding: 10px;
      border-radius: 5px;
      box-shadow:
        0 0 10px 0 var(--logo-color),
        0 0 10px 0 rgb(104, 47, 148),
        0 0 10px 0 rgb(0, 255, 242);
      transition: 0.2s;
      &:hover {
        box-shadow:
          0 0 10px 0 var(--logo-color),
          0 0 10px 0 rgb(104, 47, 148);
      }
      img {
        width: 100%;
        @media (min-width: 800px) {
          max-width: 500px;
        }
      }
    }
  }
  .about {
    width: 45%;
    height: fit-content;
    max-height: 300px;
    overflow: auto;
    padding: 10px;
    border: 1px solid rgb(115, 0, 255);
    border-radius: 10px;
    color: rgb(105, 105, 105);
    font-size: 16px;
    transition: 0.7s;
    transition-delay: 0.6s;
    transform: translateX(100%);
    opacity: 0;
    &.show {
      transform: translateX(0);
      opacity: 1;
    }
    @media (max-width: 1313px) {
      width: 100%;
    }
    p {
      font-weight: 600;
      font-size: 15px;
      color: rgb(123, 123, 123);
    }
    &:hover {
      box-shadow: 0 0 10px rgb(100, 60, 131);
    }
  }
  .button {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      padding: 10px 20px;
      border: none;
      background: linear-gradient(to right, rgb(201, 75, 221), rgb(96, 56, 165));
      font-weight: 600;
      font-size: 16px;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      text-transform: capitalize;
    }
  }
}
</style>
