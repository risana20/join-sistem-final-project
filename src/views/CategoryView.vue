<template>
    <MainLayout>
      <main class="bg-white">
        <section class="text-center mb-12 bg-[#F4F0F8] w-full p-8">
          <h1 class="text-4xl font-bold mt-32">Business</h1>
          <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p class="text-gray-500">eiusmod tempor incididunt ut labore.</p>
          <h1 class="text-2xl mt-32">Blog > Business</h1>
        </section>
      </main>
      <div class="container mx-auto p-4">
        <div class="flex">
          <div class="w-2/3">
            <div v-for="post in posts" :key="post.id" class="flex mb-8">
              <img class="w-1/3 h-48 object-cover mr-4" :src="post.image" :alt="post.alt">
              <div>
                <div class="text-yellow-500 font-bold mb-2">{{ post.category }}</div>
                <div class="text-2xl font-bold mb-2">{{ post.title }}</div>
                <div class="text-gray-600">{{ post.description }}</div>
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-8">
            <div class="mb-8">
              <div class="text-xl font-bold mb-4">Categories</div>
              <div v-for="category in categories" :key="category.id" class="mb-2">
                <div :class="['flex items-center p-2 border rounded-lg transition duration-200', 
                            'bg-white text-black', 
                            'hover:bg-blue-500 hover:text-white']">
                  <img :src="category.icon" alt="" class="w-6 h-6 mr-2">
                  <div>{{ category.name }}</div>
                </div>
              </div>
            </div>
            <div>
              <div class="text-xl font-bold mb-4">All Tags</div>
              <div class="flex flex-wrap">
                <div v-for="tag in tags" :key="tag.id" class="border border-black text-black rounded-full px-4 py-1 m-1">
                  {{ tag.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

// Import images
import stupIcon from '@/assets/images/misc/stup.png';
import bussIcon from '@/assets/images/misc/buss.png';
import ekoIcon from '@/assets/images/misc/eko.png';
import teknoIcon from '@/assets/images/misc/tekno.png';

const posts = ref([
  {
    id: 1,
    image: 'src/assets/images/misc/ap1.png',
    alt: 'Two people discussing in front of a whiteboard',
    category: 'BUSINESS',
    title: 'Top 6 free website mockup tools 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
  },
  {
    id: 2,
    image: 'src/assets/images/misc/ap1.png',
    alt: 'Two people discussing in front of a whiteboard',
    category: 'BUSINESS',
    title: 'Step-by-step guide to choosing great font pairs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
  },
  {
    id: 3,
    image: 'src/assets/images/misc/ap1.png',
    alt: 'Two people discussing in front of a whiteboard',
    category: 'BUSINESS',
    title: 'Ten free google fonts that you should use',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
  },
  {
    id: 4,
    image: 'src/assets/images/misc/ap1.png',
    alt: 'Two people discussing in front of a whiteboard',
    category: 'BUSINESS',
    title: 'What did I learn from doing 50+ design sprints?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
  }
]);

const categories = ref([
  { id: 1, name: 'Startup', icon: stupIcon },
  { id: 2, name: 'Business', icon: bussIcon },
  { id: 3, name: 'Economy', icon: ekoIcon },
  { id: 4, name: 'Technology', icon: teknoIcon }
]);

const tags = ref([
  { id: 1, name: 'Business' },
  { id: 2, name: 'Experience' },
  { id: 3, name: 'Screen' },
  { id: 4, name: 'Technology' },
  { id: 5, name: 'Marketing' },
  { id: 6, name: 'Life' }
]);
</script>