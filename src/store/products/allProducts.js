import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        image: 'https://i.imgur.com/ZCGEDA3.png',
        title: 'Nike',
        disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, tempora.',
        price: 100,
        rate: 0,
        id: 1
      },
      {
        image: 'https://i.imgur.com/ZGbT0U3.png',
        title: 'Nike',
        disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, tempora.',
        price: 50,
        rate: 5,
        id: 2
      },
      {
        image: 'https://i.imgur.com/rpHp64Q.png',
        title: 'Nike',
        disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, tempora.',
        price: 13,
        rate: 1,
        id: 3
      },
      {
        image: 'https://i.imgur.com/hw5lciw.png',
        title: 'Nike',
        disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, tempora.',
        price: 165,
        rate: 2,
        id: 4
      },
      {
        image: 'https://i.imgur.com/GISIsoF.png',
        title: 'Nike',
        disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, tempora.',
        price: 12,
        rate: 2,
        id: 5
      },
      {
        image: 'https://i.imgur.com/qTIjtYu.png',
        title: 'Nike',
        disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, tempora.',
        price: 56,
        rate: 4,
        id: 6
      },
      {
        image: 'https://i.imgur.com/ISIaQ9O.png',
        title: 'Nike',
        disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, tempora.',
        price: 74,
        rate: 3,
        id: 7
      },
      {
        image: 'https://i.imgur.com/JSRgSfs.png',
        title: 'Nike',
        disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, tempora.',
        price: 34,
        rate: 5,
        id: 8
      }
    ]
  }
})