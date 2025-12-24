<script setup>
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

const form = ref({
    nome: '',
    email: '',
    empresa: '',
    assunto: '',
    mensagem: ''
})

const isLoading = ref(false)
const message = ref(null)

const submitForm = async () => {
    if (!form.value.nome || !form.value.email || !form.value.assunto || !form.value.mensagem) {
        message.value = {
            type: 'error',
            text: 'Por favor, preencha todos os campos obrigatórios.'
        } 
        return
    }

    isLoading.value = true
    message.value = null

    try {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzAM9qJm2SooJPTi-tGqrAuLSAxOOlcSXnnxorzqHiCsbbDiVBC-gc2TuaIFdxky1f7/exec'

        const response = await fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form.value)
        })

        form.value = {
            nome: '', 
            email: '', 
            empresa: '', 
            assunto: '', 
            mensagem: '' 
        }

        message.value = {
            type: 'success',
            text: '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.'
        }
    } catch (error) {
        console.error("Erro: ", error)
        message.value = {
            type: 'error',
            text: '❌ Ocorreu um erro ao enviar. Você pode tentar novamente ou me contatar diretamente por email.'
        }
    } finally {
        isLoading.value = false

        if (message.value?.type === 'success') {
            setTimeout(() => {
                message.value = null
            }, 500)
        }
    }
}
</script>

<template>
    <section>
        <h2>Entre em Contato</h2>
        <div class="container">
            <div class='contact-container'>
                <h3 class="informacoes">Informações</h3>
                <ul>
                    <li>
                        <font-awesome-icon :icon="faMapMarkerAlt" />
                        <div class="contact">
                            <h4>Endereço</h4>
                            <p>Palmas - TO, Taquaralto</p>
                        </div>
                    </li>
                    <li>
                        <font-awesome-icon :icon="faEnvelope"/>
                        <div class="contact">
                            <h4>E-mail</h4>
                            <p>gabriellyinstitucional@gmail.com</p>
                        </div>
                    </li>
                    <li>
                        <font-awesome-icon :icon="faPhone"/>
                        <div class="contact">
                            <h4>Telefone</h4>
                            <p>(63) 99916-6693</p>
                        </div>
                    </li>
                    <li>
                        <font-awesome-icon :icon="faLinkedin"/>
                        <div class="contact">
                            <h4>LinkedIn</h4>
                            <p>Linkedin <a href="#">aqui</a></p>
                        </div>
                    </li>
                    <li>
                        <font-awesome-icon :icon="faFilePdf"/>
                        <div class="contact">
                            <h4>Currículo</h4>
                            <p>Link do currículo em pdf <a href="#">aqui</a></p>
                        </div>
                    </li>
                </ul> 
            </div>
            <div class='contact-form'>
                <h3 class="contatar">Contatar</h3>
                <p class="contatar-text">Preencha o formulário para entrar em contato comigo</p>
                <form @submit.prevent="submitForm" netlify>
                    <div class="input-form">
                        <label for="name">Nome Completo</label>
                        <input
                            v-model="form.nome"
                            type="text" 
                            name="name"
                            required
                        >
                    </div>
                    
                    <div class="input-form">
                        <label for="email">E-mail</label>
                        <input 
                            v-model="form.email"
                            type="email" 
                            name="email"
                            required
                        >
                    </div>
                    
                    <div class="input-form">
                        <label for="company">Empresa/Instituição</label>
                        <input
                            v-model="form.empresa"
                            type="text"
                            name="company"
                            required
                        >
                    </div>
                    
                    <div class="input-form">
                        <label for="subject">Assunto</label>
                        <select 
                            v-model="form.assunto"
                            name="subject"
                            required
                        >
                            <option value>Selecione...</option>
                            <option value="estagio">Proposta de Estágio</option>
                            <option value="emprego">Proposta de Emprego</option>
                            <option value="entrevista">Agendar Entrevista</option>
                            <option value="informacoes">Mais Informações</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    
                    <div class="input-form">
                        <label for="message">Mensagem</label>
                        <textarea
                            v-model="form.mensagem"
                            type="text" 
                            name="name"
                            required
                        ></textarea>
                    </div>

                    <div class="input-form">
                        <button class='button-submit' type="submit">Enviar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </section>
    
