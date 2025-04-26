<script lang="ts" setup>
import Nav from '@/components/Nav.vue'
import Detail from '@/components/Detail.vue';
import Info from '@/components/Info.vue';
import Footer from '@/components/Footer.vue';
import { useUniStore } from '@/stores/useUni';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

interface University {
    id: number
    user: {
        name: string,
        email: string,
        phone: string,
        bio: string,
    }
    slug: string
    logo: string,
    image: object,
    country: string,
    city: string,
    description: string,
    rating: number,
    ranking: number,
    program_names: string[]
}

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
        <Detail v-if="university" :name="university.user.name" :country="university.country" :city="university.city" />
    </div>

    <div>
        <Info :university="university" />
    </div>

    <div>
        <Footer />
    </div>
</template>