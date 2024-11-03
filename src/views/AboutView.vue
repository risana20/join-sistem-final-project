<template>
  <MainLayout>
    <main class="bg-white">
      <!-- Featured Post Section -->
      <div class="container mx-auto px-4 py-36">
        <!-- Image with Overlay Section -->
        <div class="relative flex justify-center mb-16 pt-24">
          <img 
            src="@/assets/images/misc/coverabout.png" 
            alt="Group of friends sitting together" 
            class="shadow-lg"
            style="width: 1280px; height: 444px;" 
          />
          <div class="absolute -top-20 left-[30%] transform -translate-x-1/2 bg-white p-8 w-[90%] md:w-[80%] lg:w-[600px] text-left z-10">
            <h3 class="text-sm font-semibold text-gray-500 uppercase mb-2">About Us</h3>
            <h2 class="text-4xl font-bold text-gray-900 mb-4">We are a team of content writers who share their learnings</h2>
          </div>
          <div class="absolute top-[-130px] left-[60%] transform -translate-x-1/2 bg-white p-4 w-[300px] text-gray-700 z-10">
            <p class="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="absolute bottom-4 left-[35%] transform -translate-x-1/2 bg-blue-600 p-4 md:p-8 shadow-lg w-[90%] md:w-[80%] lg:w-[600px] flex justify-around text-white z-0">
            <div class="text-center">
              <h2 class="text-3xl font-bold">12+</h2>
              <p class="text-sm">Blogs Published</p>
            </div>
            <div class="text-center">
              <h2 class="text-3xl font-bold">18K+</h2>
              <p class="text-sm">Views on Finsweet</p>
            </div>
            <div class="text-center">
              <h2 class="text-3xl font-bold">30K+</h2>
              <p class="text-sm">Total active Users</p>
            </div>
          </div>
        </div>

        <!-- Yellow Line Section -->
        <div class="relative">
          <div class="bg-[#ffd050] h-6 w-[60%] absolute left-[15%] bottom-[65px]"></div>
        </div>
      </div>

      <!-- About Us and Our Mission Section -->
      <div class="max-w-4xl mx-auto mt-10 p-10 bg-purple-50 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-sm font-semibold text-gray-600">ABOUT US</h3>
            <h2 class="text-2xl font-bold text-gray-900 mt-2">We are a community of content writers who share their learnings</h2>
            <p class="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" class="text-yellow-500 font-semibold mt-4 inline-block">Read More ></a>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-600">OUR MISSION</h3>
            <h2 class="text-2xl font-bold text-gray-900 mt-2">Creating valuable content for creatives all around the world</h2>
            <p class="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

      <!-- Our Team of Creatives and Why We Started This Blog Section -->
      <div class="max-w-4xl mx-auto mt-10 p-10 bg-white relative">
        <div class="grid grid-cols-2 gap-8 mb-16">
          <div>
            <h2 class="text-2xl font-bold mb-4">Our team of creatives </h2>
            <p class="text-lg font-bold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <p class="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
          <div class="relative">
            <img 
              alt="Hands joined together in a circle" 
              class="w-full h-auto" 
              height="300" 
              src="@/assets/images/misc/aboutpage1.png"
              width="400"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div class="relative">
            <img 
              alt="Group of people sitting on steps and talking" 
              class="w-full h-auto" 
              height="300" 
              src="@/assets/images/misc/aboutpage2.png"
              width="400"
            />
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Why we started this Blog</h2>
            <p class="text-lg font-bold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <p class="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </div>
      </div>

      <!-- List of Authors Section -->
      <div class="max-w-4xl mx-auto mt-10 p-10 bg-white relative">
        <h1 class="text-4xl font-bold text-center mb-12">List of Authors</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(author, index) in authors" 
            :key="index" 
            :class="['bg-white p-6 rounded-lg shadow-lg text-center', author.bgColor]"
          >
            <img 
              :alt="'Portrait of ' + author.name" 
              class="w-24 h-24 rounded -full mx-auto mb-4" 
              :src="author.image" 
              height="100" 
              width="100"
            />
            <h2 class="text-xl font-bold">{{ author.name }}</h2>
            <p class="text-gray-600">{{ author.role }}</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-600">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Content Section -->
      <JoinourContent />
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinourContent from '@/components/JoinourContent.vue'
import { ref } from 'vue';

// Posts data
const allPosts = ref([
  { author: "John Doe", date: "Aug 23, 2021", title: "8 Figma design systems that you can download for free today." },
  { author: "Jane Smith", date: "Aug 24, 2021", title: "Understanding the basics of Vue.js for beginners." },
  { author: "Michael Brown", date: "Aug 25, 2021", title: "Tips for effective project management." },
  { author: "Emily White", date: "Aug 26, 2021", title: "How to enhance your web design skills." },
  { author: "Guy Hawkins", date: "Aug 26, 2021", title: "How to enhance your web design skills." },
  { author: "Eleanor Pena", date: "Aug 26, 2021", title: "How to enhance your web design skills." },
  { author: "Robert Fox", date: "Aug 26, 2021", title: "How to enhance your web design skills." },
  { author: "Jacob Jones", date: "Aug 26, 2021", title: "How to enhance your web design skills." },
]);

// Authors data
const authors = ref([
  {
    name: 'Floyd Miles',
    role: 'Content Writer @Company',
    image: 'src/assets/images/misc/org1.png',
    bgColor: 'bg-white'
  },
  {
    name: 'Dianne Russell',
    role: 'Content Writer @Company',
    image: 'src/assets/images/misc/org2.png',
    bgColor: 'bg-white'
  },
  {
    name: 'Jenny Wilson',
    role: 'Content Writer @Company ',
    image: 'src/assets/images/misc/org3.png',
    bgColor: 'bg-white'
  },
  {
    name: 'Leslie Alexander',
    role: 'Content Writer @Company',
    image: 'src/assets/images/misc/org4.png',
    bgColor: 'bg-white'
  },
{
    name: 'Guy Hawkins',
    role: 'Content Writer @Company',
    image: 'src/assets/images/misc/org5.png',
    bgColor: 'bg-white'
  },
  {
    name: 'Eleanor Pena',
    role: 'Content Writer @Company',
    image: 'src/assets/images/misc/org6.png',
    bgColor: 'bg-white'
  },
  {
    name: 'Robert Fox',
    role: 'Content Writer @Company ',
    image: 'src/assets/images/misc/org7.png',
    bgColor: 'bg-white'
  },
  {
    name: 'Jacob Jones',
    role: 'Content Writer @Company',
    image: 'src/assets/images/misc/org8.png',
    bgColor: 'bg-white'
  }

]);
</script>