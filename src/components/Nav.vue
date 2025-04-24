<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Button from './ui/Button.vue';
</script>

<template>
    <section>
        <nav
            class="w-[100%] h-[80px] mx-auto  bg-gradient-to-r from-[#D4F6FF] via-[#C9E6F0] to-[#AFDDFF] to-[90%] flex gap-2.5 fixed z-10">
            <div class="w-[20%] h-full flex items-center">
                <img class="w-[60%] ml-[15%]" src="../assets/images/logo.png" alt="Logo">
            </div>
            <div class="w-[60%] h-full flex gap-[80px] justify-center items-center">
                <router-link class="font-bold text-[18px] text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" :to="{ name: 'home' }">Home</router-link>
                <router-link class="font-bold text-[18px] text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" :to="{ name: 'universities' }">Universities</router-link>
                <router-link class="font-bold text-[18px] text-black no-underline hover:text-blue-500"
                    active-class="text-blue-500" to="/about">About</router-link>
                <router-link class="font-bold text-[18px] text-black no-underline" active-class="text-blue-500"
                    to="/contact">Contact</router-link>
            </div>
            <div class="w-[20%] h-full flex items-center justify-start gap-3">
                <a href="/register">
                    <Button text="Register" intent="primary" />
                </a>
                <a href="/login">
                    <Button text="Login" intent="outline" />
                </a>
            </div>
        </nav>
    </section>
</template>