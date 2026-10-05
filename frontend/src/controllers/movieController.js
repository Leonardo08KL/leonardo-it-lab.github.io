import {
    getPopularMovies,
    getMovieDetails,
    searchMovies
} from '../services/tmdbService'

export const createMovieController = () => {

    const loadPopularMovies = async () => {
        try {
            const response = await getPopularMovies()

            console.log('MOVIES CONTROLLER:', response)

            return response.results
        } catch (error) {
            console.error('Error cargando películas:', error)
            throw error
        }
    }

    const loadMovieDetails = async (movieId) => {
        try {
            return await getMovieDetails(movieId)
        } catch (error) {
            console.error('Error obteniendo película:', error)
            throw error
        }
    }

    const findMovies = async (query) => {

        if (!query?.trim()) {
            return []
        }

        try {
            const response = await searchMovies(query)

            return response.results
        } catch (error) {
            console.error('Error buscando películas:', error)
            throw error
        }
    }

    return {
        loadPopularMovies,
        loadMovieDetails,
        findMovies
    }
}