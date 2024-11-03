<script setup lang="ts">
import { ref } from 'vue';
const activeLink = ref('');
</script>


<template>
  <nav class="w-full h-[60px] bg-x-black text-white flex items-center justify-between">
    <img src="../assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo" class="ml-20 h-7">
    <ul class="flex gap-4">
        <li>
            <router-link 
                to="/" 
                class="transition-colors duration-300" 
                :class="{
                  'text-x-yellow': activeLink === 'home',
                  'hover:text-yellow-300': activeLink !== 'home'
                }"
                @click="activeLink = 'home'">
                Home
            </router-link>
        </li>
        <li>
            <router-link 
                to="/blog" 
                class="transition-colors duration-300" 
                :class="{
                  'text-x-yellow': activeLink === 'blog',
                  'hover:text-yellow-300': activeLink !== 'blog'
                }"
                @click="activeLink = 'blog'">
                Blog
            </router-link>
        </li>
        <li>
            <router-link 
                to="/about" 
                class="transition-colors duration-300" 
                :class="{
                  'text-x-yellow': activeLink === 'about',
                  'hover:text-yellow-300': activeLink !== 'about'
                }"
                @click="activeLink = 'about'">
                About Us
            </router-link>
        </li>
        <li>
            <router-link 
                to="/contact" 
                class="transition-colors duration-300" 
                :class="{
                  'text-x-yellow': activeLink === 'contact',
                  'hover:text-yellow-300': activeLink !== 'contact'
                }"
                @click="activeLink = 'contact'">
                Contact Us
            </router-link>
        </li>
    </ul>
    <button class="mr-20">
        <router-link 
            to="/contact" 
            class="bg-x-blue px-4 py-2 rounded-full text-center text-xs">
            Contact Us
        </router-link>
    </button>
  </nav>
</template>