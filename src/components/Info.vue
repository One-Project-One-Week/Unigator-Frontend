<script lang="ts" setup>
import { ref, watch } from 'vue';

interface University {
    id: number
    user: {
        name: string
        email: string
        phone: string
        bio: string
    }
    slug: string
    logo: string
    image: object
    country: string
    city: string
    description: string
    rating: number
    ranking: number
    program_names: string[]
    founded: number,
    no_of_students: number,
    similar_universities: {},
    website_link: string
}

const activeTab = ref('overview');

const rating = ref(0)
const hover = ref(0)

function setRating(value: number) {
    rating.value = value
}

const props = defineProps<{
    university: University | null
}>()

const isLoading = ref(true)

watch(() => props.university, (newVal) => {
    if (newVal) {
        isLoading.value = false
    }
}, { immediate: true })

</script>

<template>
    <div class="bg-gray-100 py-10">
        <div class="container mx-auto px-4">
            <div v-if="isLoading" class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
            <template v-else>
                <nav class="bg-slate-300 py-3 px-4 rounded-md mb-8">
                    <ul class="flex space-x-4">
                        <li @click="activeTab = 'overview'" class="cursor-pointer">
                            <a
                                :class="{ 'bg-white shadow-md rounded-md p-2': activeTab === 'overview', 'text-white hover:text-blue-500': activeTab !== 'overview' }">Overview</a>
                        </li>
                        <li @click="activeTab = 'programs'" class="cursor-pointer">
                            <a
                                :class="{ 'bg-white shadow-md rounded-md p-2': activeTab === 'programs', 'text-white hover:text-blue-500': activeTab !== 'programs' }">Programs</a>
                        </li>
                        <li @click="activeTab = 'admissions'" class="cursor-pointer">
                            <a
                                :class="{ 'bg-white shadow-md rounded-md p-2': activeTab === 'admissions', 'text-white hover:text-blue-500': activeTab !== 'admissions' }">Admissions</a>
                        </li>
                        <li @click="activeTab = 'campus-life'" class="cursor-pointer">
                            <a
                                :class="{ 'bg-white shadow-md rounded-md p-2': activeTab === 'campus-life', 'text-white hover:text-blue-500': activeTab !== 'campus-life' }">Campus
                                Life</a>
                        </li>
                    </ul>
                </nav>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <section v-if="activeTab === 'overview'" class="mb-8">
                            <div class="flex justify-between items-center mb-3">
                                <h2 class="text-2xl font-semibold text-gray-800">About University of {{
                                    university?.user.name
                                }}</h2>

                                <div class="bg-white shadow-md rounded-md py-2 px-3">
                                    <p class="font-semibold mb-2">Rate this University</p>
                                    <div class="flex items-center gap-1">
                                        <template v-for="star in 5" :key="star">
                                            <button @click="setRating(star)" @mouseover="hover = star"
                                                @mouseleave="hover = 0" class="text-2xl focus:outline-none">
                                                <span
                                                    :class="star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'">★</span>
                                            </button>
                                        </template>
                                        <span class="ml-2 text-sm text-gray-600">{{ rating }} / 5</span>

                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-700 mb-4">
                                The University of Oxford is a collegiate research university in Oxford, England. It is
                                the
                                oldest university in the
                                English-speaking world and the world's second-oldest university in continuous operation.
                            </p>
                            <p class="text-gray-700">
                                Oxford is a world-leading centre of learning, teaching and research and the oldest
                                university in the English-speaking
                                world. It consists of 39 independent colleges, and 6 permanent private halls.
                            </p>
                            <div class="flex flex-wrap gap-10 justify-center align-center mt-10">
                                <div class="w-[47%] h-25 bg-white shadow-lg rounded-md flex-column py-4 px-5">
                                    <div class="flex gap-2 align-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-calendar mt-1" viewBox="0 0 16 16">
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                        </svg>
                                        <p class="text-lg font-semibold">Founded</p>
                                    </div>
                                    <div class="mt-1">
                                        <p>2019</p>
                                    </div>
                                </div>

                                <div class="w-[47%] h-25 bg-white shadow-lg rounded-md flex-column py-4 px-5">
                                    <div class="flex gap-2 align-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                            fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                            <path
                                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                        </svg>
                                        <p class="text-lg font-semibold">Student Population</p>
                                    </div>
                                    <div class="mt-1">
                                        <p>20546</p>
                                    </div>
                                </div>

                                <div class="w-[47%] h-25 bg-white shadow-lg rounded-md flex-column py-4 px-5">
                                    <div class="flex gap-2 align-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" class="bi bi-award mt-1" viewBox="0 0 16 16">
                                            <path
                                                d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                                        </svg>
                                        <p class="text-lg font-semibold">Ranking</p>
                                    </div>
                                    <div class="mt-1">
                                        <p>#4 World</p>
                                    </div>
                                </div>

                                <div class="w-[47%] h-25 bg-white shadow-lg rounded-md flex-column py-4 px-5">
                                    <div class="flex gap-2 align-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" class="bi bi-globe mt-1" viewBox="0 0 16 16">
                                            <path
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                        </svg>
                                        <p class="text-lg font-semibold">Website</p>
                                    </div>
                                    <div class="mt-1">
                                        <a href="">Visit Official Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section v-if="activeTab === 'programs'" class="mb-8">
                            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Academic Programs</h2>
                            <p class="text-gray-700 mb-4">
                                University of Oxford offers a wide range of undergraduate and graduate programs across
                                various disciplines. Below
                                are some of the top programs offered:
                            </p>
                            <h3 class="text-lg font-semibold text-gray-700 mb-2">Top Programs</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <a href="/programs"
                                    class="bg-white rounded-md shadow-md p-4 flex items-center font-semibold text-black">
                                    Philosophy, Politics and Economics
                                </a>
                                <a href="/programs"
                                    class="bg-white rounded-md shadow-md p-4 flex items-center font-semibold text-black">
                                    Law
                                </a>
                                <a href="/programs"
                                    class="bg-white rounded-md shadow-md p-4 flex items-center font-semibold text-black">
                                    Medicine
                                </a>
                                <a href="/programs"
                                    class="bg-white rounded-md shadow-md p-4 flex items-center font-semibold text-black">
                                    English Literature
                                </a>
                                <a href="/programs"
                                    class="bg-white rounded-md shadow-md p-4 flex items-center font-semibold text-black">
                                    History
                                </a>
                                <a href="programs"
                                    class="bg-white rounded-md shadow-md p-4 flex items-center font-semibold text-black">
                                    Mathematics
                                </a>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-700 mb-2">Degree Levels</h3>
                            <div class="flex space-x-4">
                                <button
                                    class="bg-gray-200 rounded-full px-3 py-1 text-gray-700 text-sm">Bachelor's</button>
                                <button
                                    class="bg-gray-200 rounded-full px-3 py-1 text-gray-700 text-sm">Master's</button>
                                <button
                                    class="bg-gray-200 rounded-full px-3 py-1 text-gray-700 text-sm">Doctoral</button>
                            </div>
                        </section>

                        <section v-if="activeTab === 'admissions'" class="mb-8">
                            <h2 class="text-2xl font-semibold text-black mb-4">Admissions Information</h2>
                            <p class="text-gray-800 text-md">University of Oxford has a competitive admissions process.
                                Here's what you need to know about applying:</p>

                            <div class="flex flex-wrap gap-10 justify-center align-center mt-10">
                                <div class="w-[47%] h-25 bg-white shadow-lg rounded-md flex-column py-4 px-5">
                                    <div class="flex gap-2 align-center">
                                        <p class="text-lg font-semibold">Acceptance Rate</p>
                                    </div>
                                    <div class="mt-1">
                                        <p>17.5%</p>
                                    </div>
                                </div>

                                <div class="w-[47%] h-25 bg-white shadow-lg rounded-md flex-column py-4 px-5">
                                    <div class="flex gap-2 align-center">
                                        <p class="text-lg font-semibold">Application Deadline</p>
                                    </div>
                                    <div class="mt-1">
                                        <p>October 15</p>
                                    </div>
                                </div>

                                <div class="w-[47%] h-25 bg-white shadow-lg rounded-md flex-column py-4 px-5">
                                    <div class="flex gap-2 align-center">
                                        <p class="text-lg font-semibold">Tuition (Domestic)</p>
                                    </div>
                                    <div class="mt-1">
                                        <p>$9,250 per year</p>
                                    </div>
                                </div>

                                <div class="w-[47%] h-25 bg-white shadow-lg rounded-md flex-column py-4 px-5">
                                    <div class="flex gap-2 align-center">
                                        <p class="text-lg font-semibold">Tuition (International)</p>
                                    </div>
                                    <div class="mt-1">
                                        <p>$26,770 per year</p>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-column">
                                <h2 class="text-2xl font-semibold mt-10 mb-3">Requirements</h2>
                                <ul class="ml-10 list-disc">
                                    <li class="mt-2">UCAS Application</li>
                                    <li class="mt-2">Personal Statement</li>
                                    <li class="mt-2">Academic Transcripts</li>
                                    <li class="mt-2">Admission Test (subject specific)</li>
                                    <li class="mt-2">Written Work (for some courses)</li>
                                    <li class="mt-2">Interview (if shortlisted)</li>
                                </ul>
                            </div>

                            <div class="flex justify-center mt-4">
                                <button
                                    class="h-10 bg-blue-400 px-5 py-1 rounded-md text-white hover:bg-blue-500 cursor-pointer">Apply
                                    Now</button>
                            </div>
                        </section>

                        <section v-if="activeTab === 'campus-life'" class="mb-8">
                            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Campus Life</h2>
                            <p class="text-gray-700">University of Oxford offers a vibrant campus experience with
                                numerous
                                facilities, clubs, and activities for students.</p>

                            <div class="flex flex-wrap gap-4 justify-center align-center mt-10">
                                <div class="w-[31%] h-32 border-1 border-black rounded-md flex-column">
                                    <img class="w-full h-full rounded-md" src="../assets/images/slider.png" alt="">
                                </div>
                                <div class="w-[31%] h-32 border-1 border-black rounded-md flex-column">
                                    <img class="w-full h-full rounded-md" src="../assets/images/slider.png" alt="">
                                </div>
                                <div class="w-[31%] h-32 border-1 border-black rounded-md flex-column">
                                    <img class="w-full h-full rounded-md" src="../assets/images/slider.png" alt="">
                                </div>
                            </div>

                            <div class="flex-column mt-8">
                                <h2 class="text-2xl font-semibold mb-4">Student Life</h2>
                                <p class="text-md text-gray-700">
                                    Oxford offers a unique collegiate system where students belong to both the
                                    university
                                    and one of the colleges. The university has over 400 clubs and societies covering a
                                    wide
                                    range of interests.
                                </p>
                            </div>

                            <div class="flex-column">
                                <h2 class="text-2xl font-semibold mt-8 mb-3">Facilities</h2>
                                <ul class="ml-10 list-disc">
                                    <li class="mt-2">Bodleian Library</li>
                                    <li class="mt-2">Ashmolean Museum</li>
                                    <li class="mt-2">Oxford University Museum of Natural History</li>
                                    <li class="mt-2">Radcliffe Science Library</li>
                                    <li class="mt-2">Oxford University Parks</li>
                                    <li class="mt-2">Sheldonian Theatre</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div>
                        <section class="bg-white rounded-md shadow-md p-6 mb-8">
                            <h3 class="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                            <div class="mb-4">
                                <h4 class="font-semibold text-gray-700">Address</h4>
                                <p class="text-gray-600 text-sm">University Offices, Wellington Square, Oxford OX1 2JD,
                                    United Kingdom</p>
                            </div>
                            <div class="mb-4">
                                <h4 class="font-semibold text-gray-700">Phone</h4>
                                <p class="text-gray-600 text-sm">{{ university?.user.phone }}</p>
                            </div>
                            <div class="mb-4">
                                <h4 class="font-semibold text-gray-700">Email</h4>
                                <p class="text-gray-600 text-sm">{{ university?.user.email }}</p>
                            </div>
                        </section>

                        <section class="bg-white rounded-md shadow-md p-6">
                            <h3 class="text-lg font-semibold text-gray-800 mb-4">Similar Universities</h3>
                            <div v-if="university.similar_universities === '{}'"
                                v-for="suniversity in university.similar_universities"
                                class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center">
                                    <img src="../assets/images/cambridge.png" alt="">
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-700 text-sm">{{ suniversity.name }}</h4>
                                    <p class="text-gray-600 text-xs">Cambridge, United Kingdom</p>
                                </div>
                            </div>
                            <div v-else>
                                <p>No similar universities found</p>
                            </div>
                        </section>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>