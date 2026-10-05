<script setup>

defineProps({
    movie: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['close'])

const imageUrl = (path) => {

    if (!path) return ''

    return `https://image.tmdb.org/t/p/w1280${path}`
}

</script>

<template>

    <div class="movie-details">

        <button class="close-details" @click="emit('close')">
            ×
        </button>

        <div class="movie-backdrop" :style="{
            backgroundImage: `url(${imageUrl(movie.backdrop_path)})`
        }">
        </div>

        <div class="movie-details-content">

            <img class="details-poster" :src="imageUrl(movie.poster_path)" :alt="movie.title" />

            <div class="details-info">

                <span class="movie-label">
                    MY FAVORITE
                </span>

                <h2>
                    {{ movie.title }}
                </h2>

                <div class="movie-meta">

                    <span>
                        ⭐ {{ movie.vote_average?.toFixed(1) }}
                    </span>

                    <span>
                        {{ movie.release_date }}
                    </span>

                    <span>
                        {{ movie.runtime || '--' }} min
                    </span>

                </div>

                <p>
                    {{ movie.overview || 'Sinopsis no disponible.' }}
                </p>

                <div class="genres">

                    <span v-for="genre in movie.genres" :key="genre.id">
                        {{ genre.name }}
                    </span>

                </div>

            </div>

        </div>

    </div>

</template>