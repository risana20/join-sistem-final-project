<script setup lang="ts">
import { ref } from 'vue';
const activeLink = ref('');
</script>

<template>
   <div class="py-16 bg-white">
      <div class="max-w-screen-lg mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Join Us</h2>
        <p class="text-gray-600 mb-4">Become part of our vibrant community and share your knowledge with others.</p>
        <p class="text-gray-600">We are always looking for passionate individuals to contribute. If you're interested in joining us, please reach out!</p>
        <a href="#" class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded">Contact Us</a>
      </div>
   </div>
</template>
