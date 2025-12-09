<script setup>
import { ref } from 'vue';
import HomeBurguer from './components/content/HomeBurguer.vue';
import HomeHeader from './components/content/HomeHeader.vue';

const menuState = ref(false);

const openMenu = () => {
	menuState.value = !menuState.value;
}

</script>

<template>
	<div>
		<HomeHeader @open-menu="openMenu"/>
		<RouterView />
	</div>
	<HomeBurguer v-model:visible="menuState"/>
	
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Imperial+Script&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tangerine:wght@400;700&display=swap");

	* {
		margin: 0;
		padding: 0;
		box-shadow: none;
		box-sizing: border-box;
		
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
	}

	:root {
		--bg-primary-1:   #293884;
		--bg-primary-2:   #555555;
		--font-color:     rgb(196, 220, 245);
		--font-primary-1: #568280;
		--font-primary-2: #c59630;
	}

	h2 {
        text-align: center;

        padding-top: 14px;

        font-size: 2rem;
    }
</style>
