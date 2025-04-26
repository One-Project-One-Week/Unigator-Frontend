<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { University } from '@/types/university';
import { RouterLink } from 'vue-router';
import { useRating } from '@/composables/useRating';

const activeTab = ref('overview');

const props = defineProps<{
    university: University | null
}>()

const isLoading = ref(true)
const { rating, hover, setRating } = useRating(props.university);

watch(() => props.university, (newVal) => {
    if (newVal) {
        isLoading.value = false
    }
}, { immediate: true })

</script>

<template>
    <div class="bg-gray-50 py-6 sm:py-10">
        <div class="container mx-auto px-4">
            <div v-if="isLoading" class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
            <template v-else>
                <nav class="bg-white rounded-2xl shadow-sm mb-6 sm:mb-8">
                    <ul class="flex flex-wrap gap-2 sm:gap-4 p-2">
                        <li @click="activeTab = 'overview'" class="cursor-pointer">
                            <a
                                :class="{ 'bg-[#4895ef] text-white shadow-md rounded-xl p-3': activeTab === 'overview', 'text-gray-600 hover:text-[#4895ef] p-3': activeTab !== 'overview' }">Overview</a>
                        </li>
                        <li @click="activeTab = 'programs'" class="cursor-pointer">
                            <a
                                :class="{ 'bg-[#4895ef] text-white shadow-md rounded-xl p-3': activeTab === 'programs', 'text-gray-600 hover:text-[#4895ef] p-3': activeTab !== 'programs' }">Programs</a>
                        </li>
                        <li @click="activeTab = 'campus-life'" class="cursor-pointer">
                            <a
                                :class="{ 'bg-[#4895ef] text-white shadow-md rounded-xl p-3': activeTab === 'campus-life', 'text-gray-600 hover:text-[#4895ef] p-3': activeTab !== 'campus-life' }">Campus
                                Life</a>
                        </li>
                    </ul>
                </nav>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div class="lg:col-span-2">
                        <section v-if="activeTab === 'overview'" class="mb-8">
                            <div
                                class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <h2 class="text-xl sm:text-2xl font-bold text-gray-800">About University of {{
                                    university?.user.name }}</h2>

                                <div class="bg-white rounded-xl shadow-sm p-4 w-full sm:w-auto">
                                    <p class="font-semibold text-gray-700 mb-3">Rate this University</p>
                                    <div class="flex items-center gap-1">
                                        <template v-for="star in 5" :key="star">
                                            <button @click.prevent="setRating(star)" @mouseover="hover = star"
                                                @mouseleave="hover = 0"
                                                class="text-2xl focus:outline-none transition-transform hover:scale-110">
                                                <span
                                                    :class="star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'">★</span>
                                            </button>
                                        </template>
                                        <span class="ml-2 text-sm text-gray-600">{{ rating }} / 5</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                                {{ university?.description }}
                            </p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                                    <div class="flex gap-3 items-center mb-2">
                                        <div class="bg-[#4895ef]/10 p-2 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                fill="#4895ef" class="bi bi-calendar" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                            </svg>
                                        </div>
                                        <p class="text-base sm:text-lg font-semibold text-gray-800">Founded</p>
                                    </div>
                                    <p class="text-sm sm:text-base text-gray-600">{{ university?.founded }}</p>
                                </div>

                                <div class="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                                    <div class="flex gap-3 items-center mb-2">
                                        <div class="bg-[#4895ef]/10 p-2 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                fill="#4895ef" class="bi bi-people" viewBox="0 0 16 16">
                                                <path
                                                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                            </svg>
                                        </div>
                                        <p class="text-base sm:text-lg font-semibold text-gray-800">Student Population
                                        </p>
                                    </div>
                                    <p class="text-sm sm:text-base text-gray-600">{{ university?.no_of_students }}</p>
                                </div>

                                <div class="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                                    <div class="flex gap-3 items-center mb-2">
                                        <div class="bg-[#4895ef]/10 p-2 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                fill="#4895ef" class="bi bi-award" viewBox="0 0 16 16">
                                                <path
                                                    d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                                            </svg>
                                        </div>
                                        <p class="text-base sm:text-lg font-semibold text-gray-800">Ranking</p>
                                    </div>
                                    <p class="text-sm sm:text-base text-gray-600">#{{ university?.ranking }} World</p>
                                </div>

                                <div class="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                                    <div class="flex gap-3 items-center mb-2">
                                        <div class="bg-[#4895ef]/10 p-2 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                fill="#4895ef" class="bi bi-globe" viewBox="0 0 16 16">
                                                <path
                                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                            </svg>
                                        </div>
                                        <p class="text-base sm:text-lg font-semibold text-gray-800">Website</p>
                                    </div>
                                    <p class="text-sm sm:text-base text-gray-600">
                                        <a :href="university?.website_link" target="_blank">Visit Official Website</a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section v-if="activeTab === 'programs'" class="mb-8">
                            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Academic Programs</h2>
                            <p class="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                                University of Oxford offers a wide range of undergraduate and graduate programs across
                                various disciplines. Below are some of the top programs offered:
                            </p>
                            <h3 class="text-base sm:text-lg font-semibold text-gray-800 mb-4">Top Programs</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <router-link v-for="program in university?.programs"
                                    :to="{ name: 'program-details', params: { id: program.id } }"
                                    class="bg-white rounded-xl shadow-sm p-4 flex items-center font-semibold text-gray-800 hover:shadow-md transition-shadow">
                                    {{ program.name }}
                                </router-link>
                            </div>
                            <h3 class="text-base sm:text-lg font-semibold text-gray-800 mb-4">Degree Levels</h3>
                            <div class="flex flex-wrap gap-2">
                                <button v-for="level in university?.levels"
                                    class="bg-[#4895ef]/10 text-[#4895ef] rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium hover:bg-[#4895ef]/20 transition-colors">{{
                                        level }}</button>
                            </div>
                        </section>

                        <section v-if="activeTab === 'campus-life'" class="mb-8">
                            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Campus Life</h2>
                            <p class="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                                {{ university?.user.bio }}
                            </p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <div v-for="image in university?.image"
                                    class="w-full h-48 sm:h-56 rounded-xl overflow-hidden group">
                                    <img class="w-full h-full object-cover rounded-xl transition-transform group-hover:scale-105 duration-300"
                                        :src="`https://pub-75082a7eeca64d9986a26ca5e876a0a9.r2.dev/${image}`"
                                        alt="Campus Life at Oxford" />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <section class="bg-white rounded-xl shadow-sm p-5 mb-6">
                            <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-5">Contact Information</h3>
                            <div class="space-y-4">
                                <div>
                                    <h4 class="font-semibold text-gray-700 text-sm sm:text-base mb-1">Address</h4>
                                    <p class="text-gray-600 text-xs sm:text-sm">{{ university?.address }}</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-700 text-sm sm:text-base mb-1">Phone</h4>
                                    <p class="text-gray-600 text-xs sm:text-sm">{{ university?.user.phone }}</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-700 text-sm sm:text-base mb-1">Email</h4>
                                    <p class="text-gray-600 text-xs sm:text-sm">{{ university?.user.email }}</p>
                                </div>
                            </div>
                        </section>

                        <section class="bg-white rounded-xl shadow-sm p-5">
                            <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-5">Similar Universities</h3>
                            <div class="space-y-3">
                                <router-link
                                    v-if="university?.similar_universities && university.similar_universities.length > 0"
                                    v-for="suniversity in university.similar_universities"
                                    :to="{ name: 'university-details', params: { slug: suniversity.slug } }"
                                    class="block hover:bg-gray-50 p-3 rounded-xl transition-colors">
                                    <div class="flex items-center space-x-3">
                                        <div
                                            class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                                            <img :src="`https://pub-75082a7eeca64d9986a26ca5e876a0a9.r2.dev/${suniversity.logo}`"
                                                class="w-full h-full object-cover" :alt="suniversity.name">
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-700 text-xs sm:text-sm">{{
                                                suniversity.name }}</h4>
                                            <p class="text-gray-500 text-xs">{{ suniversity?.city }}, {{
                                                suniversity?.country }}</p>
                                        </div>
                                    </div>
                                </router-link>
                                <div v-else class="text-gray-500 text-center py-4">
                                    <p class="text-sm">No similar universities found</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>