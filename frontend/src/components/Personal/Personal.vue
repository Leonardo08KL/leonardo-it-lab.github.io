<script setup>

import {
    Film,
    Search
} from 'lucide-vue-next'

defineProps({
    modelValue: {
        type: String,
        default: ''
    }
})

const emit = defineEmits([
    'update:modelValue'
])

</script>

<template>

    <header class="header">

        <div class="header-inner">

            <div class="brand">

                <div class="brand-icon">

                    <Film />

                </div>

                <div>

                    <strong>
                        Mis Películas
                    </strong>

                    <small>
                        Mi colección personal
                    </small>

                </div>

            </div>

            <div class="search">

                <Search />

                <input :value="modelValue" type="search" placeholder="Buscar película..." @input="
                    emit(
                        'update:modelValue',
                        $event.target.value
                    )
                    ">

            </div>

        </div>

    </header>

</template>

<style scoped>
.header {

    position: sticky;

    top: 0;

    z-index: 100;

    background:
        rgba(10, 10, 10, .8);

    backdrop-filter:
        blur(15px);

    border-bottom:
        1px solid rgba(255, 255, 255, .06);

}

.header-inner {

    max-width: 1250px;

    margin: auto;

    padding: 18px 25px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;

}

.brand {

    display: flex;

    align-items: center;

    gap: 12px;

}

.brand-icon {

    width: 42px;
    height: 42px;

    display: grid;

    place-items: center;

    border-radius: 12px;

    background:
        #e50914;

}

.brand small {

    display: block;

    color: #777;

    margin-top: 2px;

}

.search {

    display: flex;

    align-items: center;

    gap: 10px;

    width: 300px;

    padding:
        10px 15px;

    border-radius: 30px;

    background:
        #1b1b1b;

}

.search svg {

    color: #777;

}

.search input {

    width: 100%;

    border: 0;

    outline: 0;

    background: transparent;

    color: white;

}

@media(max-width:700px) {

    .header-inner {

        flex-direction: column;

        align-items: stretch;

    }

    .search {

        width: auto;

    }

}
</style>