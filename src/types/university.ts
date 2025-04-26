export interface University {
    id: number
    user: {
        name: string,
        email: string,
        phone: string,
        bio: string,
    }
    programs: {
        id: number
        name: string
        description: string
        image: string
        link: string
    }[]
    slug: string
    logo: string,
    image: object,
    country: string,
    city: string,
    description: string,
    rating: number,
    ranking: number,
    program_names: string[]
    founded: number,
    no_of_students: number,
    similar_universities: {},
    website_link: string
} 