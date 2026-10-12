<template>
  <v-container
    fluid
    class="pa-0 product-page"
  >
    <div class="ksm-hero">
      <h1>{{ contentSystem.filter(item => item.Name === 'ProductPage_Header')[0][languageSystem] }}</h1>
      <p>{{ contentSystem.filter(item => item.Name === 'ProductPage_SubHeader')[0][languageSystem] }}</p>
    </div>

    <div class="card-grid-wrap">
      <div class="card-grid">
        <div
          v-for="(category, index) in categories"
          :key="category.name"
          class="pcard"
          @click="goToCategory(category)"
        >
          <v-img
            :src="category.image"
            cover
            class="pcard-img"
          />
          <div class="overlay">
            <span class="cnum">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="cname">{{ category.name }}</span>
          </div>
          <div class="arrow-btn">
            <v-icon
              icon="mdi-arrow-top-right"
              size="13"
            />
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { productList2, contentSystem } from '@/assets/static/productlist';

import paraAramidImg from '@/assets/image/product-category/para-aramid.jpg';
import syntheticRubberImg from '@/assets/image/product-category/synthetic-rubber.jpg';
import acceleratorImg from '@/assets/image/product-category/accelerator.jpg';
import antioxidantImg from '@/assets/image/product-category/antioxidant.jpg';
import tackifierImg from '@/assets/image/product-category/tackifier.jpg';
import fillerImg from '@/assets/image/product-category/filler.jpg';
import processingAidImg from '@/assets/image/product-category/processing-aid.jpg';
import curingMaterialImg from '@/assets/image/product-category/curing-material.jpg';

const categoryImages = [
  paraAramidImg,
  syntheticRubberImg,
  acceleratorImg,
  antioxidantImg,
  tackifierImg,
  fillerImg,
  processingAidImg,
  curingMaterialImg,
];

export default defineComponent({
  name: 'ProductPage',
  setup() {
    const store = useStore();
    const languageSystem = computed(() => store.state.config.language);
    return {
      languageSystem,
    };
  },
  data: () => ({
    contentSystem,
    categories: productList2.map((category, index) => ({
      ...category,
      image: categoryImages[index],
    })),
  }),
  methods: {
    goToCategory(category) {
      this.$router.push({
        path: '/product-list',
        query: { productGroup: category.name },
      });
    },
  },
});
</script>

<style scoped>
.product-page {
  --ksm-red: #A41F13;
  --ksm-cream: #FAF5F1;
  --ksm-dark: #292F36;
  --ksm-warm: #8F7A6E;
  background: var(--ksm-cream);
}

/* HERO */
.ksm-hero {
  background: var(--ksm-dark);
  padding: 1.75rem 1.5rem 1.5rem;
}
.ksm-hero h1 {
  font-family: 'Sarabun', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--ksm-cream);
  line-height: 1.1;
  margin: 0;
}
.ksm-hero p {
  font-size: 12px;
  color: var(--ksm-warm);
  margin-top: 4px;
  font-weight: 400;
}

/* GRID WRAP */
.card-grid-wrap {
  padding: 12px;
}

/* ASYMMETRIC GRID */
.card-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 340px 220px 220px;
  gap: 8px;
}
.card-grid .pcard:nth-child(1) {
  grid-row: span 2;
}
.card-grid .pcard:nth-child(1) .cname {
  font-size: 24px;
}

/* CARDS */
.pcard {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: var(--ksm-dark);
}
.pcard :deep(.pcard-img) {
  width: 100%;
  height: 100%;
}
.pcard :deep(.v-img__img) {
  opacity: 0.85;
  transition: transform 0.45s, opacity 0.3s;
}
.pcard:hover :deep(.v-img__img) {
  transform: scale(1.05);
  opacity: 0.6;
}
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(41,47,54,0.88) 0%, rgba(41,47,54,0.05) 55%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px 16px;
}
.cnum {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(224,219,216,0.55);
  margin-bottom: 4px;
  font-family: 'Sarabun', sans-serif;
}
.cname {
  font-family: 'Sarabun', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
}
.arrow-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  border: 1px solid transparent;
  transition: all 0.2s;
}
.pcard:hover .arrow-btn {
  background: var(--ksm-red);
  border-color: var(--ksm-red);
  color: #fff;
}

/* Tablet: 2 cols, card1 full width on top */
@media (max-width: 1023px) and (min-width: 481px) {
  .card-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 260px;
    grid-auto-rows: 260px;
  }
  .card-grid .pcard:nth-child(1) {
    grid-column: span 2;
    grid-row: span 1;
  }
  .card-grid .pcard:nth-child(1) .cname {
    font-size: 22px;
  }
  .ksm-hero h1 {
    font-size: 26px;
  }
}

/* Mobile: 1 col, all equal */
@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
  }
  .card-grid .pcard {
    height: 200px;
  }
  .card-grid .pcard:nth-child(1) {
    grid-row: span 1;
    height: 240px;
  }
  .card-grid .pcard:nth-child(1) .cname {
    font-size: 20px;
  }
  .ksm-hero h1 {
    font-size: 22px;
  }
  .arrow-btn {
    color: #fff !important;
    background: var(--ksm-red) !important;
    border-color: var(--ksm-red) !important;
  }
}
</style>
