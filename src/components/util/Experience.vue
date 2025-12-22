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
        <p>{{ props.time }}</p>
        <ul>
            <li v-for="(value, key) in props.activities"
                v-bind:key="key"
            >{{ value }}</li>
        </ul>
    </div>
    
</template>

<style scoped>
    .content {
        padding: 20px 30px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;

        border-radius: 15px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);

        transition: all 0.3s ease;

        h3 {
            font-weight: 700;
            color: var(--primary-medium);
        }

        p {
            color: var(--primary-light);
        }
    }
    .content:hover {
        transform: translateY(-3px);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    }
    ul {
        list-style-type: none;

        display: grid;
        gap: 10px;
    }

    @media (max-width: 750px) {
        .content {
            width: 70%;
        }
    }

    @media (max-width: 650px) {
        .content {
            width: 80%;
        }
    }

    @media (max-width: 550px) {
        .content {
            width: 90%;
        }
    }

    @media (max-width: 480px) {
        h3 {
            font-size: 1.1rem;
        }
        li {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 400px) {
        h3 {
            font-size: 1rem;
        }
        li {
            font-size: 0.8rem;
        }
        p {
            font-size: 0.9rem;
        }
    }
</style>