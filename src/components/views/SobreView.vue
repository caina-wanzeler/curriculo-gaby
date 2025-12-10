<script setup>
import { faUniversity, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { computed } from 'vue';

const nascimento = new Date(2005, 4, 23);

const idade = computed(() => {
    const hoje = new Date();
    let anoDiferenca = hoje.getFullYear() - nascimento.getFullYear();
    const mesDiferenca = hoje.getMonth() - nascimento.getMonth();

    if (mesDiferenca < 0 || (mesDiferenca === 0 && hoje.getDate() < nascimento.getDate())) {
        anoDiferenca--;
    } return anoDiferenca;
})
</script>

<template>
    <section>
        <div class="title">
            <h2>Sobre Mim</h2>
        </div>
        <div class="about">
            <h3>Estudante de Direito | Futura Advogada</h3>
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
            <ul>
                <li>
                    <font-awesome-icon :icon="faUniversity" />
                    Centro Universitário Católica do Tocantins (UniCatólica) - 5º período
                </li>
                <li>
                    <font-awesome-icon :icon="faMapMarkerAlt" />
                    Palmas, Tocantins (TO)
                </li>
                <li>
                    <font-awesome-icon :icon="faCalendarAlt" />
                    Idade {{ idade }}
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
    .title {
        padding: 40px 0;
    }
    .about {
        padding: 0 80px;

        display: flex;
        flex-direction: column;
        gap: 30px;

        h3 {
            color: var(--primary-medium);
            font-size: 1.8rem;
            font-weight: 600;
            text-align: center;
        }

        ul {
            list-style-type: none;

            display: grid;
            gap: 25px;
            margin-bottom: 60px;

            li {
                display: flex;
                gap: 20px;
                align-items: center;

                .svg-inline--fa {
                    color: var(--primary-medium);
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
</style>