<script lang="ts" setup>
import { useProgramStore } from '@/stores/useProgram';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
// const props = defineProps({
//     program: {
//         type: Object,
//         required: true
//     },
//     loading: {
//         type: Boolean,
//         required: true
//     }
// })


const router = useRouter()

const { program, loading } = storeToRefs(useProgramStore())


// console.log(program.value)
</script>

<template>
    <section class="bg-white py-12 px-4 sm:px-6 lg:px-8">

        <div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <button @click="router.back()"
                class="flex ml-20 mb-4 items-center justify-center rounded-md px-4 py-3 bg-white shadow-md hover:bg-gray-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </button>
            <div class="max-w-7xl mx-auto">
                <div
                    class="flex gap-5 items-center py-2 px-4 bg-white rounded-md mb-6 border-1 border-gray-300 shadow-sm">
                    <div>
                        <div class="bg-gray-300 w-32 h-32 rounded-md mb-4 flex items-center justify-center">
                            <div class="w-28 h-28 bg-gray-400 rounded-sm overflow-hidden">
                                <img class="rounded-sm w-full h-full object-cover"
                                    :src="`https://pub-75082a7eeca64d9986a26ca5e876a0a9.r2.dev/${program?.universities.logo}`"
                                    alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">{{ program?.name }}</h2>
                        <h2 class="text-lg font-bold text-gray-900 mb-4">{{ program?.universities.name }}</h2>
                        <div class="flex items-center mb-4">
                            <span class="text-sm bg-blue-200 py-1 px-2 rounded-sm mr-1">{{ program?.level }}</span>
                            <span class="text-sm bg-green-200 py-1 px-2 rounded-sm">{{ program?.degree_type }}</span>
                        </div>
                        <div class="flex gap-4 mb-8">
                            <a :href="program?.universities?.application_link"
                                class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer">Apply
                                Now</a>
                        </div>
                    </div>
                </div>

                <div class="w-full flex gap-5">
                    <div class="w-[70%] flex flex-col bg-white py-3 px-6 rounded-md border-1 border-gray-300 shadow-sm">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
                        <div class="flex fles-col gap-3">
                            <div class="">
                                <div class="space-y-4">
                                    <div class="flex items-center gap-2">
                                        <span class="font-semibold text-xl text-gray-700">Degree:</span>
                                        <span class="text-gray-900 font-medium">{{ program?.degree_type }}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-semibold text-xl text-gray-700">{{ program?.universities.name
                                            }}</span>
                                        <span class="text-gray-900">Harvard University</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-semibold text-xl text-gray-700">Duration:</span>
                                        <span class="text-gray-900">{{ program?.duration }}</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="font-semibold text-xl text-gray-700">Intake:</span>
                                        <div class="flex flex-col space-y-1">
                                            <div v-for="intake in program?.intake" :key="intake">
                                                <span class="text-gray-900 mt-1">{{ intake }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-semibold text-xl text-gray-700">Level:</span>
                                        <span class="text-gray-900">{{ program?.level }}</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="font-semibold text-xl text-gray-700">Requirement:</span>
                                        <div class="flex  mt-1 gap-3">
                                            <div v-for="requirement in program?.application_requirement"
                                                :key="requirement">
                                                <span class="text-white bg-red-500 px-3 rounded-md">{{ requirement
                                                }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="w-[30%] bg-white border-1 shadow-sm border-gray-300 rounded-md py-3 px-5">
                        <h1 class="text-2xl font-bold text-gray-900 mb-6">Application Guideline</h1>
                        <ul>
                            <!-- Guideline Loop  -->
                            <li class="list-disc ml-5 mb-4">
                                <p v-html="program?.application_guideline"></p>
                            </li>
                        </ul>
                        <div class="flex gap-4 mb-8">
                            <button
                                class="w-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer">Apply
                                Now</button>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-white shadow-sm border-1 border-gray-300 mt-4 rounded-md py-3 px-5">
                    <h1 class="text-2xl font-bold text-gray-900 mb-6">Program Cariculum</h1>
                    <div v-for="detail in program?.detail" :key="detail" class="flex flex-col gap-2 mb-4">
                        <h1 class="text-xl font-semibold">{{ detail.year }}</h1>
                        <p class="text-lg">Tuition fee : {{ detail.tuition_fees }}</p>
                        <ul class="list-disc ml-5">
                            <li v-for="subject in detail.subject" class="text-lg">
                                {{ subject }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>