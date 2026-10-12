<template>
  <GoogleMap
    :api-key="apiKey"
    :center="center"
    :zoom="13"
    style="width: 100%; height: 500px"
  >
    <!-- เพิ่ม options ใน Marker -->
    <Marker
      :options="{ position: markerPosition }"
    />
  </GoogleMap>
</template>

<script setup>
import { ref } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

// กำหนดตำแหน่งของแผนที่ให้ตรงกับตำแหน่ง Marker
const center = ref({ lat: 13.666867245140736, lng: 100.31179772196728 });
const markerPosition = ref({ lat: 13.666867245140736, lng: 100.31179772196728 });

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

</script>
