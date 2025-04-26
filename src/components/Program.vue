<script lang="ts" setup>
import { useProgramStore } from '@/stores/useProgram'
import { storeToRefs } from 'pinia'
import { ref, computed, onMounted, watch } from 'vue'
import { useCountryAndCity } from '@/composables/getCountryAndCity'
import { RouterLink } from 'vue-router'
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


const currentPage = ref(1)
const selectedCountry = ref<Country | null>(null)
const selectedCity = ref('')
const budget = ref<number | null>(null)
const universityType = ref<'public' | 'private' | null>(null)
const degreeLevel = ref<'undergraduate' | 'graduate' | 'doctorate' | null>(null)
const search = ref('')
const cities = ref<City[]>([])

const programStore = useProgramStore()
const { programs, pagination: programPagination } = storeToRefs(programStore)

const fetchPrograms = async (page: number = 1, perPage: number = 9) => {
    const filters = {
        country: selectedCountry.value?.name,
        city: selectedCity.value,
        budget: budget.value,
        type: universityType.value,
        level: degreeLevel.value,
        search: search.value
    }
    await programStore.fetchAllPrograms(page, perPage, filters)
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


const totalPages = computed(() => {
    return programPagination.value.last_page
})

const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        fetchPrograms(page)
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

onMounted(async () => {
    await fetchPrograms()
    await fetchCountries()
})

const programsData = computed(() => {
    return programs.value || []
})
</script>

<template>
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
                            <select v-model="selectedCountry"
                                class="w-full py-1 border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                                <!-- Loop Countries -->
                                <option v-for="country in countries" :key="country.id" :value="country">
                                    {{ country.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Cities</h3>
                        <div>
                            <select :disabled="!selectedCountry" v-model="selectedCity"
                                class="w-full py-1 border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                                <!-- Loop Cities -->
                                <option v-for="city in cities" :key="city.id" :value="city">
                                    {{ city.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Budget</h3>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">University Type</h3>
                        <div class="space-y-1 text-sm text-gray-600 flex gap-2">
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="universityType" value="public"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Public
                            </label>
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="universityType" value="private"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Private
                            </label>
                        </div>
                    </div>


                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Degree Level</h3>
                        <div class="flex flex-col text-sm text-gray-600">
                            <label class="inline-flex items-center mb-1">
                                <input type="radio" v-model="degreeLevel" value="undergraduate"
                                    class="h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Undergraduate
                            </label>
                            <label class="inline-flex items-center mb-1">
                                <input type="radio" v-model="degreeLevel" value="graduate"
                                    class="h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Graduate
                            </label>
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="degreeLevel" value="doctorate"
                                    class="h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Doctorate
                            </label>
                        </div>
                    </div>

                    <button @click="fetchPrograms(1)"
                        class="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-gray-800 text-sm font-medium">
                        Apply Filters
                    </button>
                </div>
            </aside>

            <main class="lg:col-span-3">
                <div class="flex items-center justify-between mb-4">
                    <!-- <div class="bg-white rounded-md shadow-sm flex items-center px-4 py-2 hover:shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-gray-500 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607m0 0v3.752a2.25 2.25 0 01-2.25 2.25H5.252a2.25 2.25 0 01-2.25-2.25V16.5" />
                        </svg>
                        <input type="search" placeholder="Search universities and programs by name or keyword..."
                            class="outline-none text-sm text-gray-700 w-[350px] ">
                        <button @click="fetchPrograms(1)" class="bg-slate-300">
                            Search
                        </button>
                    </div> -->
                    <div class="flex items-center justify-between mb-4 md:flex-row flex-col gap-4">
                        <div
                            class="bg-white border-1 border-gray-400 rounded-md shadow-sm flex items-center px-4 py-2 hover:shadow-md w-full md:w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                            <input type="search" v-model="search" placeholder="Search programs..."
                                class="outline-none text-sm text-gray-700 w-full ml-4">
                        </div>
                        <button @click="fetchPrograms(1)"
                            class="px-4 py-1 bg-white rounded-md border-2 border-blue-400 hover:bg-gray-100 cursor-pointer w-full md:w-auto">
                            Search
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- loop university information  -->


                    <router-link :to="{ name: 'program-details', params: { id: program.id } }"
                        v-for="program in programsData" :key="program.id" href="/universities-details">
                        <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                            <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                                <!-- Images here -->
                            </div>
                            <div class="px-4 py-2">
                                <h1 class="text-2xl text-blue-500 font-bold">{{ program.name }}</h1>
                            </div>
                            <div class="px-4 py-2">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ program.universities.name }}
                                </h3>
                                <p class="text-sm text-gray-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="w-4 h-4 inline-block align-text-bottom mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                    </svg>
                                    Cambridge, United States
                                </p>
                                <p class="text-sm text-gray-700 mb-3">{{ program.degree_type }}</p>

                            </div>
                        </div>
                    </router-link>
                </div>


                <span class="flex justify-end text-sm text-gray-600 mt-4 md:mt-2">Results : {{ programPagination.total
                }} Program</span>

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