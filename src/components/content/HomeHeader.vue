<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const windowWidth = ref(window.innerWidth);
const widthMobile = 600;

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
        <h1>Gaby Lima</h1>
        <div class="menu">
            <nav v-if="isDesktop()" class="menu-desktop">
                <RouterLink to="/">Inicio</RouterLink>
                <RouterLink to="/portfolio">Portfólio</RouterLink>
                <RouterLink to="/contato">Contato</RouterLink>
                <RouterLink to="/sobre">Sobre</RouterLink>
            </nav>

            <div v-else @click="openMenu" class="hamburguer">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        
    </div>
</template>



<style scoped>
    a {
        text-decoration: none;
        color: var(--font-color);
        transition: color 0.3s ease;
    }
    .hamburguer {
        width: 33px;
        height: 26px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;

        .line {
            width: 100%;
            height: 5px;
            border-radius: 2px;
            background-color: aliceblue;
        }
    }
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

        .menu-desktop {
            display: flex;
            gap: 25px;
        }
        a:hover {
            color: var(--font-primary-2);
            cursor: pointer;
        }
        a::after {
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