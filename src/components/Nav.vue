<script lang="ts" setup>
</script>

<template>
    <section>
        <nav
            class="w-[100%] h-[80px] mx-auto  bg-gradient-to-r from-[#D4F6FF] via-[#C9E6F0] to-[#AFDDFF] to-[90%] flex gap-2.5 fixed z-10">
            <div class="w-[20%] h-full flex items-center">
                <img class="w-[60%] ml-[15%]" src="../assets/images/logo.png" alt="Logo">
            </div>
            <div class="w-[60%] h-full flex gap-[80px] justify-center items-center">
                <a class="font-bold text-[18px] text-black no-underline" href="/">Home</a>
                <a class="font-bold text-[18px] text-black no-underline" href="/universities">Universities</a>
                <a class="font-bold text-[18px] text-black no-underline" href="/about">About</a>
                <a class="font-bold text-[18px] text-black no-underline" href="your-link">Link Text</a>
            </div>
            <div class="w-[20%] h-full flex items-center justify-start gap-3">
                <button
                    class="h-[50%] px-4 border-2 border-blue-500 bg-blue-500 text-white rounded-[10px] cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Register</button>
                <button
                    class="h-[50%] px-4 border-2 border-[#FFECDB] text-[#FFECDB] rounded-[10px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FFECDB] hover:border-gray-200 hover:text-black hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">Login</button>
            </div>
        </nav>
    </section>
</template>