<script lang="ts" setup>
import { useUserRegister } from '@/composables/useRegister';

const { userForm, loading, errors, handleUserRegister } = useUserRegister();
</script>

<template>
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <div class="text-center space-y-2">
            <h2 class="text-xl font-semibold text-gray-800">Create an account</h2>
            <p class="text-gray-600 text-sm">Enter your information to create an account</p>
        </div>

        <form @submit.prevent="handleUserRegister" class="space-y-4">
            <div>
                <label for="name" class="block text-gray-700 text-sm font-bold mb-1">Name</label>
                <input v-model="userForm.name" type="text" id="name" placeholder="John"
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <div v-if="errors.name" class="text-red-500 text-xs mt-1">
                    {{ errors.name[0] }}
                </div>
            </div>
            <div>
                <label for="phone" class="block text-gray-700 text-sm font-bold mb-1">Phone</label>
                <input v-model="userForm.phone" type="tel" id="phone" placeholder="Phone"
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <div v-if="errors.phone" class="text-red-500 text-xs mt-1">
                    {{ errors.phone[0] }}
                </div>
            </div>

            <div>
                <label for="email" class="block text-gray-700 text-sm font-bold mb-1">Email</label>
                <input v-model="userForm.email" type="email" id="email" placeholder="name@example.com"
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <div v-if="errors.email" class="text-red-500 text-xs mt-1">
                    {{ errors.email[0] }}
                </div>
            </div>

            <div>
                <label for="password" class="block text-gray-700 text-sm font-bold mb-1">Password</label>
                <div class="relative">
                    <input v-model="userForm.password" type="password" id="password" placeholder="********"
                        class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <div v-if="errors.password" class="text-red-500 text-xs mt-1">
                        {{ errors.password[0] }}
                    </div>
                </div>
                <p class="text-gray-500 text-xs mt-2">Password must be at least 8 characters long and
                    include a
                    number and a special character</p>
            </div>

            <div>
                <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-1">Confirm
                    password</label>
                <div class="relative">
                    <input v-model="userForm.password_confirmation" type="password" id="confirmPassword"
                        placeholder="********"
                        class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <div v-if="errors.password_confirmation" class="text-red-500 text-xs mt-1">
                        {{ errors.password_confirmation[0] }}
                    </div>
                </div>
            </div>

            <div class="flex items-center">
                <input type="checkbox" id="terms"
                    class="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                <label for="terms" class="text-gray-700 text-sm">I agree to the terms and conditions</label>
            </div>

            <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-300">
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