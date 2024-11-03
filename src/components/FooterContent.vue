<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto p-6 bg-gray-900 text-white">
      <footer class="space-y-4">
          <div class="flex justify-between items-center mb-12">
              <div class="text-3xl font-bold">{Finsweet}</div>
              <nav class="space-x-6">
                  <a href="#" class="text-gray-400 hover:text-white">Home</a>
                  <a href="#" class="text-gray-400 hover:text-white">Blog</a>
                  <a href="#" class="text-gray-400 hover:text-white">About us</a>
                  <a href="#" class="text-gray-400 hover:text-white">Contact us</a>
                  <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
              </nav>
          </div>

          <main class="bg-gray-800 p-12 rounded-lg mb-12">
              <div class="flex justify-between items-center">
                  <h1 class="text-4xl font-bold">
                      Subscribe to our newsletter to get the latest updates and news
                  </h1>
                  <div class="flex items-center">
                      <input type="email" placeholder="Enter Your Email"
                             class="p-4 w-full max-w-xs rounded-l-lg bg-gray-700 text-gray-400 focus:outline-none">
                      <button class="p-4 bg-blue-600 text-white rounded-r-lg">Subscribe</button>
                  </div>
              </div>
          </main>

          <div class="flex justify-between items-center text-gray-400">
              <div>Finstreet 118 2561 Fintown</div>
              <div>Hello@finsweet.com 020 7993 2905</div>
          </div>

          <div class="flex justify-end space-x-6 text-gray-400 mt-4">
              <a href="#" class="hover:text-white"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="hover:text-white"><i class="fab fa-twitter"></i></a>
              <a href="#" class="hover:text-white"><i class="fab fa-instagram"></i></a>
              <a href="#" class="hover:text-white"><i class="fab fa-linkedin-in"></i></a>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
    font-family: 'Inter', sans-serif;
}
</style>
