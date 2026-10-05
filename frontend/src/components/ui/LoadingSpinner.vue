<template>

    <div class="loading">

        <div class="spinner"></div>

        <span>
            Cargando películas...
        </span>

    </div>

</template>

<style scoped>
.loading {

    min-height: 300px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 15px;

    color: #888;

}

.spinner {

    width: 42px;
    height: 42px;

    border: 3px solid #333;

    border-top-color: #e50914;

    border-radius: 50%;

    animation:
        spin .8s linear infinite;

}

@keyframes spin {

    to {
        transform: rotate(360deg);
    }

}
</style>