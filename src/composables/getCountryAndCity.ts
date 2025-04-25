import { ref, watch } from 'vue'

interface Country {
    id: number;
    name: string;
    iso2: string;
}

interface City {
    id: number;
    name: string;
}

export const getCountryAndCity = async () => {
    const countries = ref<Country[]>([])
    const selectedCountry = ref('')
    const selectedCity = ref('')
    const cities = ref<City[]>([])
    const headers = new Headers()
    headers.append("X-CSCAPI-KEY", import.meta.env.VITE_COUNTRY_API)

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow' as RequestRedirect
    };

    const fetchCountries = async () => {
        const res = await fetch(import.meta.env.VITE_COUNTRY_URL, requestOptions)
        const data = await res.json()
        countries.value = data
    }

    const fetchCities = async () => {
        const res = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry.value}/cities`, requestOptions)
        const data = await res.json()
        cities.value = data
    }

    watch(selectedCountry, () => {
        if (selectedCountry.value) {
            fetchCities()
        }
    })
}

