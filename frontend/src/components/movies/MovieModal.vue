<script setup>

import { ref } from 'vue'
import MoviesView from '../../views/MoviesView.vue'

const isOpen = ref(false)

const movieViewKey = ref(0)

const open = () => {

    movieViewKey.value++

    isOpen.value = true

    document.body.style.overflow = 'hidden'
}

const close = () => {

    isOpen.value = false

    document.body.style.overflow = ''
}

</script>

<template>

    <div class="movie-modal-overlay" @click.self="close">

        <div class="movie-modal-window">

            <button type="button" class="movie-modal-close" @click="close" aria-label="Cerrar">
                ×
            </button>

            <MoviesView :key="movieViewKey" />

        </div>

    </div>

</template>

<style>
.movie-modal-overlay {
    position: fixed;
    inset: 0;

    width: 100vw;
    height: 100vh;

    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.9);
}

.movie-modal-window {
    position: relative;

    width: 90vw;
    max-width: 1200px;

    height: 85vh;

    overflow-y: auto;

    background: #080808;
    color: white;

    border-radius: 16px;
    border: 1px solid #333;

    box-shadow:
        0 30px 100px rgba(0, 0, 0, 0.8);
}

.movie-modal-close {
    position: absolute;

    top: 15px;
    right: 15px;

    z-index: 100000;

    width: 40px;
    height: 40px;

    border: none;
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.8);

    color: white;

    font-size: 28px;

    cursor: pointer;
}
</style>