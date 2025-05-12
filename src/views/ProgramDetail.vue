<script lang="ts" setup>
import ProgramDetail from '@/components/ProgramDetail.vue';
import { useProgramStore } from '@/stores/useProgram';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import Nav from '@/components/Nav.vue';
const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})

const { fetchProgram } = useProgramStore()

const { program, loading } = storeToRefs(useProgramStore())

onMounted(async () => {
    await fetchProgram(props.id)
})

</script>

<template>

    <div>
        <Nav />
    </div>

    <div>
        <ProgramDetail :program="program" :loading="loading" />
    </div>
</template>