</template>

<style scoped>
    section {
        background-color: var(--light-gray);

        display: grid;
        gap: 40px;

        padding: 40px 0;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        
    }
    .contatar-text {
        font-size: 0.85rem;
        color: var(--gray);
    }
    @media (max-width: 330px) {
        h3 {
            font-size: 1.3rem;
        }
        .contatar-text {
            font-size: 0.7rem;
        }
    }
    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;

        padding: 0 40px;
    }
    .contact-container {
        background-color: white;
        border-radius: 10px;
        height: 100%;
        display: grid;
        gap: 12px;
        padding: 20px;

        ul {
            list-style-type: none;

            display: grid;
            gap: 35px;
            li {
                width: 100%;
                display: flex;
                gap: 20px;
                align-items: center;

                background-color: white;
                padding: 15px 25px;
                
                border-radius: 10px;
                box-shadow: 0px 2px 6px rgba(18, 46, 187, 0.1);
                transition: all 0.4s ease;

                &:hover {
                    box-shadow: 0px 3px 8px rgba(18, 46, 187, 0.4);
                }

                .svg-inline--fa {
                    color: var(--primary-medium);
                    width: 24px;
                    height: 24px;

                    background-color: rgba(169, 181, 239, 0.5);
                    border-radius: 50%;
                    padding: 8px;
                }

                h4 {
                    color: var(--primary-medium);
                    font-weight: 600;
                }
                p {
                    font-size: 0.95rem;
                }
            }

            @media (max-width: 380px) {
                li {
                    display: flex;
                    gap: 15px;
                    padding: 15px 10px;
                    p {
                        font-size: 0.8rem;
                    }
                    
                }
            }

            @media (max-width: 310px) {
                li {
                    display: flex;
                    gap: 12px;
                    padding: 15px 10px;
                    p {
                        font-size: 0.7rem;
                    }
                    
                }
            }
        }
    }

    .contact-form {
        width: 50%;
        padding: 20px;

        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;

        background-color: white;
        border-radius: 10px;

        form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;

            .input-form {
                display: grid;
                gap: 5px;
                &:nth-child(3) {
                    grid-column: 1 /3;
                }

                &:nth-child(4) {
                    grid-column: 1 /3;
                }

                &:nth-child(5) {
                    grid-column: 1 /3;
                }
                &:nth-child(6) {
                    grid-column: 1 / 3;
                    margin-top: 10px;
                    width: 60%;
                    display: flex;
                    flex-direction: column;
                    justify-self: center;
                }
            }

            input, 
            select, 
            textarea,
            button {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                background-color: white;
                padding: 15px 25px;
                
                border-radius: 10px;
                border: 1px solid rgba(39, 67, 206, 0.1);
                box-shadow: 0px 2px 6px rgba(18, 46, 187, 0.1);
                transition: all 0.4s ease;

                resize: none;
                outline: none;

                &:focus {
                    outline: 1px solid rgba(39, 67, 206, 0.7);
                    
                }
                &:hover {
                    border: 1px solid rgba(39, 67, 206, 0.4);
                    box-shadow: 0px 2px 6px rgba(18, 46, 187, 0.4);
                }
            }
            @media (max-width: 380px) {
                label {
                    font-size: 0.9rem;
                }

                input, 
                select, 
                textarea,
                button {
                    padding: 10px 12px;
                    font-size: 0.7rem;
                }
            }
            @media (max-width: 310px) {
                label {
                    font-size: 0.7rem;
                }

                input, 
                select, 
                textarea,
                button {
                    padding: 8px 10px;
                    font-size: 0.6rem;
                }
            }
            .button-submit {
                text-align: center;
                background-color: var(--primary-dark);
                color: var(--light-gray);

                &:hover {
                    background-color: var(--primary-medium);
                    box-shadow: 0px 4px 8px rgba(18, 46, 187, 0.3);
                    transform: translateY(-3px);
                }
            }
            option {
                background-color: var(--light-gray);
                color: var(--primary-dark);
            }
        }
    }
    
    @media (max-width: 860px) {
        .container {
            flex-direction: column;
            padding: 0 0;
            
            .contact-container,
            .contact-form {
                width: 100%;
            }
        }
    }
    
</style>