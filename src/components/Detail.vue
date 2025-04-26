<script lang="ts" setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="pt-[50px]">
        <div class="bg-gray-200 relative w-full h-[500px]">
            <div class="absolute inset-0 bg-gray-300 opacity-90">
                <img class="w-full h-full object-cover" src="../assets/images/havard.png" alt="">
            </div>
            <div class="absolute bottom-0 left-0 flex flex-row items-end px-20">
                <div class="bg-gray-300 w-32 h-32 rounded-md mb-4 flex items-center justify-center">
                    <div class="w-28 h-28 bg-gray-400 rounded-sm overflow-hidden">
                        <img class="rounded-sm w-full h-full object-cover" src="../assets/images/havard-logo.png"
                            alt="">
                    </div>
                </div>
                <div class="ml-5 pb-10">
                    <h2 class="text-4xl font-bold text-white">{{ name }}</h2>
                    <h2 class="text-sm text-gray-200">
                        <p class="text-lg font-semibold text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-geo-alt inline-block align-text-bottom mr-1" viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            {{ country }}, {{ city }}
                        </p>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>