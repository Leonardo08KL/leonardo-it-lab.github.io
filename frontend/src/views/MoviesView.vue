<script setup>

import { onMounted, ref } from 'vue'

import { createMovieController } from '../controllers/movieController'

const movies = ref([])

const loading = ref(true)

const error = ref(null)

const movieController = createMovieController()

onMounted(async () => {

    try {

        movies.value = await movieController.loadPopularMovies()

        console.log('MOVIES VIEW:', movies.value)

        console.log('TOTAL:', movies.value.length)

    } catch (err) {

        console.error('MOVIES VIEW ERROR:', err)

        error.value = err.message

    } finally {

        loading.value = false

    }

})

</script>