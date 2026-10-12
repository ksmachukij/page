<template>
  <v-container class="detail-container">
    <!-- Title Section -->
    <v-row
      class="text-center my-10 text-h4 font-weight-bold"
      no-gutters
    >
      <v-col>
        {{ contentSystem.filter(item => item.Name === 'About_Page_S1_Header')[0][languageSystem] }}
      </v-col>
    </v-row>

    <!-- Content Section -->
    <v-row>
      <v-col cols="12">
        <p class="text-justify">
          {{ contentSystem.filter(item => item.Name === 'About_Page_S1_P1')[0][languageSystem] }}
        </p>
      </v-col>

      <v-col cols="12">
        <p class="text-justify">
          {{ contentSystem.filter(item => item.Name === 'About_Page_S1_P2')[0][languageSystem] }}
        </p>
      </v-col>

      <v-col cols="12">
        <p class="text-justify">
          {{ contentSystem.filter(item => item.Name === 'About_Page_S1_P3')[0][languageSystem] }}
        </p>
      </v-col>

      <v-col cols="12">
        <p class="text-justify">
          {{ contentSystem.filter(item => item.Name === 'About_Page_S1_P4')[0][languageSystem] }}
        </p>
      </v-col>

      <v-col cols="12">
        <p class="text-justify">
          {{ contentSystem.filter(item => item.Name === 'About_Page_S1_P5')[0][languageSystem] }}
        </p>
      </v-col>

      <v-col cols="12">
        <p class="text-justify">
          {{ contentSystem.filter(item => item.Name === 'About_Page_S1_P6')[0][languageSystem] }}
        </p>
      </v-col>
    </v-row>

    <!-- Image and Description Section -->
    <v-row class="mt-5">
      <v-col cols="6">
        <v-img
          src="https://via.placeholder.com/500x300"
          alt="Placeholder Image"
          aspect-ratio="16/9"
        />
      </v-col>
      <v-col
        cols="6"
        class="d-flex align-center justify-center text-center"
      >
        <p class="text-justify">
          {{ contentSystem.filter(item => item.Name === 'About_Page_Dual_1')[0][languageSystem] }}
        </p>
      </v-col>
    </v-row>

    <!-- Centered Image Section -->
    <v-row class="mt-10">
      <v-col cols="12">
        <v-img
          src="https://via.placeholder.com/800x300"
          alt="Placeholder Image"
          aspect-ratio="16/9"
        />
      </v-col>
    </v-row>

    <!-- Meet our Team Section -->
    <v-row class="text-center my-10">
      <v-col
        class="text-h4 font-weight-bold"
        no-gutters
      >
        {{ contentSystem.filter(item => item.Name === 'About_Page_Team_header')[0][languageSystem] }}
      </v-col>
    </v-row>

    <!-- Team Members -->
    <v-row
      justify="center"
      class="text-center"
    >
      <v-col cols="4">
        <v-img
          src="https://via.placeholder.com/300x300"
          alt="Team Member"
          aspect-ratio="1"
        />
        <h4>{{ contentSystem.filter(item => item.Name === 'About_Page_Team_fl1')[0][languageSystem] }}</h4>
        <p>{{ contentSystem.filter(item => item.Name === 'About_Page_Team_position')[0][languageSystem] }}: {{ contentSystem.filter(item => item.Name === 'About_Page_Team_p1')[0][languageSystem] }}</p>
      </v-col>
      <v-col cols="4">
        <v-img
          src="https://via.placeholder.com/300x300"
          alt="Team Member"
          aspect-ratio="1"
        />
        <h4>{{ contentSystem.filter(item => item.Name === 'About_Page_Team_fl2')[0][languageSystem] }}</h4>
        <p>{{ contentSystem.filter(item => item.Name === 'About_Page_Team_position')[0][languageSystem] }}: {{ contentSystem.filter(item => item.Name === 'About_Page_Team_p2')[0][languageSystem] }}</p>
      </v-col>
      <v-col cols="4">
        <v-img
          src="https://via.placeholder.com/300x300"
          alt="Team Member"
          aspect-ratio="1"
        />
        <h4>{{ contentSystem.filter(item => item.Name === 'About_Page_Team_fl3')[0][languageSystem] }}</h4>
        <p>{{ contentSystem.filter(item => item.Name === 'About_Page_Team_position')[0][languageSystem] }}: {{ contentSystem.filter(item => item.Name === 'About_Page_Team_p3')[0][languageSystem] }}</p>
      </v-col>
    </v-row>

    <!-- Mission Section -->
    <v-row class="text-center my-10">
      <v-col>
        <div class="text-h4 font-weight-bold">
          {{ contentSystem.filter(item => item.Name === 'About_Page_Mission_Header')[0][languageSystem] }}
        </div>
        <br>
        <ol
          class="text-left mx-auto"
          style="max-width: 800px;"
        >
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Mission_li1')[0][languageSystem] }}</li>
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Mission_li2')[0][languageSystem] }}</li>
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Mission_li3')[0][languageSystem] }}</li>
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Mission_li4')[0][languageSystem] }}</li>
        </ol>
      </v-col>
    </v-row>

    <!-- Objective Section -->
    <v-row class="text-center my-10">
      <v-col>
        <div class="text-h4 font-weight-bold">
          {{ contentSystem.filter(item => item.Name === 'About_Page_Objective_Header')[0][languageSystem] }}
        </div>
        <br>
        <ol
          class="text-left mx-auto"
          style="max-width: 800px;"
        >
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Objective_li1')[0][languageSystem] }}</li>
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Objective_li2')[0][languageSystem] }}</li>
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Objective_li3')[0][languageSystem] }}</li>
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Objective_li4')[0][languageSystem] }}</li>
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Objective_li5')[0][languageSystem] }}</li>
          <li>{{ contentSystem.filter(item => item.Name === 'About_Page_Objective_li6')[0][languageSystem] }}</li>
        </ol>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import { contentSystem } from '@/assets/static/productlist'
export default defineComponent({
  name: 'AboutPage',
  setup() {
    const store = useStore();
    const languageSystem = computed(() => store.state.config.language)
    return {
      store,
      languageSystem
    }
  },
  data: () => ({
    contentSystem: contentSystem,
  })
});
</script>

<style>
/* Optionally add custom styles */
</style>
