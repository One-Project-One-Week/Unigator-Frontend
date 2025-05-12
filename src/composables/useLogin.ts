import { useAuthStore } from "@/stores/useAuth"
import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router"
export const useLogin = () => {
    const authStore = useAuthStore()
    const router = useRouter()
    const loading = ref(false)
    const errors = ref<Record<string, string[]>>({})
    const errorMessage = ref<string>('')

    const handleLogin = async (email: string, password: string) => {
        try {
            loading.value = true
            errors.value = {}

            await authStore.login(email, password)

            router.push('/')
        } catch (err: any) {
            if (err.response.data.data) {
                errors.value = err.response.data.data
            } else if (err.status === 401) {
                errorMessage.value = err.response.data.message
            }
        } finally {
            loading.value = false
        }
    }

    return {
        handleLogin,
        loading,
        errors,
        errorMessage
    }
}