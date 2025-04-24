<script lang="ts" setup>
import { ref } from 'vue';

const activeTab = ref('Student');
</script>

<template>
    <div class="bg-gray-100 pt-20">
        <div class=" flex flex-col items-center justify-center min-h-screen py-2">
            <div class="text-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-hospital mb-4" viewBox="0 0 16 16">
                    <path
                        d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                    <path
                        d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
                </svg>
                <h1 class="text-2xl font-bold text-gray-800 ml-4">Unigator</h1>
            </div>

            <div class="w-[30%] bg-blue-300 py-3 px-4 mb-4 rounded-md">
                <ul class="flex justify-around">
                    <li @click="activeTab = 'Student'" class="cursor-pointer">
                        <a
                            :class="{ 'bg-white shadow-md rounded-md p-2': activeTab === 'Student', 'text-white hover:text-blue-500': activeTab !== 'Student' }">Student</a>
                    </li>
                    <li @click="activeTab = 'University'" class="cursor-pointer">
                        <a
                            :class="{ 'bg-white shadow-md rounded-md p-2': activeTab === 'University', 'text-white hover:text-blue-500': activeTab !== 'University' }">University</a>
                    </li>
                </ul>
            </div>

            <section v-if="activeTab === 'Student'" class="mb-8">
                <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
                    <div class="text-center space-y-2">
                        <h2 class="text-xl font-semibold text-gray-800">Create an account</h2>
                        <p class="text-gray-600 text-sm">Enter your information to create an account</p>
                    </div>

                    <form class="space-y-4">
                        <div>
                            <label for="firstName" class="block text-gray-700 text-sm font-bold mb-1">Name</label>
                            <input type="text" id="Name" placeholder="John"
                                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div>
                            <label for="lastName" class="block text-gray-700 text-sm font-bold mb-1">Phone</label>
                            <input type="text" id="lastName" placeholder="Phone"
                                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div>
                            <label for="email" class="block text-gray-700 text-sm font-bold mb-1">Email</label>
                            <input type="email" id="email" placeholder="name@example.com"
                                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div>
                            <label for="password" class="block text-gray-700 text-sm font-bold mb-1">Password</label>
                            <div class="relative">
                                <input type="password" id="password" placeholder="********"
                                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <button type="button"
                                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none">
                                </button>
                            </div>
                            <p class="text-gray-500 text-xs mt-2">Password must be at least 8 characters long and
                                include a
                                number and a special character</p>
                        </div>

                        <div>
                            <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-1">Confirm
                                password</label>
                            <div class="relative">
                                <input type="password" id="confirmPassword" placeholder="********"
                                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <button type="button"
                                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none">
                                </button>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" id="terms"
                                class="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <label for="terms" class="text-gray-700 text-sm">I agree to the terms and conditions</label>
                        </div>

                        <button type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-300">
                            Create account
                        </button>
                    </form>

                    <div class="text-center text-gray-600 text-sm">
                        Already have an account?
                        <a href="/login"
                            class="text-blue-500 hover:text-blue-700 focus:outline-none focus:shadow-outline">
                            Sign in
                        </a>
                    </div>
                </div>
            </section>

            <section v-if="activeTab === 'University'" class="mb-8">
                <div class="w-[500px] bg-white p-8 rounded-xl shadow-lg space-y-6">
                    <div class="text-center space-y-2">
                        <h2 class="text-xl font-semibold text-gray-800">Create an account</h2>
                        <p class="text-gray-600 text-sm">Enter your information to create an account</p>
                    </div>

                    <form class="w-[100%] space-y-4">
                        <div>
                            <label for="firstName" class="w-full block text-gray-700 text-sm font-bold mb-1">Univeristy
                                Name</label>
                            <input type="text" id="Name" placeholder="Havard University"
                                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div class="w-full flex gap-4">
                            <div class="w-[48%]">
                                <label for="lastName" class="block text-gray-700 text-sm font-bold mb-1">Phone</label>
                                <input type="text" id="lastName" placeholder="Phone"
                                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="w-[48%]">
                                <label for="email" class="block text-gray-700 text-sm font-bold mb-1">Email</label>
                                <input type="email" id="email" placeholder="name@example.com"
                                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div>
                            <div class="flex gap-4">
                                <div>
                                    <label for="password"
                                        class="block text-gray-700 text-sm font-bold mb-1">Password</label>
                                    <div class="relative">
                                        <input type="password" id="password" placeholder="********"
                                            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                        <button type="button"
                                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none">
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label for="confirmPassword"
                                        class="block text-gray-700 text-sm font-bold mb-1">Confirm
                                        password</label>
                                    <div class="relative">
                                        <input type="password" id="confirmPassword" placeholder="********"
                                            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                        <button type="button"
                                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-500 text-xs mt-2">Password must be at least 8 characters long and
                                include a
                                number and a special character</p>
                        </div>

                        <div class="w-full flex gap-4">
                            <div class="w-[48%]">
                                <label for="lastName" class="block text-gray-700 text-sm font-bold mb-1">Country</label>
                                <input type="text" id="lastName" placeholder="United States"
                                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="w-[48%]">
                                <label for="email" class="block text-gray-700 text-sm font-bold mb-1">City</label>
                                <input type="email" id="email" placeholder="New York"
                                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>

                        <div>
                            <div>
                                <label for="Logo" class="block text-gray-700 text-sm font-bold mb-1">Logo (Image)</label>
                                <input type="file" id="file"
                                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                <label for="web" class="block text-gray-700 text-sm font-bold mb-1">Website Link</label>
                                <input type="text" id="text"
                                    class="shadow appearance-none border rounded w-full py-3 px-4 text-blue-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" id="terms"
                                class="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <label for="terms" class="text-gray-700 text-sm">I agree to the terms and conditions</label>
                        </div>

                        <button type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-300">
                            Create account
                        </button>
                    </form>

                    <div class="text-center text-gray-600 text-sm">
                        Already have an account?
                        <a href="/login"
                            class="text-blue-500 hover:text-blue-700 focus:outline-none focus:shadow-outline">
                            Sign in
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>