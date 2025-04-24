<script lang="ts" setup>
</script>

<template>
    <div class="pt-[60px]">
        <section class="w-full h-[500px] bg-slate-400 flex flex-col justify-center">
            <h1 class="flex justify-center text-4xl font-bold text-black">About Unigator</h1>
            <p class="flex justify-center text-lg">Empowering students to make informed decisions about their education
                journey.</p>
        </section>

        <section class="w-full flex mt-20 justify-center gap-10">
            <div class="w-[45%] h-auto flex flex-col justify-center">
                <h1 class="text-3xl font-bold">Our Mission</h1>
                <p class="text-justify mt-4">
                    At UniConnect, we believe that access to comprehensive, accurate information about universities is
                    essential for students to make the right choices for their future. Our mission is to connect
                    prospective students with universities worldwide by providing detailed, up-to-date information about
                    academic programs, campus life, admissions requirements, and more.
                </p>
                <br>
                <p>
                    We strive to be the most trusted resource for university information, helping students navigate the
                    complex process of selecting and applying to higher education institutions.
                </p>
            </div>
            <div class="w-[45%] h-full">
                <img class="rounded-md" src="../assets/images/havard.png" alt="">
            </div>
        </section>

        <section class="bg-gray-50 py-12 md:py-20 mt-10">
            <div class="container mx-auto px-4">
                <div class="text-center mb-10">
                    <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                    <p class="text-gray-600 text-lg">Comprehensive tools and resources to help you find your perfect
                        university match.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div class="items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-hospital mb-4" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                                <path
                                    d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
                            </svg>
                            <h3 class="text-2xl font-semibold text-gray-800">University Profiles</h3>
                        </div>
                        <p class="text-gray-600">Detailed information on thousands of universities worldwide.</p>
                        <p class="list-disc list-inside mt-2 text-gray-600">
                            Access comprehensive profiles including programs, admissions requirements, tuition
                            costs, campus facilities, and more.
                        </p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div class="items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-book mb-4" viewBox="0 0 16 16">
                                <path
                                    d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                            </svg>
                            <h3 class="text-2xl font-semibold text-gray-800">Program Finder</h3>
                        </div>
                        <p class="text-gray-600">Search for specific academic programs across all universities.</p>
                        <p class="list-disc list-inside mt-2 text-gray-600">
                            Find the perfect program that matches your interests, career goals, and academic
                            background.
                        </p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div class="items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-award mb-4" viewBox="0 0 16 16">
                                <path
                                    d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                            </svg>
                            <h3 class="text-2xl font-semibold text-gray-800">Rankings & Reviews</h3>
                        </div>
                        <p class="text-gray-600">Compare universities based on various ranking systems.</p>
                        <p class="list-disc list-inside mt-2 text-gray-600">
                            Explore global and regional university rankings, along with authentic student reviews
                            and testimonials.
                        </p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div class="items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-people mb-4" viewBox="0 0 16 16">
                                <path
                                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                            </svg>
                            <h3 class="text-2xl font-semibold text-gray-800">Application Guidance</h3>
                        </div>
                        <p class="text-gray-600">Step-by-step guidance through the application process.</p>
                        <p class="list-disc list-inside mt-2 text-gray-600">
                            Get expert advice on preparing applications, writing personal statements, and meeting
                            deadlines.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- optional features  -->
        <section class="bg-blue-100 py-12 md:py-20">
            <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div class="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Join Our Mission</h2>
                    <p class="text-gray-600 mb-6">
                        We're always looking for passionate individuals to join our team. If you're excited about
                        helping students find their path in higher education, we'd love to hear from you.
                    </p>
                    <div
                        class="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                            View Open Positions
                        </button>
                        <button
                            class="bg-white hover:bg-gray-100 text-red-500 font-semibold py-3 px-6 rounded-full transition-colors duration-300 border border-red-500">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div class="md:w-1/2 text-gray-700 italic text-lg">
                    <p class="relative pl-8">
                        <span class="absolute left-0 top-0 text-red-500 text-4xl font-serif">&ldquo;</span>
                        Education is the most powerful weapon which you can use to change the world.
                    </p>
                    <p class="text-right mt-4 font-normal not-italic text-sm">
                        — Nelson Mandela
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>