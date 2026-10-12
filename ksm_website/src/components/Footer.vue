<template>
  <div class="footer-container">
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.name[languageSystem]"
        :to="link.link"
        variant="plain"
        size="small"
      >
        {{ link.name[languageSystem] }}
      </v-btn>
    </v-row>
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        href="https://www.youtube.com/@เค.เอส.มาชูกิจจํากัด/featured"
        target="_blank"
        color="red"
        fab
        variant="plain"
        size="x-large"
      >
        <v-icon>mdi-youtube</v-icon>
      </v-btn>

      <v-btn
        href="https://www.facebook.com/ksmachukij/?locale=th_TH"
        target="_blank"
        color="blue"
        fab
        variant="plain"
        size="x-large"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
    </v-row>
    <v-row
      justify="center"
      class="text-body-2"
      no-gutters
    >
      Designed By Rangsee Suwantripob | Developed By Putthichai Chaithammapakorn
    </v-row>
    <v-row
      justify="center"
      class="text-body-2"
      no-gutters
    >
      K.S.Machukij co.,Ltd @2024. All rights reserved
    </v-row>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import { componentText } from '@/assets/static/productlist'



export default defineComponent({
  name: 'FooterBar',
  setup() {
    const store = useStore()
    const languageSystem = computed(() => store.state.config.language)
    return {
      languageSystem,
      store
    }
  },
  data: () => ({
    links: [
      {
        name: componentText.filter(item => item.Name === 'Header_Home_Btn')[0],
        link: '/'
      },
      {
        name: componentText.filter(item => item.Name === 'Header_Product_Btn')[0],
        link: '/product-list'
      },
      {
        name: componentText.filter(item => item.Name === 'Header_AboutUs_Btn')[0],
        link: '/about'
      },
      {
        name: componentText.filter(item => item.Name === 'Header_ContactUs_Btn')[0],
        link: '/contact'
      },

    ],
  }),

});

</script>
