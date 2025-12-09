<script setup>

const props = defineProps({
    title: String,
    activities: Array,
    time: String
})

</script>

<template>
    <div class="content">
        <h3>{{ props.title }}</h3>
        <ul>
            <li v-for="(value, key) in props.activities"
                v-bind:key="key"
            >{{ value }}</li>
        </ul>
        <p>Tempo: {{ props.time }}</p>
    </div>
    
</template>

<style scoped>
    h3 {
        font-size: 1.4rem;
    }
    .content {
        width: 60%;
        height: 230px;

        padding: 20px 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;

        border-radius: 15px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

        transition: background-color 0.2s ease-in-out;
    }
    .content:hover {
        background-color: rgb(234, 234, 234);
    }
    ul {
        list-style-type: none;
    }

    @media (max-width: 600px) {
        .content {
            width: 80%;
        }
    }

    @media (max-width: 500px) {
        .content {
            width: 90%;
        }
    }
</style>