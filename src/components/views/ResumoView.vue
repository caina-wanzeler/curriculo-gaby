<script setup>

</script>

<template>
    <section id="inicio">
        <div class="summary">
            <div class="objective">
                <p>Buscando oportunidade de estágio em Direito</p>
            </div>
            <div class="summary-content">
                <h1>Gaby Lima</h1>
                <p>
                    Estudante de Direito no 4º período 
                    <span>com paixão pela área jurídica</span> 
                    e busca por primeira experiência profissional 
                    em escritório de advocacia.
                </p>
            </div>
            <div class="buttons">
                <a href="#contato">
                    <button class="contact">Entre em Contato</button>
                </a>
                <a href="#experiencia">
                    <button class="experience">Ver Experiência</button>
                </a>
                
            </div>
        </div>
    </section>
</template>

<style scoped>
    a {
        color: inherit;
    }
    section {
        background: linear-gradient(
            135deg, 
            rgba(27, 57, 126, 0.9), 
            rgba(15, 42, 106, 0.8)), 
            url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
        background-size: cover;
        background-position: center;
        color: white;
        padding: 80px 0;
        text-align: center;
    }
    @media (max-width: 520px) {
        section {
            padding: 60px 0;
        }
    }
    @media (max-width: 480px) {
        section {
            padding: 40px 0;
        }
    }
    @media (max-width: 350px) {
        section {
            padding: 30px 0;
        }
    }
    .summary {
        display: grid;
        gap: 50px;

        .objective {
            background-color: rgba(176, 187, 234, 0.3);
            border-radius: 15px;

            display: flex;
            text-align: center;
            justify-self: center;
            
            padding: 8px 12px;
            border: 1px solid rgba(255, 255, 255, 0.3);

            font-size: 1.2rem;
        }

        @media (max-width: 480px) {
            .objective {
                width: 90%;
            }
        }

        .summary-content {
            display: flex;
            flex-direction: column;
            gap: 20px;

            padding: 0 50px;

            h1 {
                font-family: "Imperial Script", "Poppins", sans-serif;
                font-size: 4.2rem;
                font-weight: 500;
            }

            @media (max-width: 380px) {
                h1 {
                    font-size: 3.5rem;
                }
            }
            @media (max-width: 300px) {
                h1 {
                    font-size: 3rem;
                }
            }
            @media (max-width: 280px) {
                h1 {
                    font-size: 2.8rem;
                }
            }

            span {
                color: var(--accent);
            }
        }

        .buttons {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;

            .contact {
                width: 15rem;
                background-color: var(--accent);
                border: none;

                transition: all 0.4s ease-in-out;
            }
            .contact:hover {
                background-color: rgb(81, 54, 214);
                transform: translateY(-3px);
            }

            .experience {
                width: 13rem;
                background-color:  rgba(0, 0, 0, 0);
                border: 2px solid white;

                transition: all 0.4s ease-in-out;
            }
            .experience:hover {
                background-color: white;
                color: rgb(81, 54, 214);
                transform: translateY(-3px);
            }

            @media (max-width: 350px) {
                .contact {
                    width: 13rem;
                }
                .experience {
                    width: 11rem;
                }
                button {
                    font-size: 0.9rem;
                }
            }
        }
    }
    @media (max-width: 400px) {
        .summary {
            display: grid;
            gap: 30px;
        }
    }
    button {
        padding: 20px;
        font-size: 1.2rem;
        font-weight: 700;
        border-radius: 6px;
        color: var(--font-color);
    }
</style>