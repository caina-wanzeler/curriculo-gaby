<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Navigation from '../util/Navigation.vue';

const windowWidth = ref(window.innerWidth);
const widthMobile = 700;

const onResize = () => {
    windowWidth.value = window.innerWidth;
}

onMounted(() => {
    window.addEventListener('resize', onResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', onResize);
});


const isDesktop = () => windowWidth.value > widthMobile;

const emit = defineEmits(['open-menu']);

const openMenu = () => {
    emit('open-menu');
}
</script>

<template>
    <div class="header">
        <div class="hero">
            <Navigation class="navigation" v-if="!isDesktop()" @click-menu="openMenu"/>
            <div class="worker">
                <h1>Gaby Lima</h1>
                <p>Graduando em Direito</p>
            </div>
            <nav v-if="isDesktop()" class="menu-desktop">
                <RouterLink to="/curriculo-gaby/">Inicio</RouterLink>
                <RouterLink to="/curriculo-gaby/portfolio">Portfólio</RouterLink>
                <RouterLink to="/curriculo-gaby/contato">Contato</RouterLink>
                <RouterLink to="/curriculo-gaby/sobre">Sobre</RouterLink>
            </nav>
            <img src="../../images/hero.png" alt="Gaby Lima Foto">
        </div>
    </div>
</template>



<style scoped>
    a {
        text-decoration: none;
        color: var(--font-color);
        transition: color 0.3s ease;
        cursor: pointer;
        position: relative;
    }
    .hero {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 95%;

        img {
            width: 90px;
            height: auto;
            border-radius: 100%;
        }

        .navigation {
            display: flex;
            align-self: center;
        }
    }
    .header {
        background-color: var(--bg-primary-1);
        color: var(--font-color);

        height: auto;
        padding: 0 15px;

        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-family: 'Imperial Script', 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 3.3rem;
            color: var(--font-primary-2);
        }

        .menu-desktop {
            display: flex;
            align-self: center;
            gap: 25px;
        }
        a:hover {
            color: var(--font-primary-2);
        }
        a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: 0;
            left: 50%;
            background: var(--font-color);
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