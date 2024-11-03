<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinourContent from '@/components/JoinourContent.vue'
import logo from '@/assets/images/misc/stup.png';
import { ref } from 'vue';

const articles = ref([
  {
    alt: "Two women discussing at a whiteboard",
    image: 'src/assets/images/misc/ap1.png',
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students:",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  },
  {
    alt: "Group of people working on laptops around a table",
    image: 'src/assets/images/misc/ap2.png',
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students:",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  },
  {
    alt: "People in a discussion, one person smiling",
    image: 'src/assets/images/misc/ap3.png',
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students:",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  }
]);
</script>

<template>
    <MainLayout>
        <main class="mt-8 px-64">
            <div class="flex items-center space-x-4">
                <img
                    alt="Author's profile picture"
                    class="h-12 w-12 rounded-full"
                    height="50"
                    src="@/assets/images/misc/bloggerprofile.png"
                    width="50"
                />
                <div>
                    <h2 class="text-lg font-bold text-yellow-500">Andrew Jonson</h2>
                    <p class="text-gray-500">Posted on 27th January 2022</p>
                </div>
            </div>
            <h1 class="mt-4 text-3xl font-bold text-gray-900">
                Step-by-step guide to choosing great font pairs
            </h1>
            <div class="mt-2 flex items-center space-x-2 text-black">
                <img
                    alt="Startup logo"
                    class="h-6 w-6"
                    :src="logo"
                />
                <span>Startup</span>
            </div>
            <div>
                <img
                    alt="A group of people working in an office"
                    class="mt-6 w-full rounded"
                    height="400"
                    src="@/assets/images/misc/blogpostcover.png"
                    width="800"
                />
            </div>
            <div class="mt-6 space-y-6">
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-4 px-24">Lorem ipsum dolor sit amet</h2>
                    <p class="mb-4 px-24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam . Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
                    </p>
                </section>
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-4 px-24">Lorem ipsum dolor sit amet</h2>
                    <p class="mb-4 px-24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
                    </p>
                </section>
                <ul class="list-disc list-inside text-lg text-gray-700 text-2xl font-bold mb-4 px-24">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Non blandit massa enim nec scelerisque</li>
                    <li>Neque egestas congue quisque egestas</li>
                </ul>
                <section class="mb-12">
                    <p class="mb-4 px-24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
                    </p>
                </section>
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-4 px-24">Lorem ipsum dolor sit amet</h2>
                    <p class="mb-4 px-24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
                    </p>
                </section>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white shadow-md rounded-lg overflow-hidden" v-for="(item, index) in articles" :key="index">
                        <img :alt="item.alt" class="w-full h-48 object-cover" :src="item.image" />
                        <div class="p-6">
                            <p class="text-sm text-gray-600 mb-2">
                                By
                                <a class="text-yellow-500" href="#">{{ item.author }}</a>
                                |  {{ item.date }}
                            </p>
                            <h2 class="text-xl font-bold mb-2">
                                {{ item.title }}
                            </h2>
                            <p class="text-gray-700">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  
      <JoinourContent/>
    </MainLayout>
  </template>