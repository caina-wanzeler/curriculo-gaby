<script setup>
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <section>
        <h2>Entre em Contato</h2>
        <div class="container">
            <div class='contact-container'>
                <h3 class="informacoes">Informações</h3>
                <p>Preencha o formulário para entrar em contato comigo</p>
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
                            <p>gaby.lima@gmail.com</p>
                        </div>
                    </li>
                    <li>
                        <font-awesome-icon :icon="faLinkedin"/>
                        <div class="contact">
                            <h4>LinkedIn</h4>
                            <p>linkedin.gaby.lima.com</p>
                        </div>
                    </li>
                    <li>
                        <font-awesome-icon :icon="faPhone"/>
                        <div class="contact">
                            <h4>Telefone</h4>
                            <p>(63) 91234-5678</p>
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
                <form action="" method="get">
                    <div class="input-form">
                        <label for="name">Nome Completo</label>
                        <input type="text" name="name">
                    </div>
                    
                    <div class="input-form">
                        <label for="email">E-mail</label>
                        <input type="email" name="email">
                    </div>
                    
                    <div class="input-form">
                        <label for="company">Empresa/Instituição</label>
                        <input type="text" name="company">
                    </div>
                    
                    <div class="input-form">
                        <label for="subject">Assunto</label>
                        <select name="subject" required>
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
                        <textarea type="text" name="name"></textarea>
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
    .contatar {
        padding-left: 10px;
        padding-bottom: 20px;
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;

        padding: 0 40px;
    }
    .contact-container {
        display: grid;
        gap: 12px;
        padding: 20px;
        width: 50%;

        ul {
            list-style-type: none;

            display: grid;
            gap: 20px;
            li {
                display: flex;
                gap: 20px;
                align-items: center;

                background-color: white;
                padding: 15px 25px;
                
                border-radius: 10px;
                box-shadow: 0px 2px 6px rgba(18, 46, 187, 0.1);
                transition: all 0.4s ease;

                &:hover {
                    box-shadow: 0px 4px 6px rgba(18, 46, 187, 0.4);
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
        }
    }

    .contact-form {
        width: 50%;
        padding: 20px;

        display: flex;
        flex-direction: column;
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
    
</style>