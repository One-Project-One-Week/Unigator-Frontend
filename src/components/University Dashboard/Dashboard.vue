<script lang="ts" setup>
import { ref } from 'vue';

const activeTab = ref('Dashboard');
</script>

<template>
    <div class="flex bg-gray-100 min-h-screen p-4">
        <aside class="bg-white w-64 min-h-screen border-r border-gray-200 p-4">
            <div class="mb-8">
                <h1 class="text-2xl font-semibold text-blue-400">University Portal</h1>
            </div>
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
                <div>
                    <h2 class="text-xl font-semibold text-gray-800">University Dashboard</h2>
                    <p class="text-gray-500 text-sm">Harvard University</p>
                </div>
                <div class="flex items-center">
                    <button class="mr-4 text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3-9 3-9H3s3 2 3 9z"></path>
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                    </button>
                    <span class="text-gray-700 mr-2">Admin</span>
                    <button class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>
                </div>
            </header>

            <section v-if="activeTab === 'Dashboard'" class="mb-8">
                <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 py-3 px-5">
                    <div class="bg-white rounded-lg shadow-md p-4">
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

                    <div class="bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Total Program</h3>
                        <div class="text-2xl font-bold text-blue-700">9</div>
                        <h3>We are currently teaching 9 programs</h3>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Top </h3>
                        <div class="text-2xl font-bold text-gray-700">12</div>
                        <p class="text-yellow-500 text-sm">Pending review</p>
                        <button
                            class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Review
                            Applications</button>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Messages</h3>
                        <div class="text-2xl font-bold text-gray-700">5</div>
                        <p class="text-red-500 text-sm">Unread messages</p>
                        <button
                            class="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View
                            Messages</button>
                    </div>
                </section>
            </section>

            <section v-if="activeTab === 'Profile'" class="mb-8">
                <div class="w-[100%] bg-gray-100 py-2 px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto space-y-8">
                        <div class="bg-white shadow overflow-hidden rounded-md p-5">
                            <div>
                                <h2 class="text-2xl font-semibold text-gray-900">Basic Information</h2>
                                <p class="mt-1 text-sm text-gray-500">Update your university's core information</p>
                            </div>
                            <form action="" class="w-[100%] px-4 py-5 sm:p-6">
                                <div class="grid gap-6">

                                    <div class="flex flex-col gap-3">
                                        <img class="w-[20%] shadow-lg" src="/src/assets/images/logo.png" alt="">
                                        <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Logo
                                            (Image)</label>
                                        <input type="file" id="phoneNumber" value="logo.png"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="flex flex-col gap-3">
                                        <img class="w-[20%] shadow-lg" src="/src/assets/images/havard.png" alt="">
                                        <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Cover
                                            Photo</label>
                                        <input type="file" id="phoneNumber" value="havard.png"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="flex w-[100%] gap-4">
                                        <div class="flex flex-col w-full">
                                            <label for="universityName"
                                                class="block text-sm font-medium text-gray-700">University Name</label>
                                            <input type="text" id="universityName" value="Harvard University"
                                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                        </div>
                                        <div class="flex flex-col w-full">
                                            <label for="universityType"
                                                class="block text-sm font-medium text-gray-700">University Type</label>
                                            <select id="universityType"
                                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                                <option>Private</option>
                                                <option>Public</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-span-1 sm:col-span-1">
                                        <label for="foundedYear" class="block text-sm font-medium text-gray-700">Founded
                                            Year</label>
                                        <input type="text" id="foundedYear" value="1636"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="col-span-1">
                                        <label for="country"
                                            class="block text-sm font-medium text-gray-700">Country</label>
                                        <input type="text" id="country" value="United States"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="col-span-1">
                                        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                                        <input type="text" id="city" value="Cambridge"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="col-span-1">
                                        <label for="address" class="block text-sm font-medium text-gray-700">Student
                                            Population</label>
                                        <input type="text" id="address" value="19035"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="col-span-1">
                                        <label for="officialWebsite"
                                            class="block text-sm font-medium text-gray-700">Official Website</label>
                                        <input type="text" id="officialWebsite" value="https://www.harvard.edu"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="col-span-1">
                                        <label for="contactEmail"
                                            class="block text-sm font-medium text-gray-700">Contact Email</label>
                                        <input type="email" id="contactEmail" value="admissions@harvard.edu"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="col-span-1">
                                        <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone
                                            Number</label>
                                        <input type="text" id="phoneNumber" value="+1 (617) 495-1551"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div class="flex justify-end">
                                        <button
                                            class="flex px-6 py-2 bg-blue-400 text-white text-center rounded-md gap-4 hover:bg-blue-600 ease-in-out cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                                <path d="M11 2H9v3h2z" />
                                                <path
                                                    d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                                            </svg>
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="mx-auto space-y-8 mt-5">
                        <div class="bg-white shadow overflow-hidden rounded-md p-5">
                            <div>
                                <h2 class="text-2xl font-semibold text-gray-900">Description</h2>
                                <p class="mt-1 text-sm text-gray-500">Provide a compelling description of your
                                    university</p>
                            </div>
                            <form action="" class="w-[100%] px-4 py-5 sm:p-6">
                                <div class="grid gap-6">

                                    <div class="flex flex-col w-full">
                                        <label for="description" class="block text-sm font-medium text-gray-700">Detail
                                            Description</label>
                                        <textarea type="text" id="universityName"
                                            placeholder="Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders who make a difference globally. The University has twelve degree-granting Schools in addition to the Radcliffe Institute for Advanced Study."
                                            class="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <label for="description"
                                            class="block text-sm font-medium text-gray-700">Mission</label>
                                        <textarea type="text" id="universityName"
                                            placeholder="To educate the citizens and citizen-leaders for our society. We do this through our commitment to the transformative power of a liberal arts and sciences education."
                                            class="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>
                                </div>

                                <div class="flex justify-end mt-5">
                                    <button
                                        class="flex px-6 py-2 bg-blue-400 text-white text-center rounded-md gap-4 hover:bg-blue-600 ease-in-out cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                            <path d="M11 2H9v3h2z" />
                                            <path
                                                d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                                        </svg>
                                        Save All Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="activeTab === 'Programs'" class="mb-8">
                <div class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-7xl mx-auto space-y-8">
                        <div class="flex items-center justify-between">
                            <h2 class="text-2xl font-semibold text-gray-900">Academic Programs</h2>
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                                Add New Program
                            </button>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center gap-4">
                            <input type="text" placeholder="Search programs..."
                                class="w-full sm:w-auto border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            <select
                                class="w-full sm:w-auto border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
                                            <button
                                                class="text-gray-500 hover:text-blue-500 focus:outline-none cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                            </button>
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
                                    <p class="mt-2 text-gray-500 text-sm">Deadline: 1/1/2024</p>
                                    <p class="mt-4 text-xl font-semibold text-gray-900">$51,925 / year</p>
                                    <a href="#"
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
                                            <button
                                                class="text-gray-500 hover:text-blue-500 focus:outline-none cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                            </button>
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
                                    <p class="mt-2 text-gray-500 text-sm">Deadline: 1/1/2024</p>
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