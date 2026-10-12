<template>
  <v-container
    class="main-container"
    fluid
  >
    <!-- Cover Page Section -->
    <v-container
      class="home-cover"
      fluid
    >
      <v-img
        src="../assets/image/home_cover.jfif"
        max-height="654px"
        cover
        gradient="rgba(100,100,100,.75), rgba(100,100,100,.75)"
      >
        <v-row align-content="center">
          <v-col
            cols="12"
            align="center"
          >
            <v-img
              :width="350"
              src="../assets/image/logo.png"
            />
          </v-col>
          <v-col
            cols="12"
            align-self="center"
            class="text-h4 text-center font-weight-bold"
          >
            {{ contentSystem.filter(item => item.Name === 'Home_Title')[0][languageSystem] }}
          </v-col>
        </v-row>
      </v-img>
    </v-container>

    <v-container class="home-section">
      <v-row
        class="md-6"
        justify="center"
      >
        <v-col
          cols="6"
          class="home-section-2-item"
        >
          <v-card>
            <v-img
              src="https://via.placeholder.com/1200x600"
              height="100%"
            />
          </v-card>
        </v-col>

        <v-col
          cols="6"
          class="home-section-2-item"
        >
          <v-card>
            <v-card-title
              primary-title
              class="font-weight-bold wrap-title"
            >
              {{ contentSystem.filter(item => item.Name === 'Home_Dual1_Heading')[0][languageSystem] }}
            </v-card-title>
            <v-card-text>
              {{ contentSystem.filter(item => item.Name === 'Home_Dual1_SubHeading')[0][languageSystem] }}
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="6"
          class="home-section-2-item"
        >
          <v-card>
            <v-card-title
              primary-title
              class="font-weight-bold wrap-title"
            >
              {{ contentSystem.filter(item => item.Name === 'Home_Dual2_Heading')[0][languageSystem] }}
            </v-card-title>
            <v-card-text>
              {{ contentSystem.filter(item => item.Name === 'Home_Dual2_SubHeading')[0][languageSystem] }}
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="home-section-2-item">
          <v-card>
            <v-img
              src="https://via.placeholder.com/1200x600"
              height="100%"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="home-section partner-section">
      <v-row
        justify="center"
        class="text-h4 font-weight-bold"
        no-gutters
      >
        {{ contentSystem.filter(item => item.Name === 'Home_OurPartner_Header')[0][languageSystem] }}
      </v-row>

      <!-- <v-row
        justify="center"
        class="text-subtitle-1 font-weight-regular"
        no-gutters
      >
        {{ contentSystem.filter(item => item.Name === 'Home_OurPartner_Header')[0][languageSystem] }}
        SubPartner1
      </v-row> -->

      <v-row
        class="partner-grid"
        justify="center"
      >
        <v-col
          v-for="partner in partners"
          :key="partner.name"
          cols="auto"
          class="partner-col"
        >
          <div class="partner-item">
            <v-img
              :src="partner.icon || 'https://via.placeholder.com/40'"
              max-height="40px"
              max-width="40px"
            />
            <div class="partner-name">
              {{ partner.name }}
            </div>
          </div>
        </v-col>
      </v-row>
<!--
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn size="small">
          {{ componentText.filter(item => item.Name === 'ViewMore_Btn')[0][languageSystem] }}
        </v-btn>
      </v-row> -->
    </v-container>

    <v-container class="home-section">
      <v-row
        justify="center"
        class="text-h4 font-weight-bold"
        no-gutters
      >
        {{ contentSystem.filter(item => item.Name === 'Home_OurProduct_Header')[0][languageSystem] }}
      </v-row>

      <v-row justify="center">
        <v-col
          v-for="product in products"
          :key="product.title"
        >
          <v-card
            outlined
            class="product-card d-flex flex-column justify-space-between"
          >
            <v-img
              :src="product.image"
              max-height="200px"
              class="product-image"
              cover
            />
            <v-card-title
              primary-title
              class="text-h6 font-weight-bold"
            >
              {{ product.title }}
            </v-card-title>
            <v-card-text>
              {{ product.detail }}
            </v-card-text>
            <v-card-actions>
              {{ componentText.filter(item => item.Name === 'OurPrd_MoreInfo_Btn')[0][languageSystem] }} <v-icon icon="$next" />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          size="small"
          to="/product-list"
        >
          {{ componentText.filter(item => item.Name === 'ViewMore_Btn')[0][languageSystem] }}
        </v-btn>
      </v-row>
    </v-container>

    <v-container class="home-section">
      <v-row
        justify="center"
        no-gutters
      >
        <v-card>
          <v-card-title class="text-center">
            {{ componentText.filter(item => item.Name === 'Card_FAQ')[0][languageSystem] }}
          </v-card-title>

          <v-list
            v-for="(question, index) in questions"
            :key="index"
            v-model:opened="open"
            class="question-section"
          >
            <v-list-group :value="question.id">
              <template #activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :title="question.title"
                />
              </template>

              <v-list-item
                v-for="(detail, i) in question.details"
                :key="i"
                class="question-section"
                :title="detail"
              />
            </v-list-group>
          </v-list>
        </v-card>
      </v-row>
    </v-container>

    <v-container class="home-section">
      <v-row
        justify="center"
        no-gutters
      >
        <v-card class="home-last-section">
          <v-card-title class="text-center">
            {{ componentText.filter(item => item.Name === 'Card_Subs_Header')[0][languageSystem] }}
          </v-card-title>
          <v-row justify="center">
            <v-btn
              class="message-btn"
              size="small"
              color="dangerous"
              to="/contact"
              exact
            >
              {{ componentText.filter(item => item.Name === 'SendMsg_Btn')[0][languageSystem] }}
            </v-btn>
            <v-btn
              class="message-btn inverse-dangerous"
              size="small"
              to="/about"
            >
              {{ componentText.filter(item => item.Name === 'ViewProf_Btn')[0][languageSystem] }}
            </v-btn>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import { componentText, contentSystem } from '@/assets/static/productlist'
