<script lang="ts" setup>
import { useUniRegister } from '@/composables/useRegister';

const { uniForm, logoPreview, loading, errors, handleLogoChange, handleUniRegister } = useUniRegister();
</script>

<template>
    <div class="w-[500px] bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div class="text-center space-y-2">
            <h2 class="text-xl font-semibold text-gray-800">Create an account</h2>
            <p class="text-gray-600 text-sm">Enter your information to create an account</p>
        </div>

        <form @submit.prevent="handleUniRegister" class="w-[100%] space-y-4">
            <div>
                <label for="universityName" class="w-full block text-gray-700 text-sm font-bold mb-1">University
                    Name</label>
                <input v-model="uniForm.name" type="text" id="universityName" placeholder="Harvard University"
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required />
                <div v-if="errors.name" class="text-red-500 text-xs mt-1">
                    {{ errors.name[0] }}
                </div>
            </div>

            <div class="w-full flex gap-4">
                <div class="w-[48%]">
                    <label for="phone" class="block text-gray-700 text-sm font-bold mb-1">Phone</label>
                    <input v-model="uniForm.phone" type="text" id="phone" placeholder="Phone"
                        class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required />
                    <div v-if="errors.phone" class="text-red-500 text-xs mt-1">
                        {{ errors.phone[0] }}
                    </div>
                </div>

                <div class="w-[48%]">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-1">Email</label>
                    <input v-model="uniForm.email" type="email" id="email" placeholder="name@example.com"
                        class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required />
                    <div v-if="errors.email" class="text-red-500 text-xs mt-1">
                        {{ errors.email[0] }}
                    </div>
                </div>
            </div>

            <div>
                <div class="flex gap-4">
                    <div>
                        <label for="password" class="block text-gray-700 text-sm font-bold mb-1">Password</label>
                        <div class="relative">
                            <input v-model="uniForm.password" type="password" id="password" placeholder="********"
                                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required />
                        </div>
                        <div v-if="errors.password" class="text-red-500 text-xs mt-1">
                            {{ errors.password[0] }}
                        </div>
                    </div>
                    <div>
                        <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-1">Confirm
                            password</label>
                        <div class="relative">
                            <input v-model="uniForm.password_confirmation" type="password" id="confirmPassword"
                                placeholder="********"
                                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required />
                        </div>
                        <div v-if="errors.password_confirmation" class="text-red-500 text-xs mt-1">
                            {{ errors.password_confirmation[0] }}
                        </div>
                    </div>
                </div>
                <p class="text-gray-500 text-xs mt-2">Password must be at least 8 characters long and
                    include a number and a special character</p>
            </div>

            <div class="w-full flex gap-4">
                <div class="w-[48%]">
                    <label for="city" class="text-gray-700 text-sm font-bold mb-1">Country</label>
                    <div>
                        <select
                            class="shadow rounded border-1 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option>
                                United State
                            </option>
                        </select>
                    </div>
                </div>

                <div class="w-[48%]">
                    <label for="city" class="text-gray-700 text-sm font-bold mb-1">City</label>
                    <div>
                        <select
                            class="shadow rounded border-1 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option>
                                New york
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <label for="logo" class="block text-gray-700 text-sm font-bold mb-1">Logo (Image)</label>
                <div class="flex items-center gap-4">
                    <input @change="handleLogoChange" type="file" id="logo" accept="image/*"
                        class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <div v-if="logoPreview" class="w-20 h-20 border rounded overflow-hidden">
                        <img :src="logoPreview" alt="Logo preview" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div v-if="errors.logo" class="text-red-500 text-xs mt-1">
                    {{ errors.logo[0] }}
                </div>
            </div>

            <div>
                <label for="website" class="block text-gray-700 text-sm font-bold mb-1">Website Link</label>
                <input v-model="uniForm.website_link" type="url" id="website" placeholder="https://example.com"
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required />
                <div v-if="errors.website_link" class="text-red-500 text-xs mt-1">
                    {{ errors.website_link[0] }}
                </div>
            </div>

            <div>
                <label for="slug" class="block text-gray-700 text-sm font-bold mb-1">Slug</label>
                <input v-model="uniForm.slug" type="text" id="slug" placeholder="harvard-university"
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required />
                <div v-if="errors.slug" class="text-red-500 text-xs mt-1">
                    {{ errors.slug[0] }}
                </div>
            </div>

            <div class="flex items-center">
                <input type="checkbox" id="terms"
                    class="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" required>
                <label for="terms" class="text-gray-700 text-sm">I agree to the terms and conditions</label>
            </div>

            <button type="submit" :disabled="loading"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-300 disabled:opacity-50">
                {{ loading ? 'Creating account...' : 'Create account' }}
            </button>
        </form>

        <div class="text-center text-gray-600 text-sm">
            Already have an account?
            <a href="/login" class="text-blue-500 hover:text-blue-700 focus:outline-none focus:shadow-outline">
                Sign in
            </a>
        </div>
    </div>
</template>