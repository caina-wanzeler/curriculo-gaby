<script setup>

</script>

<template>
    <footer>
        <div class="content-footer">
            <h1>
                Gaby Lima
            </h1>
            <div class="sobre-resumo">
                <p>Estudante de Direito | Futura Advogada</p>
                <p>Em busca de oportunidade de estágio</p>
            </div>
        </div>
        <div class="interesses">
            <p><strong>Áreas de interesse:</strong></p>
            <ul>
                <li>Direito Tributário</li>
                <li>Direito do Trabalho</li>
                <li>Direito Empresarial</li>
            </ul>
        </div>
        <hr>
        <div class="final">
            <p>© 2025 Gaby Lima - Estagiária de Direito. Todos os direitos reservados.</p>
            <p>Previsão de formatura: Dezembro/2027</p>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background-color: var(--primary-dark);
        color: var(--light-gray);
        padding: 30px 50px;

        display: grid;
        gap: 15px;
    }

    p {
        font-weight: 400;
    }

    h1 {
        font-size: 2.5rem;
        padding-bottom: 20px;
        color: var(--accent);
    }
    .content-footer {
        display: flex;
        justify-content: space-between;
    }
    .interesses {
        display: grid;
        gap: 15px;

        ul {
            list-style-type: none;
            display: flex;
            gap: 30px;
        }
    }
    .sobre-resumo {
        color: var(--accent-light);
    }
    .final {
        text-align: center;
        color: var(--light-gray);
        opacity: 0.9;
    }
</style>