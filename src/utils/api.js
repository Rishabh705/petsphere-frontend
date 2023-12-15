const url = process.env.REACT_APP_SERVER;

const handleFetch = async (url, options) => {
    try {
        const res = await fetch(url, options);
        const data =  await res.json();

        if (!res.ok) {
            throw {
                message: data.message,
                statusText: res.statusText,
                status: res.status,
            };
        }
        return data
    } catch (error) {
        throw error;
    }
};

// Fetch all pets
export const getPets = async (page, filterType) => {
    const endpoint = `${url}/api/pet?page=${page}&type=${filterType.type}&age=${filterType.age}&breed=${filterType.breed}&gender=${filterType.gender}`;
    return handleFetch(endpoint);
};

// Fetch a pet
export const getPet = async (id) => {
    const endpoint = `${url}/api/pet/${id}`;
    return handleFetch(endpoint);
};

// Get breeds
export const getBreeds = async (type) => {
    const endpoint = `${url}/api/pet/breeds?type=${type}`;
    return handleFetch(endpoint);
};

// Get favorite pets
export const getFavorites = async (user) => {
    const endpoint = `${url}/api/favorites?user=${user}`;
    return handleFetch(endpoint);
};

// Add favorite pet
export const addFavoritePet = async (user, pet) => {
    const endpoint = `${url}/api/favorites`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: user,
            pet: pet,
        }),
    };

    return handleFetch(endpoint, options);
};

// Login user
export const loginUser = async (creds) => {
    const endpoint = `${url}/api/auth/login`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
    };

    return handleFetch(endpoint, options);
};

// Register user
export const registerUser = async (creds) => {
    const endpoint = `${url}/api/auth/register`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
    };

    return handleFetch(endpoint, options);
};
