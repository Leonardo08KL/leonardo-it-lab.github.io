import { ref, computed } from 'vue'

import {
    getFavoriteMovies,
    getMovieDetails,
    getMovieGenres
} from '../services/tmdb'

export function useMovies() {

    const movies = ref([])
    const genres = ref([])

    const loading = ref(false)
    const loadingDetails = ref(false)

    const error = ref(null)

    const selectedMovie = ref(null)

    const search = ref('')
    const selectedGenre = ref('all')

    const loadMovies = async () => {

        loading.value = true
        error.value = null

        try {

            const data = await getFavoriteMovies()

            movies.value = data.results || []

        } catch (err) {

            console.error(err)

            error.value =
                'No se pudieron cargar tus películas favoritas.'

        } finally {

            loading.value = false
        }
    }

    const loadGenres = async () => {

        try {

            genres.value = await getMovieGenres()

        } catch (err) {

            console.error(
                'No se pudieron cargar los géneros',
                err
            )
        }
    }

    const openMovie = async (movie) => {

        selectedMovie.value = movie
        loadingDetails.value = true

        try {

            const details =
                await getMovieDetails(movie.id)

            selectedMovie.value = details

        } catch (err) {

            console.error(err)

        } finally {

            loadingDetails.value = false
        }
    }

    const closeMovie = () => {
        selectedMovie.value = null
    }

    const filteredMovies = computed(() => {

        return movies.value.filter(movie => {

            const matchesSearch =
                movie.title
                    ?.toLowerCase()
                    .includes(
                        search.value.toLowerCase()
                    )

            const matchesGenre =
                selectedGenre.value === 'all' ||
                movie.genre_ids?.includes(
                    Number(selectedGenre.value)
                )

            return matchesSearch && matchesGenre
        })

    })

    return {

        movies,
        genres,

        loading,
        loadingDetails,
        error,

        search,
        selectedGenre,

        selectedMovie,
        filteredMovies,

        loadMovies,
        loadGenres,

        openMovie,
        closeMovie

    }
}