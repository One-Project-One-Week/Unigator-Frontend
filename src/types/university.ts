export interface University {
    id: number
    name: string,
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
    similar_universities: {
        id: number,
        name: string,
        logo: string,
        slug: string,
        city: string,
        country: string,
    }[],
    website_link: string,
    address: string,
    levels: string[],
    degree_levels: string[],
    cover: string,
} 