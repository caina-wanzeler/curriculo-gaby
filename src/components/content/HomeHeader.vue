<script setup>
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <div class="header">
        <div class="header-title">
            <font-awesome-icon
                :icon="faBalanceScale"
            />
            <h1>Gaby Lima</h1>
            <div class="occupation">
                <p>Estagiária de Direito</p>
            </div>
        </div>
        <div class="options">
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre Mim</a></li>
                <li><a href="#">Objetivo</a></li>
                <li><a href="#">Formação</a></li>
                <li><a href="#">Experiência</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </div>
    </div>
</template>



<style scoped>
    a {
        text-decoration: none;
        color: var(--light-gray);
        transition: color 0.3s ease;
        cursor: pointer;
        position: relative;
    }
    .svg-inline--fa {
        color: var(--light-gray);
    }
    h1 {
        font-family: 'Imperial Script', 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 4rem;
        color: var(--accent);
    }
    .occupation {
        background-color: var(--primary-medium);

        border-radius: 20px;
        padding: 8px 12px;

        p {
            color: white;
        }
    }
    .header {
        background-color: var(--primary-dark);
        padding: 8px 0;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 0 100vmax var(--primary-dark);
        clip-path: inset(-100vmax -100vmax 0 -100vmax);
        isolation: isolate;

        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;

        position: sticky;
        top: 0;
        z-index: 1000;

        .header-title {
            display: flex;
            gap: 20px;
            align-items: center;
            justify-content: center;
        }

        ul {
            list-style-type: none;

            display: flex;
            gap: 25px;

            a {
                font-size: 1.1rem;
                padding: 5px 8px;
                transition: all 0.3s ease-in-out;
                border-radius: 5px;
                font-weight: 500;
            }
        }

        p {
            color: var(--light-gray);
        }

        a:hover {
            color: var(--accent);
            background-color: var(--primary-medium);
        }
        a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 4px;
            bottom: 0;
            left: 50%;
            background: var(--light-gray);
            transition: all 0.3s ease;
            transform: translateX(-50%);
            border-radius: 3px;
        }
        a:hover::after {
            width: 100%;
        }
    }

    :deep(h1) {
        background: linear-gradient(
            135deg,
            var(--accent),
            var(--accent) 10%,
            #ffffff 30%,
            var(--accent) 50%,
            var(--accent)
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