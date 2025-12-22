<script setup>

</script>

<template>
    <section>
        <div class="objective">
            <h2>Objetivo Profissional</h2>
            <p>
                Busco uma oportunidade de estágio em escritório de 
                advocacia onde possa aplicar meus conhecimentos 
                acadêmicos, desenvolver habilidades práticas e 
                contribuir com dedicação e entusiasmo. Tenho especial 
                interesse pelas áreas de Direito Civil, Trabalhista e 
                Empresarial, e estou aberta a aprender novas áreas do Direito.
            </p>
            <p>
                Meu objetivo é crescer profissionalmente, adquirir experiência 
                prática e, futuramente, me tornar uma advogada competente e 
                ética, contribuindo para a justiça e o bem-estar da sociedade.
            </p>
        </div>
    </section>
</template>

<style scoped>
    section {
        background-color: var(--light-gray);
        padding: 60px 0;

        display: flex;
        justify-content: center;
    }
    
    .objective {
        background-color: white;

        width: 70%;
        border-radius: 10px;

        padding: 30px 50px;

        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    @media (max-width: 700px) {
        .objective {
            width: 80%;
        }
    }
    @media (max-width: 600px) {
        .objective {
            width: 85%;
        }
    }
    @media (max-width: 500px) {
        .objective {
            width: 90%;
            padding-left: 40px;
            padding-right: 40px;
        }
        p {
            font-size: 0.95rem;
        }
    }
    @media (max-width: 440px) {
        p {
            font-size: 0.9rem;
        }
    }
    @media (max-width: 380px) {
        .objective {
            width: 90%;
            padding-left: 30px;
            padding-right: 30px;
        }
        p {
            font-size: 0.85rem;
        }
    }
    @media (max-width: 320px) {
        p {
            font-size: 0.75rem;
        }
    }
</style>