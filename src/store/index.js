import { createStore } from 'vuex'
import allProducts from './products/allProducts'
import comments from './comments/comments'

export default createStore({
  state: {
    headerLinks: [
      {
        name: 'home',
        path: '#landing',
        icon: 'house',
        id: 1
      },
      {
        name: 'products',
        path: '#products-header',
        icon: 'production_quantity_limits',
        id: 2
      },
      {
        name: 'about',
        path: '#about-header',
        icon: 'recent_actors',
        id: 3
      },
      {
        name: 'customers',
        path: '#customers-header',
        icon: 'support_agent',
        id: 4
      },
      {
        name: 'services',
        path: '#services-header',
        icon: 'linked_services',
        id: 5
      },
      {
        name: 'subscribe',
        path: '#subscribe',
        icon: 'subscriptions',
        id: 6
      }
    ],
    icon: 'material-symbols-outlined'
  },
  modules: {
    allProducts,
    comments
  }
})
