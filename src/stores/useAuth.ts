import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserRegisterData {
  name: string
  email: string;
  phone?: number;
  password: string;
  password_confirmation: string;
}

interface UniRegisterData {
  name: string,
  email: string,
  phone?: number,
  password: string,
  password_confirmation: string,
  logo?: string,
  country: string,
  city: string,
  slug: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref(localStorage.getItem('token') || '')
  const loading = ref(false)

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

  const userRegister = async (data: UserRegisterData) => {
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

  const uniRegister = async (data: UniRegisterData) => {
    try {
      loading.value = true
      const res = await axios.post('/university/register', data)
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
  }

  return { user, token, loading, login, userRegister, uniRegister, logout }
})