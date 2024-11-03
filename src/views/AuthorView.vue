<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <section class="bg-[#F4F0F8] py-12 px-64"> <!-- Menambahkan padding kanan dan kiri -->
      <div class="container mx-auto flex items-center">
        <img
          alt="Profile picture of Andrew Johnson"
          class="w-[251px] h-[294px] mr-8" 
          src="@/assets/images/misc/authorcover.png"
        />
        <div>
          <h1 class="text-4xl font-bold">
            Hey there, I’m Andrew Johnson and welcome to my Blog
          </h1>
          <p class="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
          <div class="flex space-x-4 mt-4">
            <a class="text-gray-600 hover:text-gray-800" href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="text-gray-600 hover:text-gray-800" href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a class="text-gray-600 hover:text-gray-800" href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="text-gray-600 hover:text-gray-800" href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="bg-[#ffd050] h-6 w-[80%] absolute left-[10%] bottom-[-48px]"></div> <!-- Mengubah nilai bottom -->
      </div>
    </section>

    <!-- Section All Posts dengan padding -->
    <section class="py-12 px-64 pb-16"> <!-- Menambahkan padding kanan, kiri, dan bawah -->
      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        All posts
      </h2>
      <div class="space-y-8">
        <div class="flex flex-col md:flex-row items-start">
          <div class="md:w-1/3">
            <img alt="Post Image 1" class="w-full h-full object-cover" height="400" src="@/assets/images/misc/buildpict.png" width="600"/>
          </div>
          <div class="md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <p class="text-yellow-500 text-sm uppercase mb-2">
              Business
            </p>
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              Design tips for designers that cover everything you need
            </h3>
            <p class="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-start">
          <div class="md:w-1/3">
            <img alt="Post Image 2" class="w-full h-full object-cover" height="400" src="@/assets/images/misc/crewauth.png" width="600"/>
          </div>
          <div class="md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <p class="text-yellow-500 text-sm uppercase mb-2">
              Economy
            </p>
            <h3 class="text-xl font-bold text-gray-800 mb-2">
                How to build rapport with your web design clients
            </h3>
            <p class="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>