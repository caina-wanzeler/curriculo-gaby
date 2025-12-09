<script setup>
import Experience from '../util/Experience.vue';

const empregos = {
    emprego1: {
        index: 1,
        title: "Escritório de Advocacia",
        activities: [
            'Direito Previdênciario', 
            'Direito Civil',
            'Direito Trabalhista'
        ],
        time: '1 mês'
    },
    emprego2: {
        index: 2,
        title: "Procon Estadual",
        activities: [
            'Direito do Consumidor'
        ],
        time: '1 ano'
    },
    emprego3: {
        index: 3,
        title: "Tribunal Regional do Trabalho",
        activities: [
            'Direito Trabalhista'
        ],
        time: 'Atual 08/25'
    }
}
</script>

<template>
    <h2>Experiências</h2>
    <div class="data">
        <Experience
            class="experience"
            v-for="emprego in empregos" 
            v-bind:key="emprego.index"
            v-bind:title="emprego.title"
            v-bind:activities="emprego.activities"
            v-bind:time="emprego.time"
        />
    </div>
</template>

<style scoped>
    .data {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        margin: 20px;
    }
</style>