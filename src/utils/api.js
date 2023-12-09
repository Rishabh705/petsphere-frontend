const url = process.env.REACT_APP_SERVER

// fetch all pets
export async function getPets(page, filterType) {
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

export async function loginUser(creds) {
    const res = await fetch(`${url}/api/auth/login`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
    })

    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function registerUser(creds) {
    const res = await fetch(`${url}/api/auth/register`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
    })

    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

