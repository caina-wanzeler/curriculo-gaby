<script setup>
import { faBalanceScale, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const widthPadrao = 550;

const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
    windowWidth.value = window.innerWidth;
}

onMounted(() => {
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
})

const isMobile = computed(() => {
    return windowWidth.value <= widthPadrao;
})

const menuHamburguer = ref(true);

const clickMenuHamburguer = () => {
    menuHamburguer.value = !menuHamburguer.value;
}

const closeMenuHamburguer = () => {
    menuHamburguer.value = true;
}

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
            <div 
                v-if="isMobile" 
                @click="clickMenuHamburguer"
                class="button-options"
            >
                <font-awesome-icon 
                    v-if="menuHamburguer" 
                    :icon="faBars"
                />
                <font-awesome-icon 
                    v-else 
                    :icon="faTimes"
                />
            </div>
        </div>
        <div 
            v-if="!isMobile || !menuHamburguer"
            class="options"
        >
            <ul>
                <li @click="closeMenuHamburguer()"><a href="#inicio">Início</a></li>
                <li @click="closeMenuHamburguer()"><a href="#sobre">Sobre Mim</a></li>
                <li @click="closeMenuHamburguer()"><a href="#objetivo">Objetivo</a></li>
                <li @click="closeMenuHamburguer()"><a href="#experiencia">Experiência</a></li>
                <li @click="closeMenuHamburguer()"><a href="#contato">Contato</a></li>
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
        width: 45px;
        height: 45px;
    }
    .button-options {
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    h1 {
        font-family: 'Imperial Script', 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 3rem;
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

        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;

        position: relative;

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
                padding: 5px 8px;
                transition: all 0.3s ease-in-out;
                border-radius: 5px;
                font-weight: 500;
            }
            li {
                text-align: center;
                font-size: 0.88rem;
            }
        }

        @media (max-width: 551px) {
            ul {
                gap: 3px;

                a {
                    font-size: 0.8rem;
                }
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
    .header.visible {
        transform: translateY(var(--translate-y, -100%));
    }
    .header.fixed {
        transform: translateY(0);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .header.fixed:not(.visible) {
        transform: translateY(-100%);
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

    @media (max-width: 551px) {
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            gap: 2px;

            transition: all 0.3s ease;
            overflow: hidden;

            a {
                display: inline-block;
                width: fit-content;
                text-align: center;
                width: 100%;
            }
        }
        .options {
            background-color: var(--primary-dark);

            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 1000;

            display: grid;
            box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
        }
        h1 {
            font-size: 2rem;
        }
        .occupation {
            font-size: 0.7rem;
        }
        .svg-inline--fa {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 1.5rem;
        }
        .occupation {
            font-size: 0.5rem;
        }
        .svg-inline--fa {
            width: 26px;
            height: 26px;
        }
        .header {
            display: flex;
            gap: 2px;
        }
    }

    @media (max-width: 320px) {
        h1 {
            font-size: 1.3rem;
        }
        .occupation {
            font-size: 0.3rem;
        }
        .svg-inline--fa {
            width: 20px;
            height: 20px;
        }
    }

</style>