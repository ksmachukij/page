<template>
  <v-container
    class="product-list"
    fluid
  >
    <!-- Sidebar Filter -->
    <v-row dense>
      <v-col
        cols="12"
        md="4"
      >
        <v-card class="sidebar">
          <v-card-title>{{ componentText.filter(item => item.Name === 'Filter_Header')[0][languageSystem] }}</v-card-title>
          <v-divider />
          <v-card-text>
            <!-- Search Name Field -->
            <v-text-field
              v-model="searchName"
              :label="componentText.filter(item => item.Name === 'Filter_SearchName')[0][languageSystem]"
              outlined
              dense
              class="mb-4"
            />

            <!-- Multi-select Filters -->

            <v-row dense>
              <v-col
                v-for="(option, optionIndex) in groupOptions"
                :key="optionIndex"
                cols="6"
              >
                <v-checkbox
                  :key="option"
                  v-model="selectedGroups"
                  :label="option"
                  :value="option"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="my-4" />
          <v-btn
            color="primary"
            block
            @click="resetFilters"
          >
            {{ componentText.filter(item => item.Name === 'Filter_Reset_Btn')[0][languageSystem] }}
          </v-btn>
        </v-card>
      </v-col>
      <!-- Main Product Table Section -->
      <v-col
        cols="12"
        md="8"
      >
        <v-data-table
          :headers="headersGroup[languageSystem]"
          :items="filteredProducts"
          :filter-keys="filterKeys"
          :search="searchName"
          :custom-filter="customFilter"
          :multi-sort="true"
          class="elevation-1">
          <template #[`item.name`]="{ item }">
            <v-btn
              variant="text"
              :to="{ name: 'ProductDetail', params: { name: String(item.name) } }"
            >
              {{ item.name }}
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import { componentText, contentSystem } from '@/assets/static/productlist'
import { productGroup, productList } from '@/assets/static/productlist';

export default defineComponent({
  name: 'ProductList',
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
      groupOptions: productGroup, // Group options
      selectedGroups: [], // Selected groups filter
      filterKeys: [],
      searchName: '', // Search input value
      products: productList, // Product list
      headersGroup: {
        TH:  [
            { title: 'ชื่อ', value: 'name', sortable: true },
            { title: 'กลุ่ม', value: 'group', sortable: true },
          ],
        EN: [
          { title: 'Name', value: 'name', sortable: true },
          { title: 'Group', value: 'group', sortable: true },
        ]
      },
      sortBy: [],
      currentPage: 1,
      itemsPerPage: 10,
      sortOptions: [
        { text: 'Name', value: 'name' },
        { text: 'Group', value: 'group' },
      ],
      componentText: componentText,
      contentSystem: contentSystem,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesName = this.searchName
          ? product.name.toLowerCase().includes(this.searchName.toLowerCase())
          : true;

        const matchesGroup = this.selectedGroups.length
          ? this.selectedGroups.includes(product.group)
          : true;

        return matchesName && matchesGroup;
      });
    },
  },
  watch: {
    searchName() {
      this.updateFilterKeys();
    },
    selectedGroups() {
      this.updateFilterKeys();
    },
  },
  mounted() {
    // Access query parameters from the route
    const { query } = this.$route;

    if (query.name) {
      this.searchName = query.name;
    }

    if (query.productGroup && query.productGroup !== 'All') {
      this.selectedGroups = query.productGroup.split(',');
    } else {
      this.selectedGroups = [];
    }
  },
  methods: {
    // Reset all filters
    resetFilters() {
      this.searchName = '';
      this.selectedGroups = [];
    },
    customFilter(currentItem = '', searchValue = '', tableObject) {
      let searchArray = searchValue?.split('|')
      let res = false
      if (this.filterKeys.includes('name')
        && currentItem.toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())) res = true

      if (this.filterKeys.includes('group')
        && searchArray.includes(tableObject?.columns?.group)) {
        res = true
      }
      return res
    },
    updateFilterKeys() {
      this.filterKeys = [];
      if (this.searchName) this.filterKeys.push('name');
      if (this.selectedGroups.length) this.filterKeys.push('group');
    },
  },
});
</script>



<style scoped>
.product-list {
  margin-top: 20px;
}

.sidebar {
  background-color: #f5f2ee;
  padding: 20px;
}

.sort-options {
  padding: 10px;
}

.product-table {
  padding: 20px;
  background-color: white;
}
</style>
