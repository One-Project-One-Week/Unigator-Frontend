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
    <section class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <!-- Back Button -->
            <button @click="router.back()"
                class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
                <span>Back</span>
            </button>

            <!-- Program Header -->
            <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div class="flex flex-col md:flex-row gap-6">
                    <div class="flex-shrink-0">
                        <div class="w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
                            <img class="w-full h-full object-cover"
                                :src="`https://pub-75082a7eeca64d9986a26ca5e876a0a9.r2.dev/${program?.universities.logo}`"
                                :alt="program?.universities.name">
                        </div>
                    </div>
                    <div class="flex-1">
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ program?.name }}</h1>
                        <h2 class="text-xl text-gray-600 mb-4">{{ program?.universities.name }}</h2>
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span class="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                {{ program?.level }}
                            </span>
                            <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                {{ program?.degree_type }}
                            </span>
                        </div>
                        <a :href="program?.universities?.application_link"
                            class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Program Overview -->
                <div class="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
                    <div class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="flex items-center gap-3">
                                <span class="text-gray-500 font-medium">Degree:</span>
                                <span class="text-gray-900 font-medium">{{ program?.degree_type }}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="text-gray-500 font-medium">Duration:</span>
                                <span class="text-gray-900">{{ program?.duration }}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="text-gray-500 font-medium">Level:</span>
                                <span class="text-gray-900">{{ program?.level }}</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="text-gray-500 font-medium">Intake:</span>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="intake in program?.intake" :key="intake"
                                        class="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                        {{ intake }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="requirement in program?.application_requirement" :key="requirement"
                                    class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                                    {{ requirement }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Application Guidelines -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Application Guidelines</h2>
                    <div class="prose prose-blue max-w-none">
                        <div v-html="program?.application_guideline" class="text-gray-600"></div>
                    </div>
                    <a :href="program?.universities?.application_link"
                        class="mt-6 inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                        Apply Now
                    </a>
                </div>
            </div>

            <!-- Program Curriculum -->
            <div class="mt-8 bg-white rounded-xl shadow-sm p-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Program Curriculum</h2>
                <div class="space-y-8">
                    <div v-for="detail in program?.detail" :key="detail" class="border-l-4 border-blue-500 pl-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ detail.year }}</h3>
                        <p class="text-gray-600 mb-4">Tuition fee: <span class="font-medium">{{ detail.tuition_fees
                                }}</span></p>
                        <ul class="space-y-2">
                            <li v-for="subject in detail.subject" class="flex items-start gap-2 text-gray-700">
                                <span class="text-blue-500">•</span>
                                {{ subject }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>