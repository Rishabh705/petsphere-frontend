const url = process.env.SERVER || 'http://localhost:3500'

// fetch all pets

export async function getPets(page,filterType) {
    const res = await fetch(`${url}/api/pet?page=${page}&type=${filterType.type}&age=${filterType.age}&breed=${filterType.breed}&gender=${filterType.gender}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

// fetch a pet
export async function getPet(id) {
    const res = await fetch(`${url}/api/pet/${id}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

// get breeds
export async function getBreeds(type) {
    const res = await fetch(`${url}/api/pet/breeds?type=${type}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

