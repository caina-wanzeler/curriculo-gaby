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
        width: 60%;

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