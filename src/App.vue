<script setup>

import HomeHeader from './components/content/HomeHeader.vue';
import SobreView from './components/views/SobreView.vue';
import PortfolioView from './components/views/PortfolioView.vue';
import ContatoView from './components/views/ContatoView.vue';
import ResumoView from './components/views/ResumoView.vue';
import ObjetivoView from './components/views/ObjetivoView.vue';
import HomeFooter from './components/content/HomeFooter.vue';

</script>

<template>
	<HomeHeader />
	<ResumoView />
	<SobreView />
	<ObjetivoView />
	<PortfolioView />
	<ContatoView />
	<HomeFooter />
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

	html, body {
		overscroll-behavior: none;
		scroll-behavior: smooth;
  		scroll-padding-top: 150px;
		min-height: 100dvh;
		flex: 1;
	}

	@media (max-width: 751px) {
		html, body {
			scroll-padding-top: 80px;
		}
	}

	:root {
		--primary-dark:   #0A2463;
		--primary-medium:   #1E3A8A;
		--primary-light: #3B82F6;
		--accent: #D4AF37;
		--accent-light: #F0E68C;
		--light: #F8FAFC;
		--dark: #1E293B;
		--gray: #64748B;
		--light-gray: #E2E8F0;
	}
	.svg-inline--fa {
		font-size: 2rem;
		width: 2em;
		height: 2em;
	}
	h2 {
		text-align: center;
		font-size: 2rem;
		font-weight: 600;
		
		padding-bottom: 15px;
		position: relative;
		display: inline-block;

		display: flex;
		justify-content: center;

		color: var(--primary-dark);
	}
	h2::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 4px;
		background-color: var(--accent);
	}

	@media (max-width: 330px) {
		h2 {
			font-size: 1.85rem;
		}
	}
</style>
