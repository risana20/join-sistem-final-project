<script setup lang="ts">
import JoinourContent from '@/components/JoinourContent.vue'
import MainLayout from '@/layouts/MainLayout.vue'

import { ref } from 'vue';
import coverImage from '../assets/images/misc/cover.png';
import whyImage from '../assets/images/main/why.png'; // Update this path

// Posts data
const allPosts = ref([
    { author: "John Doe", date: "Aug 23, 2021", title: "8 Figma design systems that you can download for free today." },
    { author: "Jane Smith", date: "Aug 24, 2021", title: "Understanding the basics of Vue.js for beginners." },
    { author: "Michael Brown", date: "Aug 25, 2021", title: "Tips for effective project management." },
    { author: "Emily White", date: "Aug 26, 2021", title: "How to enhance your web design skills." }
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
        bgColor: 'bg-yellow-50'
    },
    {
        name: 'Jenny Wilson',
        role: 'Content Writer @Company',
        image: 'src/assets/images/misc/org3.png',
        bgColor: 'bg-white'
    },
    {
        name: 'Leslie Alexander',
        role: 'Content Writer @Company',
        image: 'src/assets/images/misc/org4.png',
        bgColor: 'bg-white'
    }
]);

// Logos data
const logos = ref([
    'src/assets/images/logo/logo1.png',
    'src/assets/images/logo/logo2.png',
    'src/assets/images/logo/logo3.png',
    'src/assets/images/logo/logo4.png',
    'src/assets/images/logo/logo5.png',
    'src/assets/images/logo/logo6.png'
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>

<template>
  <MainLayout>
    <main class="bg-gray-100">
    <!-- Hero Section -->
    <section 
        class="relative bg-cover bg-center h-[calc(100vh-80px)]" 
        :style="{ backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto relative z-10 flex flex-col justify-center h-full px-6">
            <div class="text-sm text-gray-300 mb-2">POSTED ON <strong>STARTUP</strong></div>
            <h1 class="text-5xl font-bold text-white mt-2">
                Step-by-step guide <br /> to choosing great font pairs
            </h1>
            <div class="text-gray-300 mt-2">By <span class="text-blue-500">Jane Doe</span> | May 23, 2022</div>
            <p class="text-gray-300 mt-4 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="mt-4 flex justify-start">
                <button class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">Read More</button>
            </div>
        </div>
    </section>

    <!-- Blog Content Section -->
    <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
                <h2 class="text-2xl font-bold mb-4">Featured Post</h2>
                <div class="border p-4 rounded-lg">
                    <img 
                        src="@/assets/images/main/feature.png" 
                        alt="A modern building with palm trees in front" 
                        class="w-full h-auto mb-4 rounded-lg" 
                        style="max-width: 669px; height: auto; max-height: 352px; object-fit: cover;" 
                    />
                    <div class="text-sm text-gray-500 mb-2">
                        By <span class="text-yellow-500">John Doe</span> | May 23, 2022
                    </div>
                    <h3 class="text-xl font-bold mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </h3>
                    <p class="text-gray-700 mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Read More &gt;
                    </button>
                </div>
            </div>
            <div>
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-bold">All Posts</h2>
                    <a href="#" class="text-yellow-500">View All</a>
                </div>
                <div class="space-y-4">
                    <div 
                        v-for="(post, index) in allPosts" 
                        :key="index"
                        :class="['p-4 bg-gray-100 hover:bg-[#FBF6EA]']"
                    >
                        <div class="text-sm text-gray-500 mb-2">
                            By <span class="text-yellow-500">{{ post.author }}</span> | {{ post.date }}
                        </div>
                        <h3 class="text-lg font-bold text-black">{{ post.title }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-4xl mx-auto mt-10 p-10 bg-purple-50 relative">
      <div class="absolute top-0 left-1/4 w-3/4 h-3 bg-yellow-400"></div>
      <div class="absolute top-0 right-0 w-20 h-3 bg-blue-600"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 class="text-sm font-semibold text-gray-600">ABOUT US</h3>
          <h2 class="text-2xl font-bold text-gray-900 mt-2 ">We are a community of content writers who share their learnings</h2>
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

    <!-- Choose A Category Section (Boxes) -->
    <div class="py-16 bg-gray-50">
        <div class="max-w-screen-lg mx-auto px-4 text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">Choose A Category</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Category Item: Business -->
            <div class="category-box border border-gray-200 p-6 rounded-lg text-left hover:bg-[#075EFD] shadow cursor-pointer">
              <div class="icon mb-4 flex justify-center items-center bg-gray-100 rounded-md p-4 w-12 h-12 mx-auto">
                <img 
                    src="@/assets/images/misc/buss.png" 
                    alt="Business Icon" 
                    class="mx-auto w-8 h-8 object-fit: contain" 
                />
              </div>
              <h3 class="text-lg font-semibold text-black">Business</h3>
              <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <!-- Category Item: Startup -->
            <div class="category-box border border-gray-200 p-6 rounded-lg text-left hover:bg-[#075EFD] shadow cursor-pointer">
              <div class="icon mb-4 flex justify-center items-center bg-gray-100 rounded-md p-4 w-12 h-12 mx-auto">
                <img 
                    src="@/assets/images/misc/stup.png" 
                    alt="Startup Icon" 
                    class="mx-auto w-8 h-8 object-fit: contain" 
                />
              </div>
              <h3 class="text-lg font-semibold text-black">Startup</h3>
              <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <!-- Category Item: Economy -->
            <div class="category-box border border-gray-200 p-6 rounded-lg text-left hover:bg-[#075EFD] shadow cursor-pointer">
              <div class="icon mb-4 flex justify-center items-center bg-gray-100 rounded-md p-4 w-12 h-12 mx-auto">
                <img 
                    src="@/assets/images/misc/eko.png" 
                    alt="Economy Icon" 
                    class="mx-auto w-8 h-8 object-fit: contain" 
                />
              </div>
              <h3 class="text-lg font-semibold text-black">Economy</h3>
              <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <!-- Category Item: Technology -->
            <div class="category-box border border-gray-200 p-6 rounded-lg text-left hover:bg-[#075EFD] shadow cursor-pointer">
              <div class="icon mb-4 flex justify-center items-center bg-gray-100 rounded-md p-4 w-12 h-12 mx-auto">
                <img 
                    src="@/assets/images/misc/tekno.png" 
                    alt="Technology Icon" 
                    class="mx-auto w-8 h-8 object-fit: contain" 
                />
              </div>
              <h3 class="text-lg font-semibold text-black">Technology</h3>
              <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
    </div>

    <div class="py-16 bg-gray-50">
        <div class="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center px-4">
            <!-- Gambar Latar Why We Started -->
            <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
                <img 
                    :src="whyImage" 
                    alt="Group of friends sitting together with a scenic background" 
                    class="shadow-lg w-full h-auto"
                    style="height: 400px; max-width: 600px;" 
                />
                <!-- Papan Putih Overlay -->
                <div class="absolute top-8 left-80 bg-white p-8 shadow-lg w-[100%] md:w-[90%] lg:w-[600px]">
                    <h3 class="text-sm font-semibold text-gray-500 uppercase mb-2">Why we started</h3>
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">It started out as a simple idea and evolved into our passion</h2>
                    <p class="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <button class="px-6 py-3 bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                        Discover our story &gt;
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Authors List Section -->
    <div class="container mx-auto py-12">
        <h1 class="text-4xl font-bold text-center mb-12">List of Authors</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
                v-for="(author, index) in authors" 
                :key="index" 
                :class="['bg-white p-6 rounded-lg shadow-lg text-center', author.bgColor]"
            >
                <img 
                    :alt="'Portrait of ' + author.name" 
                    class="w-24 h-24 rounded-full mx-auto mb-4" 
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
        <div class="mt-12 text-center">
            <p class="text-gray-600 mb-4">We are Featured in</p>
            <div class="flex justify-center space-x-8">
                <img 
                    v-for="(logo, index) in logos" 
                    :key="index" 
                    :alt="'Logo ' + (index + 1)" 
                    height="50" 
                    :src="logo" 
                    width="100"
                />
            </div>
        </div>
    </div>

    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
  <div style="background-color: #FFF5D8;" class="p-10 rounded-lg shadow-lg w-full max-w-6xl"> <!-- Inline style for background color -->
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h3 class="text-sm font-bold text-gray-600">TESTIMONIALS</h3>
        <h2 class="text-3xl font-bold text-gray-800 mt-2">What people say about our blog</h2>
        <p class="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div class="border-l border-gray-300 pl-8">
        <p class="text-gray-800 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="flex items-center mt-6">
          <img alt="Profile picture of Jonathan Vallem" class="w-10 h-10 rounded-full" height="40" src="https://storage.googleapis.com/a1aa/image/SEIHbkS5ngoKKlKEHpqF9pmdEWtCQMdlR066n0rrJfJlGT2JA.jpg" width="40"/>
          <div class="ml-4">
            <p class="font-bold text-gray-800">Jonathan Vallem</p>
            <p class="text-gray-600 text-sm">New York, USA</p>
          </div>
        </div>
        <div class="flex mt-6 space-x-4">
          <button class="w-10 h-10 flex items-center justify-center bg-white text-gray-800 rounded-full shadow">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button class="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full shadow">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  </main>
    <JoinourContent/>
  </MainLayout>
</template>
