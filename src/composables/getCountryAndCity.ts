import { ref, watch } from 'vue'

interface Country {
    id: number;
    name: string;
    iso2: string;
    emoji: string;
}

interface City {
    id: number;
    name: string;
}

export const useCountryAndCity = () => {
    const countries = ref<Country[]>([])
    const cities = ref<City[]>([])
    const selectedCountry = ref<Country | null>(null)
    const selectedCity = ref<string>('')

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

    const fetchCities = async (country: string) => {
        if (!selectedCountry.value) return
        const res = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry.value.iso2}/cities`, requestOptions)
        const data = await res.json()
        cities.value = data
    }

    // watch(selectedCountry, () => {
    //     if (selectedCountry.value) {
    //         fetchCities()
    //     }
    // })

    return {
        countries,
        cities,
        selectedCountry,
        selectedCity,
        fetchCountries,
        fetchCities,
        headers,
        requestOptions
    }
}

