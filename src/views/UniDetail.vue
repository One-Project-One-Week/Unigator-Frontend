<script lang="ts" setup>
import Nav from '@/components/Nav.vue'
import Detail from '@/components/Detail.vue';
import Info from '@/components/Info.vue';
import Footer from '@/components/Footer.vue';
import { useUniStore } from '@/stores/useUni';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import type { University } from '@/types/university';

const uniStore = useUniStore();

const props = defineProps({
    slug: {
        type: String,
        required: true
    }
})

const { university } = storeToRefs(uniStore);

onMounted(async () => {
    await uniStore.fetchUniversity(props.slug);
});


</script>

<template>
    <div>
        <Nav />
    </div>

    <div>
        <Detail v-if="university" :name="university.user.name" :country="university.country" :city="university.city"
            :logo="university.logo" :cover="university.cover" />
    </div>

    <div>
        <Info :university="university || null" />
    </div>

    <div>
        <Footer />
    </div>
</template>