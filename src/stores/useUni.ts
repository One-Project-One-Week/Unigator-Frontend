import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

interface PaginationMeta {
    current_page: number
    last_page: number
    per_page: number
    total: number,
    next_page_url: string,
    prev_page_url: string
}

interface University {
    id: number
    name: string
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

interface PaginatedResponse {
    data: {
        data: University[]
        meta: PaginationMeta
    }
}

interface FilterParams {
    country?: string | null
    city?: string | null
    budget?: number | null
    type?: 'public' | 'private' | null
}

export const useUniStore = defineStore('uni', () => {
    const topUniversities = ref<University[]>([])
    const universities = ref<University[]>([])
    const loading = ref(false)
    const pagination = ref<PaginationMeta>({
        current_page: 1,
        last_page: 1,
        per_page: 10,
        next_page_url: '',
        prev_page_url: '',
        total: 0
    })

    const fetchTopUniversities = async () => {
        try {
            loading.value = true
            const res = await axios.get('/university/top')
            topUniversities.value = res.data.data
        } catch (err: any) {
            throw err
        } finally {
            loading.value = false
        }
    }

    const fetchAllUniversities = async (page: number = 1, perPage: number = 10, filters: FilterParams = {}) => {
        try {
            loading.value = true
            const res = await axios.get<PaginatedResponse>('/university', {
                params: {
                    page,
                    per_page: perPage,
                    ...filters
                }
            })
            universities.value = res.data.data.data
            pagination.value = res.data.data.meta
        } catch (err: any) {
            throw err
        } finally {
            loading.value = false
        }
    }

    const fetchUniversity = async (slug: string) => {
        try {
            loading.value = true
            const res = await axios.get(`/university/${slug}`)
            return res.data.data
        } catch (err: any) {
            if (err.response.status === 404) {
                throw new Error('University not found')
            }
            throw err
        } finally {
            loading.value = false
        }
    }

    const updateUniversity = async (slug: string, data: University) => {
        try {
            loading.value = true
            const res = await axios.put('/university/update', data)
            return res.data.data
        } catch (err: any) {
            if (err.response.status === 422) {
                throw err.response.data.data
            }
            if (err.response.status === 401) {
                throw ('You are not authorized to update this university')
            }
        } finally {
            loading.value = false
        }
    }

    return {
        topUniversities,
        universities,
        loading,
        pagination,
        fetchTopUniversities,
        fetchAllUniversities,
        fetchUniversity,
        updateUniversity
    }
})