const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const request = async (endpoint, params = {}) => {

    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: 'es-MX',
        ...params
    })

    const response = await fetch(
        `${API_URL}${endpoint}?${searchParams}`
    )

    if (!response.ok) {
        throw new Error('Error al comunicarse con TMDB')
    }

    return await response.json()
}

export const getPopularMovies = () => {
    return request('/movie/popular')
}

export const getMovieDetails = (movieId) => {
    return request(`/movie/${movieId}`, {
        append_to_response: 'credits,videos'
    })
}

export const searchMovies = (query) => {
    return request('/search/movie', {
        query
    })
}