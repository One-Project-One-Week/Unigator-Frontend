import { ref } from 'vue';
import { useAuthStore } from '@/stores/useAuth';
import { useRouter } from 'vue-router';

const loading = ref(false);
const errors = ref<Record<string, string[]>>({});

export const useUniRegister = () => {
    const router = useRouter();
    const authStore = useAuthStore();

    const uniForm = ref({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        country: '',
        city: '',
        logo: null as File | null,
        slug: '',
        website_link: ''
    });

    const logoPreview = ref('');

    const handleLogoChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/svg+xml'];
            const maxSize = 2 * 1024 * 1024; // 2MB

            if (!validTypes.includes(file.type)) {
                alert('Please select a valid image file (JPEG, PNG, JPG, GIF, SVG)');
                input.value = '';
                return;
            }

            if (file.size > maxSize) {
                alert('File size must be less than 2MB');
                input.value = '';
                return;
            }

            uniForm.value.logo = file;
            const reader = new FileReader();
            reader.onload = (e) => {
                logoPreview.value = e.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUniRegister = async () => {
        try {
            loading.value = true;
            errors.value = {}; // Clear previous errors
            const formData = new FormData();

            // Append all form fields to FormData
            formData.append('name', uniForm.value.name);
            formData.append('email', uniForm.value.email);
            if (uniForm.value.phone) formData.append('phone', uniForm.value.phone);
            formData.append('password', uniForm.value.password);
            formData.append('password_confirmation', uniForm.value.password_confirmation);
            formData.append('country', uniForm.value.country);
            formData.append('city', uniForm.value.city);
            formData.append('slug', uniForm.value.slug);
            formData.append('website_link', uniForm.value.website_link);
            if (uniForm.value.logo) formData.append('logo', uniForm.value.logo);

            await authStore.uniRegister(formData);
            router.push('/');
        } catch (error: any) {
            if (error.response?.data?.data) {
                errors.value = error.response.data.data;
            } else {
                console.error('Registration failed:', error);
            }
        } finally {
            loading.value = false;
        }
    };

    return {
        uniForm,
        logoPreview,
        loading,
        errors,
        handleLogoChange,
        handleUniRegister
    }
}

export const useUserRegister = () => {
    const router = useRouter()
    const authStore = useAuthStore()

    const userForm = ref({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    })

    const handleUserRegister = async () => {
        try {
            loading.value = true
            errors.value = {}

            const formData = new FormData()

            formData.append('name', userForm.value.name)
            formData.append('email', userForm.value.email)
            formData.append('phone', userForm.value.phone)
            formData.append('password', userForm.value.password)
            formData.append('password_confirmation', userForm.value.password_confirmation)

            await authStore.userRegister(formData)
            router.push('/')


        } catch (error: any) {
            if (error.response?.data?.data) {
                errors.value = error.response.data.data
            } else {
                console.error('Registration failed:', error)
            }
        } finally {
            loading.value = false
        }
    }

    return {
        userForm,
        loading,
        errors,
        handleUserRegister
    }
}