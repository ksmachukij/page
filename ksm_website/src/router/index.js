
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue'; // Import the About component
import Contact from '@/pages/Contact.vue'; // Import the Contact component
import Product from '@/pages/Product2.vue'; // Import the Product component
// import ProductList from '@/pages/ProductList.vue'; // Import the ProductList component
// import ProductDetail from '@/pages/ProductDetail.vue'; // Import the ProductDetail component



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AboutPage', component: About },
  { path: '/contact', name: 'ContactPage', component: Contact },
  { path: '/request-sale', component: Contact },
  {
    path: '/product',
    name: 'ProductSearch',
    component: Product,
  },
  // {
  //   path: '/product-list',
  //   name: 'ProductList',
  //   component: ProductList,
  //   props: true,
  // },
  // {
  //   path: '/product-detail/:name',
  //   name: 'ProductDetail',
  //   component: ProductDetail,
  //   props: true,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // กรณีกดปุ่มย้อนกลับ/ไปข้างหน้า จะเลื่อนไปยังตำแหน่งที่เคยอยู่
      return savedPosition;
    } else {
      // เลื่อนหน้าจอไปด้านบนสุดเมื่อเปลี่ยนหน้า
      return { top: 0 };
    }
  },
})

// Workaround for https://github.com/vitejs/vite/issues/11804
// router.onError((err, to) => {
//   if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
//     if (!localStorage.getItem('vuetify:dynamic-reload')) {
//       console.log('Reloading page to fix dynamic import error')
//       localStorage.setItem('vuetify:dynamic-reload', 'true')
//       location.assign(to.fullPath)
//     } else {
//       console.error('Dynamic import error, reloading page did not fix it', err)
//     }
//   } else {
//     console.error(err)
//   }
// })

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
