<script setup>

</script>

<template>
    <footer>
        <p>© 2025 Gaby Lima. Todos os direitos reservados.</p>
    </footer>
</template>

<style scoped>
    footer {
        background-color: var(--primary-dark);
        color: var(--light-gray);

        align-items: center;
        padding: 30px;
    }
    p {
        text-align: center;
        font-weight: 400;
        opacity: 0.9;
    }

    @media (max-width: 450px) {
        footer {
            padding: 20px;
        }
        p {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 370px) {
        footer {
            padding: 15px;
        }
        p {
            font-size: 0.7rem;
        }
    }

    @media (max-width: 450px) {
        footer {
            padding: 13px;
        }
        p {
            font-size: 0.6rem;
        }
    }
</style>