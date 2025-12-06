<script setup>
const emit = defineEmits(['click-menu']);

const clickMenu = () => {
    emit('click-menu');
}
</script>

<template>
    <div @click="clickMenu" class="hamburguer">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<style scoped>
    .hamburguer {
        width: 44px;
        height: 38px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;

        .line {
            width: 100%;
            height: 8px;
            border-radius: 2px;
            background-color: aliceblue;
        }
    }
</style>