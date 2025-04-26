<script lang="ts" setup>
import { ref } from 'vue';

const activeTab = ref('Dashboard');
</script>

<template>
    <div class="flex bg-gray-100 min-h-screen p-4">
        <aside class="bg-white w-64 min-h-screen border-r border-gray-200 p-4">
            <a href="/university-dashboard">
                <div class="flex items-center mb-8 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-building"
                        viewBox="0 0 16 16">
                        <path
                            d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                        <path
                            d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                    </svg>
                    <h1 class="text-2xl font-semibold text-blue-500">University Portal</h1>
                </div>
            </a>
            <ul class="flex flex-col space-x-4 gap-3">
                <li @click="activeTab = 'Dashboard'" class="cursor-pointer">
                    <a
                        :class="{ 'px-15 bg-white shadow-md rounded-md p-2': activeTab === 'Dashboard', 'text-black hover:text-blue-500': activeTab !== 'Dashboard' }">Dashboard</a>
                </li>
                <li @click="activeTab = 'Profile'" class="cursor-pointer">
                    <a
                        :class="{ 'px-10 bg-white shadow-md rounded-md p-2': activeTab === 'Profile', 'text-black hover:text-blue-500': activeTab !== 'Profile' }">University
                        Profile</a>
                </li>
                <li @click="activeTab = 'Programs'" class="cursor-pointer">
                    <a
                        :class="{ 'px-10 bg-white shadow-md rounded-md p-2': activeTab === 'Programs', 'text-black hover:text-blue-500': activeTab !== 'Programs' }">Academic
                        Programs</a>
                </li>
            </ul>
        </aside>

        <main class="flex-1">
            <header class="flex justify-between items-center mb-8 bg-gray-200 p-2">
                <div class="px-5">
                    <h2 class="text-xl font-semibold text-blue-600">University Dashboard</h2>
                    <p class="text-blue-500 text-sm">Harvard University</p>
                </div>

                <div class="flex items-center gap-5 ">
                    <div class="flex items-center justify-center w-10 h-13 bg-white shadow-md rounded-lg">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-bell" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                            </svg>
                        </div>
                    </div>

                    <div class="flex flex-col align-center mr-8 bg-white shadow-md rounded-lg py-1 px-3">
                        <h1 class="font-semibold text-gray-500">Harvard University</h1>
                        <p class="text-md text-gray-500">Admin</p>
                    </div>
                </div>
            </header>

            <section v-if="activeTab === 'Dashboard'" class="mb-8">
                <section class="w-full flex justify-center gap-6 mb-8 py-3 px-5">
                    <div class="w-[30%] bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">University Rating</h3>
                        <div class="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold"
                                class="bi bi-star-fill m-[2px]" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <div class="text-2xl font-bold text-green-400 text-center">4.5</div>
                        </div>
                        <p>This Rating is only from the users of our website</p>
                    </div>

                    <div class="w-[30%] bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Total Program</h3>
                        <div class="text-2xl font-bold text-blue-700">9</div>
                        <h3>We are currently teaching 9 programs</h3>
                    </div>

                    <div class="w-[30%] bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Student Population </h3>
                        <div class="text-2xl font-bold text-gray-700">12235</div>
                    </div>
                </section>
            </section>

            <section v-if="activeTab === 'Profile'" class="mb-8">
                <div>
                    <div class="flex justify-end opacity-100 mb-4 gap-4">
                        <a href="/uni-profile-edit">
                            <button
                                class="flex items-center gap-1 border-1 border-blue-400 rounded-md py-2 px-4 text-blue-500 hover:bg-gray-200 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>
                                <p class="text-sm font-semibold">
                                    Edit Profile
                                </p>
                            </button>
                        </a>
                    </div>

                    <div class="bg-gray-200 relative w-full h-[500px]">
                        <div class="absolute inset-0 bg-gray-300 opacity-90">
                            <img class="w-full h-full object-cover" src="/src/assets/images/havard.png" alt="">
                        </div>
                        <div class="absolute bottom-0 left-0 flex flex-row items-end px-20">
                            <div class="bg-gray-300 w-32 h-32 rounded-md mb-4 flex items-center justify-center">
                                <div class="w-28 h-28 bg-gray-400 rounded-sm overflow-hidden">
                                    <img class="rounded-sm w-full h-full object-cover"
                                        src="/src/assets/images/havard-logo.png" alt="">
                                </div>
                            </div>
                            <div class="ml-5 pb-10">
                                <h2 class="text-4xl font-bold text-white">Havard University</h2>
                                <h2 class="text-sm text-gray-200">
                                    <p class="text-lg font-semibold text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor"
                                            class="bi bi-geo-alt inline-block align-text-bottom mr-1"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                            <path
                                                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                        Havard, United State
                                    </p>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col py-2 px-6 mt-5 mx-3">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">About Our University</h2>
                        <p class="text-gray-700 mb-4">
                            The University of Oxford is a collegiate research university in Oxford, England. It is the
                            oldest university in the
                            English-speaking world and the world's second-oldest university in continuous operation.
                        </p>
                        <p class="text-gray-700">
                            Oxford is a world-leading centre of learning, teaching and research and the oldest
                            university in the English-speaking
                            world. It consists of 39 independent colleges, and 6 permanent private halls.
                        </p>
                    </div>
                </div>
            </section>

            <section v-if="activeTab === 'Programs'" class="mb-8">
                <div class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-7xl mx-auto space-y-8">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col">
                                <h2 class="text-2xl font-semibold text-gray-900">Academic Programs</h2>
                                <p>Manage your university's academic programs and courses</p>
                            </div>
                            <a href="/new-program"
                                class="flex gap-2 items-center bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md  transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md focus:outline-none hover:ring-2 hover:ring-blue-400 focus:ring-offset-2 hover:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                    class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                </svg>
                                Add New Program
                            </a>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center gap-4">
                            <input type="text" placeholder="Search programs..."
                                class="w-full sm:w-auto border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            <select
                                class="w-full cursor-pointer sm:w-auto border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option>All Types</option>
                                <option>Bachelor's Degree</option>
                                <option>Master's Degree</option>
                                <option>Doctoral's Degree</option>
                            </select>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="bg-white shadow overflow-hidden rounded-md">
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h3 class="text-xl font-semibold text-gray-900">Computer Science</h3>
                                            <p class="mt-1 text-sm text-gray-500">Bachelor's Degree</p>
                                        </div>
                                        <div class="flex gap-2">
                                            <a href="/program-details"
                                                class="text-gray-500 hover:text-blue-500 focus:outline-none cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                            </a>
                                            <button
                                                class="text-gray-500 hover:text-red-500 focus:outline-none cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-2 flex items-center text-sm text-gray-500">
                                        <span>4 years</span>
                                        <span
                                            class="ml-2 px-2 py-0.5 rounded-full bg-green-500 text-white text-xs">Active</span>
                                    </div>
                                    <p class="mt-2 text-gray-600">A comprehensive program covering algorithms, software
                                        engineering, and computer systems.</p>
                                    <p class="mt-2 text-gray-500 text-sm">Intake: 1/1/2024</p>
                                    <p class="mt-4 text-xl font-semibold text-gray-900">$51,925 / year</p>
                                    <a href="/program-details"
                                        class="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none focus:shadow-outline text-sm">View
                                        Details</a>
                                </div>
                            </div>

                            <div class="bg-white shadow overflow-hidden rounded-md">
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h3 class="text-xl font-semibold text-gray-900">Computer Science</h3>
                                            <p class="mt-1 text-sm text-gray-500">Bachelor's Degree</p>
                                        </div>
                                        <div class="flex gap-2">
                                            <a class="text-gray-500 hover:text-blue-500 focus:outline-none cursor-pointer"
                                                href="/program-details">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                            </a>
                                            <button
                                                class="text-gray-500 hover:text-red-500 focus:outline-none cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-2 flex items-center text-sm text-gray-500">
                                        <span>4 years</span>
                                        <span
                                            class="ml-2 px-2 py-0.5 rounded-full bg-green-500 text-white text-xs">Active</span>
                                    </div>
                                    <p class="mt-2 text-gray-600">A comprehensive program covering algorithms, software
                                        engineering, and computer systems.</p>
                                    <p class="mt-2 text-gray-500 text-sm">Intake: 1/1/2024</p>
                                    <p class="mt-4 text-xl font-semibold text-gray-900">$51,925 / year</p>
                                    <a href="#"
                                        class="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none focus:shadow-outline text-sm">View
                                        Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
