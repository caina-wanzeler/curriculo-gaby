<script setup>
import Experience from '../util/Experience.vue';

const empregos = {
    emprego3: {
        index: 3,
        title: "Tribunal Regional do Trabalho",
        activities: [
            'Impressão de mandados judiciais',
            'Auxilio nas atividades administrativas dos oficiais de justiça',
            'Solicitacão de férias e diárias e ealatório de viagens'
        ],
        time: '2025 - 2025 (atual)'
    },
    emprego2: {
        index: 2,
        title: "Procon Estadual",
        activities: [
            'Elaboração inicial de processos administrativos',
            'Atendimento ao consumidor presencial e online',
            'Tentativa de conciliação inicial via telefone'
        ],
        time: '2024 - 2025'
    },
    emprego1: {
        index: 1,
        title: "Escritório de Advocacia",
        activities: [
            'Elaboração de petição inicial', 
            'Ciência de despacho',
            'Criação de contestação e alegações finais'
        ],
        time: '2024 - 2024'
    },
}
</script>

<template>
    <section>
        <h2>Experiência</h2>
        <div class="activities">
            <Experience
                class="experience"
                v-for="emprego in empregos" 
                v-bind:key="emprego.index"
                v-bind:title="emprego.title"
                v-bind:activities="emprego.activities"
                v-bind:time="emprego.time"
            />
        </div>
    </section>
    
</template>

<style scoped>
    section {
        padding: 40px;

        display: grid;
        gap: 20px;
    }
    .activities {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        margin: 20px;
    }
</style>