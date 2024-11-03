<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const province = ref('');
const city = ref('');
const message = ref('');
const provinces = ['Province 1', 'Province 2', 'Province 3']; // Ganti dengan data yang sesuai
const cities = ['City 1', 'City 2', 'City 3']; // Ganti dengan data yang sesuai

const handleSubmit = () => {
  // Logika pengiriman pesan
  console.log({
    fullName: fullName.value,
    email: email.value,
    province: province.value,
    city: city.value,
    message: message.value,
  });
  // Reset form setelah pengiriman
  fullName.value = '';
  email.value = '';
  province.value = '';
  city.value = '';
  message.value = '';
};
</script>

<template>
  <MainLayout>
    
    <main class="container mx-auto py-16 px-6">
      <div class="text-center mb-12">
        <h2 class="text-sm font-bold text-gray-500">CONTACT US</h2>
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Let’s Start a Conversation</h1>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>

      <div class="bg-yellow-300 p-6 rounded-lg mb-12">
        <div class="flex justify-between">
          <div>
            <h3 class="font-bold text-gray-800">Working hours</h3>
            <p class="text-gray-800">Monday To Friday<br>9:00 AM to 8:00 PM<br>Our Support Team is available 24/7</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-800">Contact Us</h3>
            <p class="text-gray-800">020 7993 2905<br>hello@finsweet.com</p>
          </div>
        </div>
      </div>

      <form class="space-y-4" @submit.prevent="handleSubmit">
        <input v-model="fullName" type="text" placeholder="Full Name" class="w-full p-4 border border-gray-300 rounded" />
        <input v-model="email" type="email" placeholder="Your Email" class="w-full p-4 border border-gray-300 rounded" />
        <div class="flex space-x-4">
          <select v-model="province" class="w-1/2 p-4 border border-gray-300 rounded">
            <option value="" disabled selected>Province</option>
            <option v-for="province in provinces" :key="province" :value="province">{{ province }}</option>
          </select>
          <select v-model="city" class="w-1/2 p-4 border border-gray-300 rounded">
            <option value="" disabled selected>City</option>
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
        </div>
        <textarea v-model="message" placeholder="Message" class="w-full p-4 border border-gray-300 rounded h-32"></textarea>
        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded">Send Message</button>
      </form>
    </main>
    
  </MainLayout>
</template>

<style scoped>
/* Tambahkan gaya CSS tambahan jika diperlukan */
</style>