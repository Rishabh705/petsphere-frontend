const url = process.env.REACT_APP_SERVER

const handleFetch = async (url, options) => {
    try {
        const res = await fetch(url, options)

        if (res.status === 204) {
            return {} // Return an empty object for 204 response
        }

        const data = await res.json()

        if (!res.ok) {
            throw {
                message: data.message || "Failed to fetch results",
                statusText: res.statusText,
                status: res.status,
            }
        }

        return data
    } catch (error) {
        throw error
    }
}

// Fetch all pets
export const getPets = async (page, filterType) => {
    const queryString = Object.keys(filterType).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filterType[key])}`).join('&')
    const endpoint = `${url}/api/pet?page=${page}&${queryString}`
    const data = await handleFetch(endpoint)
    return data.pets || []
}

// Fetch a pet
export const getPet = async (id) => {
    const endpoint = `${url}/api/pet/${id}`
    const data = await handleFetch(endpoint)
    return data.pet || []
}

// Get breeds
export const getBreeds = async (type) => {
    const endpoint = `${url}/api/pet/breeds?type=${type}`
    const data = await handleFetch(endpoint)
    return data.breeds || []

}

// Get favorite pets
export const getFavorites = async (user) => {
    const endpoint = `${url}/api/favorites?user=${user}`
    const data = await handleFetch(endpoint)
    return data.favorites || []
}

// Add favorite pet
export const manageFavoritePet = async (user, pet) => {
    const endpoint = `${url}/api/favorites`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: user,
            pet: pet,
        }),
    }

    return handleFetch(endpoint, options)
}

// Login user
export const loginUser = async (creds) => {
    const endpoint = `${url}/api/auth/login`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
    }
    return handleFetch(endpoint, options)
}

// Register user
export const registerUser = async (creds) => {
    const endpoint = `${url}/api/auth/register`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
    }

    return handleFetch(endpoint, options)
}