import homeProductImage1 from '../assets/image/home_product_1_sub.jpg';
import homeProductImage2 from '../assets/image/home_product_2_sub.jpg';
import homeProductImage3 from '../assets/image/home_product_3_sub.jpg';
import homeProductImage4 from '../assets/image/home_product_4_sub.jpg';


export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore();
    const languageSystem = computed(() => store.state.config.language)
    return {
      store,
      languageSystem
    }
  },
  data: () => ({
    partners: [
      { name: 'TOSOH', icon: '' },
      { name: 'ENEOS', icon: '' },
      { name: 'KYOWA', icon: '' },
      { name: 'IRPC', icon: '' },
      { name: 'WILLING', icon: '' },
      { name: 'SEIKO', icon: '' },
      { name: 'HOSOI', icon: '' },
      { name: 'KOLON', icon: '' },
    ],
    products: [
      {
        image: homeProductImage1,
        title: 'ยางคลอโรพรีน',
        detail: 'ยางอเนกประสงค์ที่มีคุณสมบัติต่างๆพอเหมาะ มีความทนทานต่อแสงแดด โอโซน สภาพอากาศได้ดี และทำงานได้ดีในสภาวะที่ต้องสัมผัสกับน้ำมัน และ สารเคมีอีกหลายชนิด',
        link: ''
      },
      {
        image: homeProductImage2,
        title: 'เส้นใยอะรามิด',
        detail: 'มีคุณสมบัติทนความร้อน ทนต่ออุณหภูมิสูง เป็นฉนวนกันไฟฟ้า และมีความแข็งแรงสูง (แข็งแรงกว่าเหล็ก 6 เท่า และยืดหยุ่นกว่าเหล็ก 4 เท่า)',
        link: ''
      },
      {
        image: homeProductImage3,
        title: 'แม็กนีเซียมออกไซด์',
        detail: 'สารวัลคาไนซ์ จัดเป็นโลหะออกไซด์ ใช้งานร่วมกับซิงค์ออกไซด์ ในกระบวนการวัลคาไนซ์เซชัน',
        link: ''
      },
      {
        image: homeProductImage4,
        title: 'สารเร่งปฏิกิริยาวัลคาไนซ์',
        detail: 'สารเร่งปฏิกิริยาวัลคาไนซ์มีประโยชน์ในการใช้กว้างมาก ชนิดของสารเร่งปฏิกิริยาวัลคาไนซ์ และปริมาณขึ้นอยู่กับการใช้งานด้านการผลิตนั้นๆ วิธีเลือกขึ้นอยู่กับปัจจัยหลายประการ',
        link: ''
      }
    ],
    open: [],
    questions: [
      {
        id: 'q1',
        title: 'Question 1',
        details: ['test1', 'test2']
      },
      {
        id: 'q2',
        title: 'Question 2',
        details: ['test1', 'test2']
      }
    ],
    componentText: componentText,
    contentSystem: contentSystem,
  }),
  methods: {
    viewMore() {
      // Handle the "View More" button click
      alert('View More clicked!');
    }
  },
});
</script>

<style>
.cover-page {
  position: relative;
  height: 100vh;
  margin: 0px;
  padding: 0px;

}

.cover-content {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.cover-image {
  position: relative;
  margin: 0px;
  padding: 0px;
}

.cover-overlay {
  background: rgba(0, 0, 0, 0.5);
  /* Optional overlay for text readability */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.cover-header {
  color: #fff;
  font-size: 3rem;
  /* Adjust size as needed */
  margin-bottom: 0.5rem;
}

.cover-subheader {
  color: #fff;
  font-size: 1.5rem;
  /* Adjust size as needed */
  margin-bottom: 1rem;
}

.view-more-btn {
  background-color: #FF5722;
  /* Customize button color */
  color: #fff;
}

.product-card {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: box-shadow 0.3s ease-in-out;
}

.partner-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
  padding: 0 20px;
}

.partner-col {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.partner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.partner-name {
  font-size: 2.5rem;
  font-weight: 500;
  color: #4A4A4A;
}

.product-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  border-bottom: 1px solid #e0e0e0;
}
</style>
