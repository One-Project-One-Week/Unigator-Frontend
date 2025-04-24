import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

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
}

const useUniStore = defineStore('uni', () => {
    const topUniversities = ref<University[]>([])
    const universities = ref<University[]>([])
    const loading = ref(false)

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

    const fetchAllUniversities = async () => {
        try {
            loading.value = true
            const res = await axios.get('/university')
            universities.value = res.data.data
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

})
export default useUniStore