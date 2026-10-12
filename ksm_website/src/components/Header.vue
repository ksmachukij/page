<template>
  <v-app-bar
    app
  >
    <v-toolbar-title>
      <img
        src="@/assets/image/logo.png"
        alt="Website Logo"
        class="logo"
      >
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      text
      to="/"
    >
      {{ systemText.filter(item => item.Name === 'Header_Home_Btn')[0][languageSystem] }}
    </v-btn>
    <v-btn
      text
      to="/about"
    >
      {{ systemText.filter(item => item.Name === 'Header_AboutUs_Btn')[0][languageSystem] }}
    </v-btn>
    <v-btn
      text
      to="/contact"
    >
      {{ systemText.filter(item => item.Name === 'Header_ContactUs_Btn')[0][languageSystem] }}
    </v-btn>
    <v-btn
      text
      to="/product"
    >
      {{ systemText.filter(item => item.Name === 'Header_Product_Btn')[0][languageSystem] }}
    </v-btn>
    <v-btn
      to="/request-sale"
      size="small"
      class="dangerous-buttom"
    >
      {{ systemText.filter(item => item.Name === 'Header_ReqSales_Btn')[0][languageSystem] }}
    </v-btn>
    <div class="theme-switcher">
      <v-icon>mdi-white-balance-sunny</v-icon>
      <v-switch
        v-model="isDarkTheme"
        inset
        hide-details
        class="theme-switch"
        @change="switchTheme"
      />
      <v-icon>mdi-moon-waning-crescent</v-icon>
    </div>
    <v-btn
      id="menu-activator"
      color="primary"
    >
      {{ language }}
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list v-model="language">
        <v-list-item
          v-for="(item, index) in languageList"
          :key="index"
          :value="item"
          @click="() => handleLanguage(item)"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex'
import { componentText } from '@/assets/static/productlist'

export default defineComponent({
  name: 'HeaderBar',
  setup() {
    const isDarkTheme = ref(false);
    const languageList = ['TH', 'EN']
    const switchTheme = () => {
      document.body.classList.toggle('dark-theme', isDarkTheme.value);
    };
    const store = useStore()
    const languageSystem = computed(() => store.state.config.language)

    return {
      isDarkTheme,
      switchTheme,
      languageList,
      store,
      languageSystem
    };
  },
  data: () => ({
    language: 'TH',
    systemText: componentText,
  }),
  methods: {
    handleLanguage(newValue) {
      this.store.dispatch('config/setLanguageSystem', {'language': newValue})
      this.language = newValue
    }
  }
});
</script>
<style>
.dangerous-buttom {
  background-color: #A41F13 !important;
  color: #fff !important;
}

</style>
