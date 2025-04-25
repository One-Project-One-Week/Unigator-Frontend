<script lang="ts" setup>
import { useUniStore } from '@/stores/useUni'
import { storeToRefs } from 'pinia'
import { onMounted, ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const uniStore = useUniStore()
const { universities, pagination, loading } = storeToRefs(uniStore)

const currentPage = ref(1)
const perPage = ref(10)

const fetchUniversities = async (page: number = 1) => {
    await uniStore.fetchAllUniversities(page)
    currentPage.value = page
}

// fetch countries and cities

interface Country {
    id: number;
    name: string;
    iso2: string;
}

interface City {
    id: number;
    name: string;
}

const countries = ref<Country[]>([])
const selectedCountry = ref('')
const selectedCity = ref('')
const cities = ref<City[]>([])
const headers = new Headers()
headers.append("X-CSCAPI-KEY", import.meta.env.VITE_COUNTRY_API)

const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow' as RequestRedirect
};

const fetchCountries = async () => {
    const res = await fetch(import.meta.env.VITE_COUNTRY_URL, requestOptions)
    const data = await res.json()
    countries.value = data
}

const fetchCities = async () => {
    const res = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry.value}/cities`, requestOptions)
    const data = await res.json()
    cities.value = data
}

watch(selectedCountry, () => {
    if (selectedCountry.value) {
        fetchCities()
    }
})

onMounted(() => {
    fetchUniversities()
    fetchCountries()
})

const universitiesData = computed(() => {
    return universities.value || []
})

const totalPages = computed(() => {
    return pagination.value.last_page
})

const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        fetchUniversities(page)
    }
}

const generatePageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages.value, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }

    return pages
}

</script>

<template>
    <div class="pt-[70px]">
        <div class="h-[400px] bg-gray-50 py-16 flex-column align-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4 flex justify-center">Universities Directory</h1>
            <p class="text-lg text-gray-600 flex justify-center">Browse our comprehensive database of universities from
                around the world.
            </p>
        </div>
    </div>

    <div class="bg-gray-100 py-8">
        <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside class="lg:col-span-1">
                <div class="bg-white rounded-md shadow-md p-6 mb-6">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
                    <div class="flex items-center text-gray-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m.386-6.364l-1.591 1.591M12 12l3.75-3.75M12 12l-3.75 3.75" />
                        </svg>
                        <span class="text-sm">Refine your search</span>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Country</h3>
                        <div>
                            <Select v-model="selectedCountry">
                                <SelectTrigger
                                    class="w-full border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                                    <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Countries</SelectLabel>
                                        <SelectItem v-for="country in countries" :key="country.id"
                                            :value="country.iso2">
                                            {{ country.name }}
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Cities</h3>
                        <div>
                            <Select v-model="selectedCity">
                                <SelectTrigger :disabled="!selectedCountry"
                                    class="w-full border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                                    <SelectValue placeholder="Select City" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Cities</SelectLabel>
                                        <SelectItem v-for="city in cities" :key="city.id" :value="city.name">
                                            {{ city.name }}
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Budget</h3>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">University Type</h3>
                        <div class="space-y-1 text-sm text-gray-600 flex gap-2">
                            <label class="inline-flex items-center">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Public
                            </label>
                            <label class="inline-flex items-center">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Private
                            </label>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Degree Level</h3>
                        <div class="flex flex-col text-sm text-gray-600">
                            <label class="inline-flex items-center mb-1">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Undergraduate
                            </label>
                            <label class="inline-flex items-center mb-1">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Graduate
                            </label>
                            <label class="inline-flex items-center">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Doctorate
                            </label>
                        </div>
                    </div>

                    <button
                        class="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-gray-800 text-sm font-medium">
                        Apply Filters
                    </button>
                </div>
            </aside>

            <main class="lg:col-span-3">
                <div class="flex items-center justify-between mb-4">
                    <div class="bg-white rounded-md shadow-sm flex items-center px-4 py-2 hover:shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-gray-500 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607m0 0v3.752a2.25 2.25 0 01-2.25 2.25H5.252a2.25 2.25 0 01-2.25-2.25V16.5" />
                        </svg>
                        <input type="text" placeholder="Search universities and programs by name or keyword..."
                            class="outline-none text-sm text-gray-700 w-[350px]">
                    </div>
                    <span class="text-sm text-gray-600">Showing {{ pagination.total }} Universities</span>
                </div>

                <div v-if="loading" class="flex justify-center items-center h-64">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- loop university information  -->
                    <router-link :to="{ name: 'university-details', params: { slug: university.slug } }"
                        v-for="university in universitiesData" :key="university.id" href="/universities-details">
                        <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                            <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                                <!-- Images here -->
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ university.name }}</h3>
                                <p class="text-sm text-gray-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="w-4 h-4 inline-block align-text-bottom mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                    </svg>
                                    {{ university.city }}, {{ university.country }}
                                </p>
                                <p class="text-sm text-gray-700 mb-3 line-clamp-2">
                                    {{ university.description }}
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <!-- Looping The programs -->
                                    <span v-for="pn in university?.program_names"
                                        class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                        {{ pn }}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <!-- Pagination Controls -->
                <div class="mt-8 flex justify-center items-center space-x-2">
                    <button @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 1"
                        class="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                        Previous
                    </button>

                    <template v-for="page in generatePageNumbers()" :key="page">
                        <button @click="handlePageChange(page)" :class="[
                            'px-3 py-1 rounded-md text-sm font-medium',
                            currentPage === page
                                ? 'bg-black text-white'
                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                        ]">
                            {{ page }}
                        </button>
                    </template>

                    <button @click="handlePageChange(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                        Next
                    </button>
                </div>
            </main>
        </div>
    </div>
</template>