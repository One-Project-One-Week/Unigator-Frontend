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
    },
    logo: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="pt-[50px]">
        <div class="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-b from-gray-900 to-gray-800">
            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm">
                <img class="w-full h-full object-cover mix-blend-overlay"
                    :src="`https://pub-75082a7eeca64d9986a26ca5e876a0a9.r2.dev/${cover}`" :alt="name">
            </div>
            <div
                class="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row items-center sm:items-end px-4 sm:px-8 md:px-20 pb-8 sm:pb-12">
                <div
                    class="bg-white/10 backdrop-blur-md w-24 h-24 sm:w-32 sm:h-32 rounded-2xl mb-4 flex items-center justify-center border border-white/20 shadow-lg">
                    <div class="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden">
                        <img class="w-full h-full object-cover"
                            :src="`https://pub-75082a7eeca64d9986a26ca5e876a0a9.r2.dev/${logo}`" :alt="name">
                    </div>
                </div>
                <div class="sm:ml-6 text-center sm:text-left">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{{ name }}</h2>
                    <div class="flex items-center justify-center sm:justify-start mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-geo-alt text-white/80" viewBox="0 0 16 16">
                            <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        <p class="ml-2 text-white/80 text-sm sm:text-base font-medium">
                            {{ country }}, {{ city }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>