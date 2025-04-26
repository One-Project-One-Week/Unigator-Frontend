<script lang="ts" setup>
import { useUniStore } from '@/stores/useUni'
import { storeToRefs } from 'pinia'
import { onMounted, ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useCountryAndCity } from '@/composables/getCountryAndCity'
import { useProgramStore } from '@/stores/useProgram'
import Program from '@/components/Program.vue'

const uniStore = useUniStore()
const programStore = useProgramStore()
const { universities, pagination, loading } = storeToRefs(uniStore)
const currentPage = ref(1)
const perPage = ref(10)

interface Country {
    id: number;
    name: string;
    iso2: string;
    emoji: string;
}

interface City {
    id: number;
    name: string;
}

// Filter states
const selectedCountry = ref<Country | null>(null)
const selectedCity = ref('')
const budget = ref<number | null>(null)
const universityType = ref<'public' | 'private' | null>(null)
const cities = ref<City[]>([])

const fetchUniversities = async (page: number = 1) => {
    const filters = {
        country: selectedCountry.value?.name,
        city: selectedCity.value,
        budget: budget.value,
        type: universityType.value
    }
    await uniStore.fetchAllUniversities(page, perPage.value, filters)
    currentPage.value = page
}

const {
    countries,
    fetchCountries,
    requestOptions
} = useCountryAndCity()

const fetchCities = async (country: Country) => {
    if (!selectedCountry.value) return
    const res = await fetch(`https://api.countrystatecity.in/v1/countries/${country.iso2}/cities`, requestOptions)
    const data = await res.json()
    cities.value = data
}

watch(selectedCountry, () => {
    if (selectedCountry.value) {
        fetchCities(selectedCountry.value)
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

const activeTab = ref('Universities')
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

    <div class="flex justify-center mx-auto py-4 px-4 mt-8 bg-gray-100">
        <div class="w-[40%] flex justify-center gap-10">
            <ul class="flex space-x-4 text-lg font-semibold">
                <li @click="activeTab = 'Universities'" class="cursor-pointer">
                    <a
                        :class="{ 'bg-white shadow-md rounded-md p-2': activeTab === 'Universities', 'text-black hover:text-blue-500': activeTab !== 'Universities' }">Universities</a>
                </li>
                <li @click="activeTab = 'Programs'" class="cursor-pointer">
                    <a
                        :class="{ 'bg-white shadow-md rounded-md p-2': activeTab === 'Programs', 'text-black hover:text-blue-500': activeTab !== 'Programs' }">Programs</a>
                </li>
            </ul>
        </div>
    </div>

    <section v-if="activeTab === 'Universities'">
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
                                <!-- <Select v-model="selectedCountry">
                                    <SelectTrigger
                                        class="w-full border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                                        <SelectValue placeholder="Select Country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Countries</SelectLabel>
                                            <SelectItem v-for="country in countries" :key="country.id" :value="country">
                                                {{ country.name }}
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select> -->
                                <select v-model="selectedCountry"
                                    class="w-full py-1 border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                                    <option v-for="country in countries" :key="country.id" :value="country">
                                        {{ country.name }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-4">
                            <h3 class="text-sm font-semibold text-gray-700 mb-2">Cities</h3>
                            <div>
                                <!-- <Select v-model="selectedCity">
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
                                </Select> -->
                                <select v-model="selectedCity" :disabled="!selectedCountry"
                                    class="w-full py-1 border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                                    <option v-for="city in cities" :key="city.id" :value="city.name">
                                        {{ city.name }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-4">
                            <h3 class="text-sm font-semibold text-gray-700 mb-2">Budget</h3>
                            <input type="number" v-model="budget"
                                class="w-full py-2 px-2 border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                        </div>

                        <div class="mb-4">
                            <h3 class="text-sm font-semibold text-gray-700 mb-2">University Type</h3>
                            <div class="space-y-1 text-sm text-gray-600 flex gap-2">
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="universityType" value="public"
                                        class="form-radio h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                    Public
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="universityType" value="private"
                                        class="form-radio h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                    Private
                                </label>
                            </div>
                        </div>
                        <button @click="fetchUniversities(1)"
                            class="bg-blue-700 text-white py-2 px-4 rounded-md w-full hover:bg-blue-400 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md focus:outline-none hover:ring-2 hover:ring-blue-400 focus:ring-offset-2 hover:bg-blue-500">
                            Apply Filters
                        </button>
                    </div>
                </aside>

                <main class="lg:col-span-3">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex gap-4">
                            <div class="flex items-center justify-between mb-4 md:flex-row flex-col gap-4">
                                <div
                                    class="bg-white border-1 border-gray-400 rounded-md shadow-sm flex items-center px-4 py-2 hover:shadow-md w-full md:w-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-search" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    <input type="text" placeholder="Search universities..."
                                        class="outline-none text-sm text-gray-700 w-full ml-4">
                                </div>
                                <button
                                    class="px-4 py-1 bg-white rounded-md border-2 border-blue-400 hover:bg-gray-100 cursor-pointer w-full md:w-auto">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-if="loading" class="flex justify-center items-center h-64">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    </div>

                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- loop university information  -->
                        <router-link :to="{ name: 'university-details', params: { slug: university.slug } }"
                            v-for="university in universitiesData" :key="university.id" href="/universities-details">
                            <div class="w-[100%] h-90 bg-white rounded-md shadow-md overflow-hidden">
                                <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                                    <!-- Images here -->
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ university.name }}</h3>
                                    <p class="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path
                                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                            <path
                                                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                        {{ university.city }}, {{ university.country }}
                                    </p>
                                    <p class="text-sm text-gray-700 mb-3 line-clamp-2">
                                        {{ university.description }}
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        <!-- Looping The programs -->
                                        <span v-for="pn in university?.program_names"
                                            class="bg-blue-100 text-blue-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                            {{ pn }}</span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <span class="flex justify-end text-sm text-gray-600 mt-4 md:mt-2">Showing {{ pagination.total }}
                        Universities</span>

                    <!-- Pagination Controls -->
                    <div class="mt-8 flex justify-center items-center space-x-2">
                        <button @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 1"
                            class="px-3 py-1 rounded-md border cursor-pointer hover:bg-white transition-all ease-in-out border-blue-400 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>

                        <template v-for="page in generatePageNumbers()" :key="page">
                            <button @click="handlePageChange(page)" :class="[
                                'px-3 py-1 rounded-md text-sm font-medium',
                                currentPage === page
                                    ? 'bg-blue-700 text-white'
                                    : 'border border-blue-700 text-gray-700 hover:bg-gray-50'
                            ]">
                                {{ page }}
                            </button>
                        </template>

                        <button @click="handlePageChange(currentPage + 1)" :disabled="currentPage === totalPages"
                            class="px-3 py-1 rounded-md border border-blue-400 cursor-pointer text-sm font-medium text-gray-700 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed">
                            Next
                        </button>
                    </div>
                </main>
            </div>
        </div>
    </section>
    <section v-if="activeTab === 'Programs'">
        <Program />
    </section>

</template>