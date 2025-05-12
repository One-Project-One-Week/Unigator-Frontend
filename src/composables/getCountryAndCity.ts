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

// Cache for storing API responses
const countryCache = new Map<string, Country[]>()
const cityCache = new Map<string, City[]>()

export const useCountryAndCity = () => {
    const countries = ref<Country[]>([])
    const cities = ref<City[]>([])
    const selectedCountry = ref<Country | null>(null)
    const selectedCity = ref<string>('')
    const loading = ref(false)
    const error = ref<string | null>(null)

    const headers = new Headers()
    headers.append("X-CSCAPI-KEY", import.meta.env.VITE_COUNTRY_API)

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow' as RequestRedirect
    };

    const fetchCountries = async () => {
        try {
            loading.value = true
            error.value = null

            // Check cache first
            const cacheKey = 'all-countries'
            if (countryCache.has(cacheKey)) {
                countries.value = countryCache.get(cacheKey)!
                return
            }

            const res = await fetch(import.meta.env.VITE_COUNTRY_URL, requestOptions)

            if (!res.ok) {
                throw new Error(`Failed to fetch countries: ${res.statusText}`)
            }

            const data = await res.json()
            countries.value = data
            countryCache.set(cacheKey, data)
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch countries'
            console.error('Error fetching countries:', err)
        } finally {
            loading.value = false
        }
    }

    const fetchCities = async (country: Country) => {
        try {
            loading.value = true
            error.value = null

            // Check cache first
            const cacheKey = `cities-${country.iso2}`
            if (cityCache.has(cacheKey)) {
                cities.value = cityCache.get(cacheKey)!
                return
            }

            const res = await fetch(`https://api.countrystatecity.in/v1/countries/${country.iso2}/cities`, requestOptions)

            if (!res.ok) {
                throw new Error(`Failed to fetch cities: ${res.statusText}`)
            }

            const data = await res.json()
            cities.value = data
            cityCache.set(cacheKey, data)
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch cities'
            console.error('Error fetching cities:', err)
        } finally {
            loading.value = false
        }
    }

    // Clear city cache when country changes
    watch(selectedCountry, (newCountry) => {
        if (newCountry) {
            fetchCities(newCountry)
        } else {
            cities.value = []
        }
    })

    return {
        countries,
        cities,
        selectedCountry,
        selectedCity,
        loading,
        error,
        fetchCountries,
        fetchCities,
        requestOptions
    }
}

