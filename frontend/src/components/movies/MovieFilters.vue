<script setup>

const emit = defineEmits(['search'])

const search = (event) => {

    emit('search', event.target.value)

}

</script>

<template>

    <div class="movie-filters">

        <div class="movie-search">

            <span>⌕</span>

            <input type="text" placeholder="Buscar película..." @input="search" />

        </div>

    </div>

</template>