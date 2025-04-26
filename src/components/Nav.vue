<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Button from './ui/Button.vue';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/useAuth';
import { storeToRefs } from 'pinia';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const authStore = useAuthStore();

const { user } = storeToRefs(authStore);

onMounted(async () => {
    await authStore.fetchUser();
});
</script>

<template>
    <section>
        <nav
            class="w-full h-[80px] mx-auto bg-[#5C6BC0]  flex items-center justify-between fixed z-10 px-4 md:px-8 lg:px-16">
            <div class="w-auto h-full flex items-center">
                <RouterLink :to="{ name: 'home' }" class="flex items-center">
                    <img class="h-15 md:h-20" src="../assets/images/logo.png" alt="Logo" />
                </RouterLink>
            </div>

            <div class="md:hidden">
                <button @click="toggleMenu" class="focus:outline-none">
                    <svg v-if="!isMenuOpen" class="w-6 h-6 text-black" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg v-else class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>

            <div class="hidden md:flex gap-8 justify-center items-center w-auto">
                <RouterLink class="font-bold text-lg text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" :to="{ name: 'home' }">Home</RouterLink>
                <RouterLink class="font-bold text-lg text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" :to="{ name: 'universities' }">Universities</RouterLink>
                <RouterLink class="font-bold text-lg text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" to="/about">About</RouterLink>
                <RouterLink class="font-bold text-lg text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" to="/contact">Contact</RouterLink>
            </div>

            <div class="hidden md:flex items-center justify-end gap-3 w-auto">
                <div v-if="!user">
                    <RouterLink to="/register">
                        <Button text="Register" intent="primary" />
                    </RouterLink>
                    <RouterLink to="/login">
                        <Button text="Login" intent="outline" />
                    </RouterLink>
                </div>

                <!-- profile -->
                <div v-else class="flex" v-if="user">
                    <div
                        class="py-2 px-4 border-2 border-blue-400 rounded-md text-blue-600 hover:bg-gray-200 cursor-pointer">
                        <h1>Profile</h1>
                    </div>
                </div>
            </div>
        </nav>

        <div v-if="isMenuOpen" class="md:hidden fixed top-[80px] left-0 w-full bg-white shadow-md z-20">
            <div class="flex flex-col py-4 gap-2">
                <RouterLink
                    class="block py-2 px-4 font-bold text-lg text-black no-underline hover:bg-gray-100 hover:text-blue-500"
                    active-class="bg-gray-100 text-blue-500" :to="{ name: 'home' }" @click="isMenuOpen = false">Home
                </RouterLink>
                <RouterLink
                    class="block py-2 px-4 font-bold text-lg text-black no-underline hover:bg-gray-100 hover:text-blue-500"
                    active-class="bg-gray-100 text-blue-500" :to="{ name: 'universities' }" @click="isMenuOpen = false">
                    Universities</RouterLink>
                <RouterLink
                    class="block py-2 px-4 font-bold text-lg text-black no-underline hover:bg-gray-100 hover:text-blue-500"
                    active-class="bg-gray-100 text-blue-500" to="/about" @click="isMenuOpen = false">About</RouterLink>
                <RouterLink
                    class="block py-2 px-4 font-bold text-lg text-black no-underline hover:bg-gray-100 hover:text-blue-500"
                    active-class="bg-gray-100 text-blue-500" to="/contact" @click="isMenuOpen = false">Contact
                </RouterLink>
                <div class="flex flex-col px-4 mt-4 gap-2">
                    <RouterLink to="/register" @click="isMenuOpen = false">
                        <Button text="Register" intent="primary" class="w-full" />
                    </RouterLink>
                    <RouterLink to="/login" @click="isMenuOpen = false">
                        <Button text="Login" intent="outline" class="w-full" />
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>