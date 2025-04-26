<script lang="ts" setup>
</script>

<template>
    <div class="pt-[60px]">
        <!-- Hero Section -->
        <div class="relative">
            <img class="w-full object-cover h-[600px]" src="/src/assets/images/aboutus.png" alt="About Unigator">
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30">
                <div class="flex flex-col justify-center items-center h-full px-4">
                    <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 text-center tracking-tight">About Unigator
                    </h1>
                    <p class="text-xl md:text-2xl text-white/90 text-center max-w-2xl">Empowering students to make
                        informed decisions about their education journey.</p>
                </div>
            </div>
        </div>

        <!-- Mission Section -->
        <section class="py-16 md:py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Mission</h2>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            At Unigator, we believe that every student deserves the opportunity to pursue higher
                            education, regardless of their background or location. Our mission is to empower students
                            around the world by providing them with the resources and support they need to connect with
                            universities and achieve their academic dreams.
                        </p>
                        <ul class="space-y-3 text-gray-600">
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                Comprehensive university profiles
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                Advanced program search tools
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                Honest rankings and reviews
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                Personalized guidance and support
                            </li>
                        </ul>
                    </div>
                    <div class="relative">
                        <img src="/src/assets/images/member/team.jpg" alt="University students working on a laptop"
                            class="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Offer Section -->
        <section class="py-16 md:py-24 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">What We Offer</h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive tools and resources to help you
                        find your perfect university match.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold text-gray-900 mb-4">University Profiles</h3>
                            <p class="text-gray-600">Detailed information on thousands of universities worldwide,
                                including programs, admissions requirements, tuition costs, and campus facilities.</p>
                        </div>
                    </div>

                    <div
                        class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Program Finder</h3>
                            <p class="text-gray-600">Search for specific academic programs across all universities that
                                match your interests, career goals, and academic background.</p>
                        </div>
                    </div>

                    <div
                        class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Rankings & Reviews</h3>
                            <p class="text-gray-600">Compare universities based on various ranking systems and explore
                                authentic student reviews and testimonials.</p>
                        </div>
                    </div>

                    <div
                        class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Application Guidance</h3>
                            <p class="text-gray-600">Get expert advice on preparing applications, writing personal
                                statements, and meeting deadlines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="py-16 md:py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Our Team</h2>
                    <p class="text-xl text-gray-600">Meet the dedicated professionals behind Unigator</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div class="text-center group">
                        <div
                            class="relative w-40 h-40 mx-auto rounded-full bg-gray-100 overflow-hidden mb-6 transform group-hover:scale-105 transition-transform duration-300">
                            <img src="/src/assets/images/member/nyi.png" alt="Nyi Nyi Myat"
                                class="w-full h-full object-cover" />
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">Nyi Nyi Myat</h3>
                        <p class="text-blue-500 font-medium">Frontend</p>
                    </div>

                    <div class="text-center group">
                        <div
                            class="relative w-40 h-40 mx-auto rounded-full bg-gray-100 overflow-hidden mb-6 transform group-hover:scale-105 transition-transform duration-300">
                            <img src="/src/assets/images/member/phone.png" alt="Phone Htut Khaung"
                                class="w-full h-full object-cover" />
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">Phone Htut Khaung</h3>
                        <p class="text-blue-500 font-medium">Frontend</p>
                    </div>

                    <div class="text-center group">
                        <div
                            class="relative w-40 h-40 mx-auto rounded-full bg-gray-100 overflow-hidden mb-6 transform group-hover:scale-105 transition-transform duration-300">
                            <img src="/src/assets/images/member/nyan.png" alt="Nyan Oak Soe"
                                class="w-full h-full object-cover" />
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">Nyan Oak Soe</h3>
                        <p class="text-blue-500 font-medium">Backend</p>
                    </div>

                    <div class="text-center group">
                        <div
                            class="relative w-40 h-40 mx-auto rounded-full bg-gray-100 overflow-hidden mb-6 transform group-hover:scale-105 transition-transform duration-300">
                            <img src="/src/assets/images/member/khai.png" alt="Khai Sian Taang"
                                class="w-full h-full object-cover" />
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">Khai Sian Taang</h3>
                        <p class="text-blue-500 font-medium">Backend</p>
                    </div>

                    <div class="text-center group">
                        <div
                            class="relative w-40 h-40 mx-auto rounded-full bg-gray-100 overflow-hidden mb-6 transform group-hover:scale-105 transition-transform duration-300">
                            <img src="/src/assets/images/member/wai.png" alt="Wai Yan Paing"
                                class="w-full h-full object-cover" />
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">Wai Yan Paing</h3>
                        <p class="text-blue-500 font-medium">Backend</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>