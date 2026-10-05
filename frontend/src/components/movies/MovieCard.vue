<script setup>

defineProps({
    movie: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['select'])

const imageUrl = (poster) => {

    if (!poster) {
        return '/images/movie-placeholder.jpg'
    }

    return `https://image.tmdb.org/t/p/w500${poster}`
}

</script>

<template>

    <article class="movie-card" @click="emit('select', movie)">

        <div class="movie-poster">

            <img :src="imageUrl(movie.poster_path)" :alt="movie.title" loading="lazy" />

            <div class="movie-overlay">

                <span class="view-movie">
                    Ver película
                </span>

            </div>

        </div>

        <div class="movie-info">

            <h4>
                {{ movie.title }}
            </h4>

            <span>
                {{ movie.release_date?.substring(0, 4) || 'N/A' }}
            </span>

        </div>

    </article>

</template>