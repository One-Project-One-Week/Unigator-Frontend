<script lang="ts" setup>
import { ref } from 'vue';
import { useLogin } from '@/composables/useLogin';

const useForm = ref({
    email: '',
    password: '',
})

const { handleLogin, loading, errors, errorMessage } = useLogin()

const handleSubmit = async () => {
    await handleLogin(useForm.value.email, useForm.value.password)
}
</script>

<template>
    <div>
        <div class="bg-blue-100 flex flex-col items-center justify-center min-h-screen py-2">
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
            <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">


                <div class="text-center space-y-2">
                    <h2 class="text-xl font-semibold text-gray-800">Sign in to your account</h2>
                    <p class="text-gray-600 text-sm">Enter your email and password to access your account</p>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div>
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-1">Email</label>
                        <input v-model="useForm.email" type="email" id="email" placeholder="name@example.com"
                            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <div v-if="errors.email || errorMessage" class="text-red-500 text-xs mt-1">
                            {{ errors.email || errorMessage }}
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block text-gray-700 text-sm font-bold mb-1">Password</label>
                        <div class="relative">
                            <input v-model="useForm.password" type="password" id="password" placeholder="********"
                                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <div v-if="errors.password" class="text-red-500 text-xs mt-1">
                                {{ errors.password[0] }}
                            </div>
                        </div>
                        <a href="#"
                            class="text-xs text-blue-500 hover:text-blue-700 text-right block mt-2 focus:outline-none focus:shadow-outline">
                            Forgot password?
                        </a>
                    </div>

                    <div class="flex items-center">
                        <input type="checkbox" id="rememberMe"
                            class="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                        <label for="rememberMe" class="text-gray-700 text-sm">Remember me</label>
                    </div>

                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-300">
                        {{ loading ? 'Signing in...' : 'Sign in' }}
                    </button>
                </form>

                <div class="text-center text-gray-600 text-sm">
                    Don't have an account?
                    <a href="/register"
                        class="text-blue-500 hover:text-blue-700 focus:outline-none focus:shadow-outline">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>