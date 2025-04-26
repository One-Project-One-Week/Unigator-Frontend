import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserRegisterData {
  name: string
  email: string;
  phone?: string;
  password: string;
  password_confirmation: string;
}

interface UniRegisterData {
  name: string,
  email: string,
  phone?: string,
  password: string,
  password_confirmation: string,
  logo?: string,
  country: string,
  city: string,
  slug: string,
  website_link: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref(localStorage.getItem('token') || '')
  const loading = ref(false)
  const router = useRouter()

  const login = async (email: string, password: string) => {
    try {
      loading.value = true
      const res = await axios.post('/login', { email, password })
      token.value = res.data.data.token
      localStorage.setItem('token', token.value)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
      await fetchUser()
    } catch (err: any) {
      throw err
    } finally {
      loading.value = false
    }
  }

  const userRegister = async (data: FormData) => {
    try {
      loading.value = true
      const res = await axios.post('/register', data)
      token.value = res.data.data.token
      localStorage.setItem('token', token.value)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
      await fetchUser()
    } catch (err: any) {
      throw err
    } finally {
      loading.value = false
    }
  }

  const uniRegister = async (data: FormData) => {
    try {
      loading.value = true
      const res = await axios.post('/university/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      token.value = res.data.data.token
      localStorage.setItem('token', token.value)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
      await fetchUser()
    } catch (err: any) {
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchUser = async () => {
    if (!token.value) return
    try {
      const res = await axios.get('/user')
      user.value = res.data.data
      console.log(user.value)
    } catch (err: any) {
      if (err.response.status === 401) {
        await logout()
      }
      throw err
    }
  }

  const logout = async () => {
    token.value = ''
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = ''
    user.value = null

    router.push('/login')
  }

  // Initialize user data if token exists
  if (token.value) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
    fetchUser().catch(() => {
      // If there's an error fetching user data, clear the token
      token.value = ''
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = ''
    })
  }

  return { user, token, loading, login, userRegister, uniRegister, logout, fetchUser }
})