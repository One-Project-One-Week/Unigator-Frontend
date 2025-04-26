<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import UniDetail from '@/views/UniDetail.vue'
import { useUniStore } from '@/stores/useUni'
import { onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const uniStore = useUniStore()
const isLoading = ref(true)

const fetchData = async () => {
    try {
        await uniStore.fetchTopUniversities()
        isLoading.value = false
    } catch (error) {
        console.error('Error fetching universities:', error)
        isLoading.value = false
    }
}

onMounted(async () => {
    await fetchData()
})

const { topUniversities } = storeToRefs(uniStore)

const topUniversitiesData = computed(() => {
    return topUniversities.value || []
})
</script>

<template>
    <div class="py-10">
        <h2 class="text-4xl font-bold text-center mb-4">
            Featured Universities
        </h2>
        <p class="text-center text-xl font-semibold">
            Explore top-rated universities from around the world
        </p>

        <div v-if="!isLoading && topUniversitiesData.length > 0"
            class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <router-link :to="{ name: 'university-details', params: { slug: university.slug } }"
                v-for="university in topUniversitiesData" :key="university.id"
                :href="`/universities-details/${university.slug}`">
                <div
                    class="bg-white h-90 shadow-2xl rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl">
                    <div class="h-[150px] relative w-full bg-gray-100 flex items-center justify-center">
                        <img v-if="university.logo"
                            :src="`https://pub-75082a7eeca64d9986a26ca5e876a0a9.r2.dev/${university.logo}`"
                            :alt="university.name" class="h-full w-full object-cover">
                    </div>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-black">{{ university.name }}</h3>
                        <p class="mt-1 text-sm text-black">
                            <span class="line-clamp-1">
                                <svg class="w-4 h-4 inline-block mr-1 align-text-bottom" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>

                                {{ university.city }}, {{ university.country }}
                            </span>
                        </p>
                        <p class="mt-2 text-gray-600 dark:text-gray-600 text-sm line-clamp-2">
                            {{ university.description }}
                        </p>
                        <div class="mt-4 flex items-center justify-between items-end">
                            <div class="flex items-center text-yellow-500">
                                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.766 4.635 1.123 6.545z" />
                                </svg>
                                <span class="ml-1 text-gray-700 dark:text-gray-300">{{ university.rating ?
                                    Number(university.rating).toFixed(1) : 'N/A' }}{{ university.rating ? '/5' : ''
                                    }}</span>
                            </div>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-red-800 dark:text-red-100">#{{
                                    university.ranking ? university.ranking : 'N/A' }}</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div v-else-if="isLoading" class="text-center mt-8">
            <p class="text-gray-600">Loading universities...</p>
        </div>
        <div v-else class="text-center mt-8">
            <p class="text-gray-600">No universities found</p>
        </div>
    </div>

    <div class="my-5">
        <h1 class="text-3xl font-bold text-center">Find Programs</h1>
        <p class="text-center mt-4">Search through thousands of academic programs to find your perfect match.</p>
        <div class="flex justify-center mt-4">
            <button
                class="py-2 px-4 bg-blue-700 text-white rounded-[10px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                Explore Programs
            </button>
        </div>
    </div>
</template>