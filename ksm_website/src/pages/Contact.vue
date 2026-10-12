<template>
  <v-container
    class="main-container"
    fluid
  >
    <!-- Contact Us Section -->
    <v-container
      class="cover-contact"
      fluid
    >
      <v-container class="cover-contact">
        <v-row class="text-start my-10 ">
          <v-col>
            <h2 class="display-2 font-weight-bold">
              {{ contentSystem.filter(item => item.Name === 'ContactUs_Page_Heading')[0][languageSystem] }}
            </h2>
            <p class="subtitle-1">
              {{ contentSystem.filter(item => item.Name === 'ContactUs_Page_SubHeading')[0][languageSystem] }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container>
      <!-- Contact Info Cards -->
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            class="pa-5 text-center text-body-2"
            elevation="2"
          >
            <v-card-title primary-title>
              {{ contentSystem.filter(item => item.Name === 'ContactUs_Page_Sales')[0][languageSystem] }}
            </v-card-title>
            <v-card-text>
              <v-icon large>
                mdi-phone
              </v-icon><br><br>
              (+66) 3 487-5028 Ext. 200<br><br>
              sales01@machukij.co.th
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-card
            class="pa-5 text-center text-body-2"
            elevation="2"
          >
            <v-card-title primary-title>
              {{ contentSystem.filter(item => item.Name === 'ContactUs_Page_AccFi')[0][languageSystem] }}
            </v-card-title>
            <v-card-text>
              <v-icon large>
                mdi-phone
              </v-icon><br><br>
              (+66) 3 487-5028 Ext. 300<br><br>
              finance@machukij.co.th
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Contact Form and Address -->
      <v-row class="mt-10 justify-center">
        <!-- Headquarters Address -->
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            class="pa-5"
            elevation="2"
          >
            <v-card-title primary-title>
              {{ contentSystem.filter(item => item.Name === 'ContactUs_LocationInfo')[0][languageSystem] }}
            </v-card-title>
            <v-card-text>
              <v-row
                v-for="(contact, contactIdx) in contacts"
                :key="contactIdx"
              >
                <v-col
                  cols="1"
                  dence
                >
                  <v-icon>{{ contact.icon }}</v-icon>
                </v-col>
                <v-col>
                  {{ contactIdx == 0 || contactIdx == 4 ? contact.detail[languageSystem] : contact.detail  }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Contact Form -->
        <v-col
          cols="12"
          md="8"
        >
          <v-card
            class="pa-5"
            elevation="2"
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="formData.firstName"
                    :label="componentText.filter(item => item.Name === 'Form_FirstName')[0][languageSystem]"
                    required
                    :rules="[rules.required]"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="formData.lastName"
                    :label="componentText.filter(item => item.Name === 'Form_LastName')[0][languageSystem]"
                    required
                    :rules="[rules.required]"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="formData.email"
                    :label="componentText.filter(item => item.Name === 'Form_Email')[0][languageSystem]"
                    type="email"
                    required
                    :rules="[rules.required, rules.email]"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="formData.phone"
                    :label="componentText.filter(item => item.Name === 'Form_PhoneNumber')[0][languageSystem]"
                    required
                    :rules="[rules.required]"
                  />
                </v-col>
                <v-col cols="12">
                  <v-radio-group
                    v-model="formData.topic"
                    inline
                    :label="componentText.filter(item => item.Name === 'Form_Radio_Select')[0][languageSystem]"
                    :rules="[rules.required]"
                  >
                    <v-radio
                      :label="componentText.filter(item => item.Name === 'Form_Radio_General')[0][languageSystem]"
                      value="general"
                    />
                    <v-radio
                      :label="componentText.filter(item => item.Name === 'Form_Radio_Product')[0][languageSystem]"
                      value="product"
                    />
                    <v-radio
                      :label="componentText.filter(item => item.Name === 'Form_Radio_ReqSales')[0][languageSystem]"
                      value="sales"
                    />
                    <v-radio
                      :label="componentText.filter(item => item.Name === 'Form_Radio_Others')[0][languageSystem]"
                      value="others"
                    />
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="formData.message"
                    :label="componentText.filter(item => item.Name === 'Form_Msg')[0][languageSystem]"
                    rows="4"
                    :rules="[rules.required]"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    :loading="isLoading"
                    color="brown"
                    class="white--text"
                    block
                    @click="submitForm"
                  >
                    <span v-if="!isLoading">{{ componentText.filter(item => item.Name === 'Form_Send_Btn')[0][languageSystem] }}</span>
                    <span v-else>Loading...</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <!-- Map Section -->
      <v-row class="mt-10 justify-center">
        <v-col cols="12">
          <Map />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import { componentText, contentSystem } from '@/assets/static/productlist'

export default defineComponent ({
  name: 'ContactPage',
  setup() {
    const store = useStore();
    const languageSystem = computed(() => store.state.config.language)
    return {
      store,
      languageSystem
    }
  },
  data: () => ({
    contacts: [
      { icon: 'mdi-map-marker', detail: contentSystem.filter(item => item.Name === 'ContactUs_LocationInfo_Addr')[0] },
      { icon: 'mdi-phone', detail: '(+66) 3 487-5028 / (+66) 92-256-1071-4' },
      { icon: 'mdi-fax', detail: '(+66) 3 487-5029' },
      { icon: 'mdi-email', detail: 'info@machukij.co.th' },
      { icon: 'mdi-clock-time-four-outline', detail: contentSystem.filter(item => item.Name === 'ContactUs_LocationInfo_Hour')[0] },
    ],
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      topic: '',
      message: ''
    },
    valid: false,
    isLoading: false,
    rules: {
      required: (value) => !!value || 'This field is required.',
      email: (value) =>
        /.+@.+\..+/.test(value) || 'E-mail must be valid.'
    },
    componentText: componentText,
    contentSystem: contentSystem,
  }),
  watch: {
    '$route.path'(newPath) {
      if (newPath === '/request-sale') {
        this.formData.topic = 'sales'
      }
    }
  },
  mounted() {
    if (this.$route.path == '/request-sale') {
      this.formData.topic = 'sales'
    }
  },
  methods: {
    async submitForm() {
      const { valid } = await this.$refs.form.validate()
      console.log(valid)
      if (!valid) {
        this.loading = false
        return
      }
      this.sendEmail();
    },
    async sendEmail() {
      this.isLoading = true;
      try {
        const apiURL = import.meta.env.VITE_SEND_MAIL_API
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData), // ส่งข้อมูลจากฟอร์ม
        });

        const result = await response.json();

        if (result.status == 'OK') alert(result.message[0]);
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email.');
      } finally {
        this.isLoading = false;
      }
    }
  }
});
</script>

<style>
/* Optional custom styles */
.leaflet-container {
  height: 100%;
  width: 100%;
}
</style>
