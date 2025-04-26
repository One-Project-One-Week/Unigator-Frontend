import { ref } from 'vue';
import axios from 'axios';
import type { University } from '@/types/university';

export function useRating(university: University | null) {
    const rating = ref(0);
    const hover = ref(0);
    const isLoading = ref(false);
    const token = ref(localStorage.getItem('token') || '')

    const setRating = async (star: number) => {
        if (!university?.id) return;

        try {
            isLoading.value = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
            await axios.post('/rating', {
                user_id: 1,
                university_id: university.id,
                rating_rate: star
            });
            rating.value = star;
            console.log('Rating submitted successfully');
        } catch (error) {
            console.error('Failed to submit rating:', error);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        rating,
        hover,
        isLoading,
        setRating
    };
} 