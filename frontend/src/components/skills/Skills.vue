<script setup>
import SkillBadge from './SkillBadge.vue'
import SkillGroup from './SkillGroup.vue'

// import { useTerminal } from '../../composables/useTerminal'

// const {
//     history,
//     input,
//     runCommand
// } = useTerminal()
</script>

<template>

    <div class="terminal">

        <SkillBadge :history="history" />
        <SkillGroup v-for="(skills, category) in skills" :key="category" :title="category" :skills="skills" />
    </div>

</template>