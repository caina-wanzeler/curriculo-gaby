<script setup>

</script>

<template>
    <div class="header">
        <h1>Gaby Lima</h1>
        <ul>
            <li>Inicio</li>
            <li>Serviços</li>
            <li>Portfólio</li>
            <li>Contato</li>
        </ul>
    </div>
</template>



<style scoped>
    .header {
        background-color: var(--bg-primary-1);
        color: var(--font-color);

        height: 70px;
        padding: 0 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-family: 'Imperial Script', 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 3.3rem;
            color: var(--font-primary-2);
        }

        ul {
            list-style-type: none;

            display: flex;
            gap: 25px;
        }
        li {
            font-size: 1.1rem;
            transition: color 0.3s ease;

            position: relative;
            display: inline-block;
        }
        li:hover {
            color: var(--font-primary-2);
            cursor: pointer;
        }
        li::after {
            content: '';
            position: absolute;
            width: 0;
            height: 4px;
            bottom: 0;
            left: 50%;
            background: var(--font-color);
            transition: all 0.5s ease;
            transform: translateX(-50%);
            border-radius: 3px;
        }
        li:hover::after {
            width: 100%;
        }
    }

    :deep(h1) {
        background: linear-gradient(
            135deg,
            var(--font-primary-2),
            var(--font-primary-2) 10%,
            #ffffff 30%,
            var(--font-primary-2) 50%,
            var(--font-primary-2)
        );
        background-size: 200% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: light-sweep 4.0s linear infinite;
    }

    @keyframes light-sweep {
        0% {
            background-position: 100% 0;
        }
        30% {
            background-position: -100% 0;
        }
        100% {
            background-position: -100% 0;
        }
    }
</style>