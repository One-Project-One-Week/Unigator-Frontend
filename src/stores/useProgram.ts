import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

interface PaginationMeta {
    current_page: number
    last_page: number
    per_page: number
    total: number,
    next_page_url: string,
    prev_page_url: string
}

interface Program {
    id: number,
    university_id: number,
    name: string,
    category_id: number,
    duration: string,
    detail: {
        year: any,
        tuition_fees: any
    },
    intake: string,
    payment_plan: string,
    degree_type: string,
    level: string,
    application_requirement: string[],
    application_guideline: string,
    universities: {
        name: string
        logo: string,
        application_link: string,
        city: string,
        country: string,
        slug: string
    },

}

interface PaginatedResponse {
    data: {
        data: Program[]
        meta: PaginationMeta
    }
}

export const useProgramStore = defineStore('program', () => {
    const programs = ref<Program[]>([])
    const program = ref<Program | null>(null)
    const loading = ref<boolean>(false)
    const pagination = ref<PaginationMeta>({
        current_page: 1,
        last_page: 1,
        per_page: 10,
        next_page_url: '',
        prev_page_url: '',
        total: 0
    })

    const fetchAllPrograms = async (page: number = 1, perPage: number = 9, filters: any) => {
        try {
            const res = await axios.get('/findProgram', {
                params: {
                    page,
                    per_page: perPage,
                    ...filters
                }
            })
            programs.value = res.data.data.data
            pagination.value = res.data.data.meta

            console.log(programs.value)
            console.log(pagination.value)
        } catch (err: any) {
            throw err
        }
    }

    const fetchProgram = async (id: number) => {
        try {
            loading.value = true
            const res = await axios.get(`/programs/${id}`)
            program.value = res.data.data
            console.log(program.value)
        } catch (err: any) {
            throw err
        } finally {
            loading.value = false
        }
    }

    return {
        programs,
        pagination,
        fetchAllPrograms,
        fetchProgram,
        program,
        loading
    }

})