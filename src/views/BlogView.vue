<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinourContent from '@/components/JoinourContent.vue'
</script>

<template>
  <MainLayout>
    <main class="bg-white">
      <!-- Featured Post Section -->
      <main class="w-full">
        <section class="mb-8 bg-[#F4F0F8] p-16 flex flex-col md:flex-row w-full">
          <div class="md:w-1/2">
            <h2 class="text-gray-600 text-sm uppercase mb-2">
              Featured Post
            </h2>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">
              Step-by-step guide to choosing great font pairs
            </h3>
            <p class="text-gray-600 mb-4">
              By
              <span class="text-yellow-500">
                Juno
              </span>
              | May 25, 2022
            </p>
            <p class="text-gray-600 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a class="bg-blue-600 text-white px-4 py-2 rounded" href="#">
              Read More &gt;
            </a>
          </div>
          <div class="md:w-1/2">
            <img alt="Person working at a desk with a computer" class="w-full h-full object-cover" height="400" src="@/assets/images/misc/coverblog.png" width="600"/>
          </div>
        </section>
        <section class="p-16"> <!-- Menambahkan padding di sini -->
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            All posts
          </h2>
          <div class="space-y-8">
            <div class="flex flex-col md:flex-row items-start">
              <div class="md:w-1/3">
                <img alt="Post Image 1" class="w-full h-full object-cover" height="400" src="@/assets/images/misc/ap1.png" width="600"/>
              </div>
              <div class="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <p class="text-yellow-500 text-sm uppercase mb-2">
                  Startup
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
                <img alt="Post Image 2" class="w-full h-full object-cover" height="400" src="@/assets/images/misc/ap2.png" width="600"/>
              </div>
              <div class="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <p class="text-yellow-500 text-sm uppercase mb-2">
                  Business
                </p>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  How to build rapport with your web design clients
                </h3>
                <p class="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-start">
              <div class="md:w-1/3">
                <img alt="Post Image 3" class="w-full h-full object-cover" height="400" src="@/assets/images/misc/ap3.png" width="600"/>
              </div>
              <div class="md:w-2/3 md:pl- 6 mt-4 md:mt-0">
                <p class="text-yellow-500 text-sm uppercase mb-2">
                  Startup
                </p>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Logo design trends to avoid in 2022
                </h3>
                <p class="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-start">
              <div class="md:w-1/3">
                <img alt="Post Image 4" class="w-full h-full object-cover" height="400" src="@/assets/images/misc/ap4.png" width="600"/>
              </div>
              <div class="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <p class="text-yellow-500 text-sm uppercase mb-2">
                  Technology
                </p>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  8 Figma design systems you can download for free today
                </h3>
                <p class="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-start">
              <div class="md:w-1/3">
                <img alt="Post Image 5" class="w-full h-full object-cover" height="400" src="@/assets/images/misc/ap5.png" width="600"/>
              </div>
              <div class="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <p class="text-yellow-500 text-sm uppercase mb-2">
                  Economy
                </p>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Font sizes in UI design: The complete guide to follow
                </h3>
                <p class="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
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
              <div class="icon mb-4 flex justify-center items -center bg-gray-100 rounded-md p-4 w-12 h-12 mx-auto">
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
    </main>
    <JoinourContent/>
  </MainLayout>
</template>