<script lang="ts" setup>
</script>

<template>
    <div class="flex bg-gray-100 min-h-screen p-8">


        <main class="flex-1 bg-white rounded-lg shadow-md p-6">
            <div
                class="flex items-center gap-2 bg-white rounded-md shadow-lg px-2 py-2 w-20 mb-4 cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
                <p class="text-md font-semibold">
                    Back
                </p>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-semibold mb-4">Student Profile</h1>
                <button
                    class="flex items-center bg-white border-2 border-blue-400 text-blue-500 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                    Edit Profile
                </button>
            </div>

            <div class="flex items-center mb-6">
                <div
                    class="relative w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-fill text-gray-500"
                        viewBox="0 0 16 16" width="60" height="60">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                </div>
                <div class="flex flex-col gap-4 ml-4">
                    <h2 class="text-xl font-semibold mt-2">John Doe</h2>
                    <p class="text-sm text-gray-500">STUDENT001</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                    <input type="text" id="firstName" value="John"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        disabled>
                </div>
                <div>
                    <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                    <input type="text" id="lastName" value="Doe"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        disabled>
                </div>
                <div>
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" value="john.doe@example.com"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        disabled>
                </div>
                <div>
                    <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                    <input type="tel" id="phone" value="+1 (555) 123-4567"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        disabled>
                </div>
                <div>
                    <label for="dateOfBirth" class="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                    <input type="date" id="dateOfBirth" value="2000-01-01"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        disabled>
                </div>
                <div class="col-span-full">
                    <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">Bio</label>
                    <textarea id="bio" rows="3"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        disabled>A placeholder bio for John Doe.</textarea>
                </div>
            </div>
        </main>
    </div>
</template>