<script setup>

import MovieCard from '../movies/MovieCard.vue/index.js'

defineProps({
    movies: {
        type: Array,
        required: true
    }
})

const emit = defineEmits([
    'select'
])

</script>

<template>

    <div class="movie-grid">

        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" @select="emit('select', $event)" />

    </div>

</template>

<style scoped>
.movie-grid {

    display: grid;

    grid-template-columns:
        repeat(auto-fill,
            minmax(170px, 1fr));

    gap: 28px;

}

@media (max-width: 600px) {

    .movie-grid {

        grid-template-columns:
            repeat(2, 1fr);

        gap: 15px;

    }

}
</style>