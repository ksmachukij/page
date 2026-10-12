<template>
  <v-container class="product-detail">
    <!-- Back Button -->
    <v-btn
      outlined
      color="brown"
      class="back-button"
      @click="goBack"
    >
      {{ componentText.filter(item => item.Name === 'PrdDetails_Back_Btn')[0][languageSystem] }}
    </v-btn>

    <!-- ตรวจสอบว่า product มีข้อมูลหรือไม่ -->
    <div v-if="product">
      <!-- Product Details -->
      <v-row
        justify="center"
        class="product-main"
      >
        <v-col
          cols="12"
          md="8"
          class="text-center"
        >
          <h1 class="product-title">
            {{ product.name }}
          </h1>
          <v-img
            :src="product.image || defaultImage"
            alt="Product Image"
            max-width="800"
            contain
            class="product-image"
          />
        </v-col>
      </v-row>

      <!-- Related Products Section -->
      <v-row class="related-products">
        <v-col
          cols="12"
          class="related-title"
        >
          <h3>{{ contentSystem.filter(item => item.Name === 'PrdDetails_Relate')[0][languageSystem] }} :</h3>
        </v-col>
        <v-col
          v-for="(related, index) in relatedProducts"
          :key="index"
          cols="6"
          md="3"
          class="related-item"
        >
          <v-card
            class="related-card"
            hover
            @click="goToProductDetail(related.id)"
          >
            <v-img
              :src="related.image || defaultImage"
              alt="Related Product Image"
              height="150"
              contain
            />
            <v-card-title class="text-center multi-line">
              {{ related.name }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- หาก product ยังไม่มีข้อมูล -->
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </v-container>
</template>


<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import { componentText, contentSystem } from '@/assets/static/productlist'
import { productList } from '@/assets/static/productlist';
import defaultImagePath from '@/assets/image/IIR.png'; // Import the default image

export default defineComponent({
  name: 'ProductDetail',
  setup() {
    const store = useStore();
    const languageSystem = computed(() => store.state.config.language)
    return {
      store,
      languageSystem
    }
  },
  data() {
    return {
      product: null, // Selected product
      relatedProducts: [], // List of related products
      defaultImage: defaultImagePath, // Path to the default image
      componentText: componentText,
      contentSystem: contentSystem,
    };
  },
  computed: {
    productName() {
      return this.$route.params.name; // Get `id` from route params
    },
  },
  watch: {
    // Watch for route changes to fetch the new product data
    productName: 'fetchProduct',
  },
  mounted() {
    this.fetchProduct(); // Fetch product data when the component mounts
  },
  methods: {
    // Fetch product data based on the current productId
    fetchProduct() {
      this.product =
        productList.find((p) => p.name === this.productName) || null;

      // Filter related products (you may define "related" logic differently)
      this.relatedProducts = productList.filter((p) => p.group == this.product?.group);
    },
    // Navigate to the product detail page
    goToProductDetail(productName) {
      this.$router.push({ name: 'ProductDetail', params: { name: productName } });
    },
    // Navigate back to the product list page
    goBack() {
      this.$router.push({ name: 'ProductList' }); // Update to match your route name
    },
  },
});
</script>


<style scoped>
.product-detail {
  background-color: #f8f1e9;
  padding: 20px;
  color: #333;
}

.back-button {
  margin-bottom: 20px;
}

.product-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.product-image {
  margin: 20px auto;
}

.product-info {
  margin: 20px 0;
  font-size: 1.1rem;
  color: #333;
}

.related-products {
  margin-top: 40px;
}

.related-title {
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.related-item {
  margin-bottom: 20px;
}

.v-card-title {
  font-size: 1rem;
  padding: 10px 0;
  font-weight: bold;
}

.multi-line {
  white-space: normal;
  word-wrap: break-word;
  text-align: center;
}
</style>
