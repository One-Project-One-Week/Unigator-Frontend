<script lang="ts" setup>
import UniDetail from '@/views/UniDetail.vue'
</script>

<template>
    <div class="py-10">
        <h2 class="text-4xl font-bold text-center mb-4">
            Featured Universities
        </h2>
        <p class="text-center text-xl font-semibold">
            Explore top-rated universities from around the world
        </p>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <a href="">
                <div
                    class="bg-white shadow-2xl rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl">
                    <div class="h-[150px] relative w-full bg-gray-100 flex items-center justify-center">
                    </div>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-black">Harvard University</h3>
                        <p class="mt-1 text-sm text-black">
                            <svg class="w-4 h-4 inline-block mr-1 align-text-bottom" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Cambridge, United States
                        </p>
                        <p class="mt-2 text-gray-600 dark:text-gray-600 text-sm">
                            Harvard University is a private Ivy League research university in Cambridge,
                            Massachusetts. Established in...
                        </p>
                        <div class="mt-4 flex items-center justify-between">
                            <div class="flex items-center text-yellow-500">
                                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.766 4.635 1.123 6.545z" />
                                </svg>
                                <span class="ml-1 text-gray-700 dark:text-gray-300">4.9/5</span>
                            </div>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">#1</span>
                        </div>
                    </div>
                </div>
            </a>
            <a href="">
                <div
                    class="bg-white shadow-2xl rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl">
                    <div class="h-[150px] relative w-full bg-gray-100 flex items-center justify-center">
                    </div>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-black">Stanford University</h3>
                        <p class="mt-1 text-sm text-black">
                            <svg class="w-4 h-4 inline-block mr-1 align-text-bottom" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Stanford, United States
                        </p>
                        <p class="mt-2 text-gray-600 dark:text-gray-600 text-sm">
                            Stanford University is a private research university in Stanford, California. It is known
                            for its academic strength,...
                        </p>
                        <div class="mt-4 flex items-center justify-between">
                            <div class="flex items-center text-yellow-500">
                                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.766 4.635 1.123 6.545z" />
                                </svg>
                                <span class="ml-1 text-gray-700 dark:text-gray-300">4.8/5</span>
                            </div>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-blue-800 dark:text-white">#2</span>
                        </div>
                    </div>
                </div>
            </a>
            <a href="">
                <div
                    class="bg-white shadow-2xl rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl">
                    <div class="h-[150px] relative w-full bg-gray-100 flex items-center justify-center">
                    </div>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-black">Cambridge University</h3>
                        <p class="mt-1 text-sm text-black">
                            <svg class="w-4 h-4 inline-block mr-1 align-text-bottom" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Cambridge, United States
                        </p>
                        <p class="mt-2 text-gray-600 dark:text-gray-600 text-sm">
                            MIT is a private research university in Cambridge, Massachusetts, founded in 1861. It is
                            traditionally known fo...
                        </p>
                        <div class="mt-4 flex items-center justify-between">
                            <div class="flex items-center text-yellow-500">
                                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.766 4.635 1.123 6.545z" />
                                </svg>
                                <span class="ml-1 text-gray-700 dark:text-gray-300">4.9/5</span>
                            </div>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-800 text-white dark:bg-green-800 dark:text-white">#3</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="mt-5">
        <h1 class="text-3xl font-bold text-center">Find Programs</h1>
        <p class="text-center mt-4">Search through thousands of academic programs to find your perfect match.</p>
        <div class="flex justify-center mt-4">
            <button
                class="py-2 px-4 bg-blue-500 text-white rounded-[10px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                Explore Programs
            </button>
        </div>
    </div>
</template>