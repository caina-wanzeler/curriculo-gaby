<script setup>

</script>

<template>
    <h2>Sobre mim</h2>
    <div class="about">
        <p>
            Meu nome é Maria Gabrielly, tenho 20 anos e sou 
            apaixonada pela dança, pela leitura e pela escrita. 
            Minha relação com o Direito começou no final de 2023, 
            período marcado por incertezas sobre qual caminho 
            seguir após o ensino médio que, inclusive, não tinha 
            qualquer ligação com a área jurídica. A oportunidade 
            de prestar um concurso mudou esse cenário: mergulhei 
            nos estudos, dediquei-me intensamente e, pouco a 
            pouco, desenvolvi verdadeiro apreço pelo conteúdo e 
            pelo universo jurídico.
        </p>
        <p>
            No segundo período da graduação, iniciei meu primeiro 
            estágio em um escritório de advocacia. A vivência 
            foi essencial para meu crescimento, oferecendo 
            aprendizados práticos e contato direto com a rotina 
            jurídica. Apesar dos desafios e conflitos que 
            dificultaram a permanência, a experiência foi 
            determinante para meu amadurecimento e entendimento 
            da profissão. Em seguida, surgiu a oportunidade de 
            estagiar no Procon, onde permaneci por um ano. Foi 
            um período de intenso atendimento ao público, 
            construção de amizades e conquistas que guardo com 
            carinho, além de amplo reconhecimento por parte dos 
            consumidores e um despertar profundo para o Direito 
            do Consumidor.
        </p>
        <p>
            Atualmente, estagio no Tribunal Regional do Trabalho, 
            em um ambiente acolhedor e colaborativo, ainda em 
            fase de adaptação e aprendizado. Tenho consciência 
            de que minha trajetória está apenas no início, e é 
            justamente por isso que não deixo de estudar, buscar 
            aperfeiçoamento e me abrir a novas oportunidades. 
            Sinto, com segurança e humildade, que me tornarei uma profissional comprometida, técnica e dedicada a cada demanda, atendendo com respeito, responsabilidade e verdadeira vocação pelo Direito.
        </p>
    </div>
</template>

<style scoped>
    p {
        width: 100%;
    }
    h2 {
        padding-bottom: 15px;
    }

    .about {
        width: 60%;

        padding: 20px;
        margin-bottom: 10px;

        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-self: center;

        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 15px;
    }

    @media (max-width: 600px) {
        .about {
            width: 80%;
        }
    }

    @media (max-width: 500px) {
        .about {
            width: 90%;
        }
    }
</style>