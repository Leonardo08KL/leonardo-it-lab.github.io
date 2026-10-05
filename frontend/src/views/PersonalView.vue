<script>

import { searchMovies } from '../services/tmdbService';

</script>

<style>
.personal-view {
    width: 100%;
    height: 100%;

    padding: 20px;

    overflow-y: auto;

    background: #0f172a;
    color: #e2e8f0;
}
</style>

<template>
    <section class="personal-view">
        <header class="personal-header">
            <h2>Gustos Personales</h2>

            <p>
                Sección enfocada en mis gustos personales.
            </p>
        </header>

        <div class="personal-grid">
            <article v-for="group in skillGroups" :key="group.title" class="skill-group">
                <h3>{{ group.title }}</h3>

                <div class="personal">
                    <span v-for="skill in group.personal" :key="skill" class="skill">
                        {{ skill }}
                    </span>
                </div>
            </article>
        </div>
    </section>
</template>