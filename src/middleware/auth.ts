import { useAuthStore } from '@/stores/useAuth'
import { onMounted } from 'vue'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export const authMiddleware = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
    const authStore = useAuthStore()

    if (!authStore.user) {
        next({ name: 'login' })
    } else {
        next()
    }
}
