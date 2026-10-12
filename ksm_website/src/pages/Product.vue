<template>
  <v-container
    fluid
    class="product-search-container"
  >
    <v-row center
      justify="center">
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="4"
      >
        <v-card class="product-search-card pa-5">
          <v-card-title class="text-center text-h5 font-weight-bold">
            Product Search
          </v-card-title>
          <v-divider class="my-4" />
          <v-card-text>
            <v-form
              ref="searchForm"
              @submit.prevent="onSearch"
            >
              <v-row
                v-for="(field, index) in formFields"
                :key="index"
                class="mb-4"
              >
                <v-col cols="12">
                  <v-select
                    v-if="field.type === 'select'"
                    v-model="searchForm[field.model]"
                    :items="field.items"
                    :label="field.label"
                    outlined
                  />

                  <v-text-field
                    v-else
                    v-model="searchForm[field.model]"
                    :label="field.label"
                    outlined
                    placeholder="Input Name"
                  />
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-btn
                  :loading="isLoading"
                  color="brown darken-1"
                  class="mr-4"
                  @click="onSearch"
                >
                  <span v-if="!isLoading">Search</span>
                  <span v-else>Loading...</span>
                </v-btn>
                <v-btn
                  outlined
                  color="brown"
                  @click="onReset"
                >
                  Reset
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { productGroup } from '../assets/static/productlist';

export default {
  name: 'ProductSearch',
  data() {
    return {
      searchForm: {
        name: '',
        productGroup: 'All',
      },
      isLoading: false,
      formFields: [
        { label: 'Name', model: 'name', type: 'text' },
        {
          label: 'Product Group',
          model: 'productGroup',
          type: 'select',
          items: ['All', ...productGroup], // Spread `productGroup` array into items
        },
      ],
    };
  },
  methods: {
    // Navigate to ProductList with query params from searchForm
    onSearch() {
      this.isLoading = true;
      const { name, productGroup } = this.searchForm;

      this.$router.push({
        name: 'ProductList',
        query: {
          name: name || '',
          productGroup: productGroup || 'All',
        },
      });
    },
    // Reset searchForm to its initial state
    onReset() {
      this.searchForm = {
        name: '',
        productGroup: 'All',
      };
    },
  },
};
</script>


<style scoped>
.product-search-container {
  width: 100%;
  height: 62.6vh;
  /* background-image:
    url('../assets/image/product_bg_1.jpg'),
    url('../assets/image/product_bg_2.jpg'),
    url('../assets/image/product_bg_3.jpg'); */
  background-size: 33.33% 100%;
  background-position: left, center, right;
  background-repeat: no-repeat;
}

.product-search-card {
  background-color: #f5f2ee;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.v-btn {
  width: 100px;
}
</style>
