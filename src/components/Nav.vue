<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Button from './ui/Button.vue';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/useAuth';
import { storeToRefs } from 'pinia';

const isMenuOpen = ref(false);
const isProfileOpen = ref(false); // Added for profile dropdown

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    isProfileOpen.value = false; // Close profile when menu toggles
};

const toggleProfile = () => { // Added for profile dropdown
    isProfileOpen.value = !isProfileOpen.value;
};

const authStore = useAuthStore();

const { user } = storeToRefs(authStore);

onMounted(async () => {
    await authStore.fetchUser();
});

// onMounted(() => {
//     const scrollElement = document.getElementById('scroll-element');

//     if (scrollElement) {
//         window.addEventListener('scroll', () => {
//             const scrollY = window.scrollY;
//             // Start from 0.8 (80%) and go down to 0.5 (50%) when scrolled 500px
//             const opacity = Math.max(0.8, 1 - scrollY / 1500);
//             scrollElement.style.opacity = opacity.toString();
//         });
//     }
// });

</script>

<template>
    <section>
        <nav id="scroll-element"
            class="w-full h-[80px] mx-auto bg-[#e2eafc] shadow-md flex items-center justify-between fixed z-10 px-4 md:px-8 lg:px-16">
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
                <RouterLink class="font-bold text-xl text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" :to="{ name: 'home' }">Home</RouterLink>
                <RouterLink class="font-bold text-xl text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" :to="{ name: 'universities' }">Universities</RouterLink>
                <RouterLink class="font-bold text-xl text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" to="/about">About</RouterLink>
            </div>

            <div class="hidden md:flex items-center justify-end gap-3 w-auto">
                <div v-if="!user">
                    <div class="flex gap-3 ">
                        <RouterLink to="/register">
                            <Button text="Register" intent="primary" />
                        </RouterLink>
                        <RouterLink to="/login">
                            <Button text="Login" intent="outline" />
                        </RouterLink>
                    </div>
                </div>

                <div v-else class="relative" @click="toggleProfile">
                    <div class="py-2 px-4 border-2 border-blue-400 rounded-md hover:bg-blue-200 cursor-pointer">
                        <div class="flex items-center gap-2">
                            <div class="rounded-full h-10 w-10 bg-gray-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                            </div>
                            <div class="flex flex-col items-start">
                                <span class="text-gray-700 font-medium">Sarah Johnson</span>
                                <span class="text-gray-500 text-sm">sarah.j@example.com</span>
                            </div>
                        </div>
                    </div>
                    <ul v-if="isProfileOpen"
                        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">My University</a></li>
                        <li class="border-t border-gray-200"><a href="#"
                                class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Log out</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div v-if="isMenuOpen" class="md:hidden fixed top-[80px] left-0 w-full bg-white shadow-md z-20">
            <div class="flex flex-col py-4 gap-2">
                <RouterLink
                    class="block py-2 px-4 font-bold text-lg text-black no-underline hover:bg-gray-100 hover:text-blue-500"
                    active-class="bg-gray-100 text-blue-500" :to="{ name: 'home' }" @click="toggleMenu">Home
                </RouterLink>
                <RouterLink
                    class="block py-2 px-4 font-bold text-lg text-black no-underline hover:bg-gray-100 hover:text-blue-500"
                    active-class="bg-gray-100 text-blue-500" :to="{ name: 'universities' }" @click="toggleMenu">
                    Universities</RouterLink>
                <RouterLink
                    class="block py-2 px-4 font-bold text-lg text-black no-underline hover:bg-gray-100 hover:text-blue-500"
                    active-class="bg-gray-100 text-blue-500" to="/about" @click="toggleMenu">About</RouterLink>
                <RouterLink
                    class="block py-2 px-4 font-bold text-lg text-black no-underline hover:bg-gray-100 hover:text-blue-500"
                    active-class="bg-gray-100 text-blue-500" to="/contact" @click="toggleMenu">Contact
                </RouterLink>
                <div v-if="!user" class="flex flex-col px-4 mt-4 gap-2">
                    <RouterLink to="/register" @click="toggleMenu">
                        <Button text="Register" intent="primary" class="w-full" />
                    </RouterLink>
                    <RouterLink to="/login" @click="toggleMenu">
                        <Button text="Login" intent="outline" class="w-full" />
                    </RouterLink>
                </div>
                <div v-else class="px-4 mt-4 relative" @click="toggleProfile">
                    <div class="py-2 px-4 border-2 border-gray-200 rounded-md hover:bg-gray-200 cursor-pointer">
                        <div class="flex items-center gap-2">
                            <div
                                class="rounded-full h-10 w-10 bg-gray-100 flex items-center justify-center hover:bg-gray-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                            </div>
                            <div class="flex flex-col items-start">
                                <span class="text-gray-700 font-medium">Sarah Johnson</span>
                                <span class="text-gray-500 text-sm">sarah.j@example.com</span>
                            </div>
                        </div>
                    </div>
                    <ul v-if="isProfileOpen"
                        class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100" @click="toggleMenu">My
                                Account</a></li>
                        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                @click="toggleMenu">Profile</a></li>
                        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                @click="toggleMenu">Settings</a></li>
                        <li class="border-t border-gray-200"><a href="#"
                                class="block px-4 py-2 text-gray-800 hover:bg-gray-100" @click="toggleMenu">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
