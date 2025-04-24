<script lang="ts" setup>
</script>

<template>
    <div class="pt-[70px]">
        <div class="h-[400px] bg-gray-50 py-16 flex-column align-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4 flex justify-center">Universities Directory</h1>
            <p class="text-lg text-gray-600 flex justify-center">Browse our comprehensive database of universities from
                around the world.
            </p>
        </div>
    </div>

    <div class="bg-gray-100 py-8">
        <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside class="lg:col-span-1">
                <div class="bg-white rounded-md shadow-md p-6 mb-6">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
                    <div class="flex items-center text-gray-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m.386-6.364l-1.591 1.591M12 12l3.75-3.75M12 12l-3.75 3.75" />
                        </svg>
                        <span class="text-sm">Refine your search</span>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Country</h3>
                        <div>
                            <select
                                class="block w-full border border-gray-300 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 text-sm">
                                <!-- Loop Countries -->
                                <option>All Countries</option>
                            </select>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">University Type</h3>
                        <div class="space-y-1 text-sm text-gray-600 flex gap-2">
                            <label class="inline-flex items-center">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Public
                            </label>
                            <label class="inline-flex items-center">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Private
                            </label>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Degree Level</h3>
                        <div class="flex flex-col text-sm text-gray-600">
                            <label class="inline-flex items-center mb-1">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Undergraduate
                            </label>
                            <label class="inline-flex items-center mb-1">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Graduate
                            </label>
                            <label class="inline-flex items-center">
                                <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 mr-2">
                                Doctorate
                            </label>
                        </div>
                    </div>

                    <button
                        class="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-gray-800 text-sm font-medium">
                        Apply Filters
                    </button>
                </div>
            </aside>

            <main class="lg:col-span-3">
                <div class="flex items-center justify-between mb-4">
                    <div class="bg-white rounded-md shadow-sm flex items-center px-4 py-2 hover:shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-gray-500 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607m0 0v3.752a2.25 2.25 0 01-2.25 2.25H5.252a2.25 2.25 0 01-2.25-2.25V16.5" />
                        </svg>
                        <input type="text" placeholder="Search universities by name or keyword..."
                            class="outline-none text-sm text-gray-700 w-[250px] ">
                    </div>
                    <span class="text-sm text-gray-600">Showing 10 Universities</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- loop university information  -->
                    <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                        <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                            <!-- Images here -->
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Harvard University</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 inline-block align-text-bottom mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                </svg>
                                Cambridge, United States
                            </p>
                            <p class="text-sm text-gray-700 mb-3">Harvard University is a private Ivy League research
                                university in Cambridge,...</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                    Administration</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Law</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Medicine</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                        <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                            <!-- Images here -->
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Harvard University</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 inline-block align-text-bottom mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                </svg>
                                Cambridge, United States
                            </p>
                            <p class="text-sm text-gray-700 mb-3">Harvard University is a private Ivy League research
                                university in Cambridge,...</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                    Administration</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Law</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Medicine</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                        <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                            <!-- Images here -->
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Harvard University</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 inline-block align-text-bottom mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                </svg>
                                Cambridge, United States
                            </p>
                            <p class="text-sm text-gray-700 mb-3">Harvard University is a private Ivy League research
                                university in Cambridge,...</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                    Administration</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Law</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Medicine</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                        <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                            <!-- Images here -->
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Harvard University</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 inline-block align-text-bottom mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                </svg>
                                Cambridge, United States
                            </p>
                            <p class="text-sm text-gray-700 mb-3">Harvard University is a private Ivy League research
                                university in Cambridge,...</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                    Administration</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Law</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Medicine</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                        <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                            <!-- Images here -->
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Harvard University</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 inline-block align-text-bottom mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                </svg>
                                Cambridge, United States
                            </p>
                            <p class="text-sm text-gray-700 mb-3">Harvard University is a private Ivy League research
                                university in Cambridge,...</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                    Administration</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Law</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Medicine</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                        <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                            <!-- Images here -->
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Harvard University</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 inline-block align-text-bottom mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                </svg>
                                Cambridge, United States
                            </p>
                            <p class="text-sm text-gray-700 mb-3">Harvard University is a private Ivy League research
                                university in Cambridge,...</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                    Administration</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Law</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Medicine</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                        <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                            <!-- Images here -->
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Harvard University</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 inline-block align-text-bottom mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                </svg>
                                Cambridge, United States
                            </p>
                            <p class="text-sm text-gray-700 mb-3">Harvard University is a private Ivy League research
                                university in Cambridge,...</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                    Administration</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Law</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Medicine</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] bg-white rounded-md shadow-md overflow-hidden">
                        <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-400">
                            <!-- Images here -->
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Harvard University</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 inline-block align-text-bottom mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-4.036 10.5-7.5 10.5-3.464 0-7.5-3.358-7.5-10.5 0-7.143 4.036-10.5 7.5-10.5 3.464 0 7.5 3.357 7.5 10.5z" />
                                </svg>
                                Cambridge, United States
                            </p>
                            <p class="text-sm text-gray-700 mb-3">Harvard University is a private Ivy League research
                                university in Cambridge,...</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Business
                                    Administration</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Law</span>
                                <span
                                    class="bg-pink-100 text-pink-500 text-xs rounded-full px-2 py-1 font-medium">Medicine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>