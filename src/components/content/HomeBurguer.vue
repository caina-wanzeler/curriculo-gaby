<script setup>

const props = defineProps({
    visible: Boolean
})

const emit = defineEmits(['update:visible']);

const closeMenu = () => {
    emit('update:visible', false);
}

</script>

<template>
    <div>
        <div class="panel-wrap" :class="{ visible: props.visible }">
            <div class="menu-mobile">
                <div class="menu-header">
                    <button @click="closeMenu()">
                        Fechar
                    </button>
                    <h2>Menu</h2>
                </div>
                
                <nav>
                    <RouterLink to="/">Inicio</RouterLink>
                    <RouterLink to="/portfolio">Portfólio</RouterLink>
                    <RouterLink to="/contato">Contato</RouterLink>
                    <RouterLink to="/sobre">Sobre</RouterLink>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .menu-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        height: 30px;
        width: 100%;

        padding: 0px 12px;
        margin: 10px 0;

        h2 {
            margin-right: 5px;
            
        }
        button {
            width: 60px;
            height: 100%;

            border-radius: 4px;
        }
    }
    a {
        text-decoration: none;
        color: var(--font-color);
        transition: color 0.3s ease;
    }
    .panel-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgb(82, 69, 180);
        width: 11rem;
        transform: translateX(100%);
        transition: 0.23s ease-out;
        z-index: 1;
    }
    .visible {
        transform: translateX(0);
    }
    .menu-mobile {
        display: flex;
        flex-direction: column;

        nav {
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
        }
    }
</style>