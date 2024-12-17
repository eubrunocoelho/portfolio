<template>
    <form class="form form_reveal" autocomplete="off" @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Nome</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
                v-model="state.name"
                @blur="v$.name.$touch"
                :disabled="submitStatus === 'OK'"
            />
            <alertMessage>
                <div v-if="v$.name.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.name.$errors[0].$message }}</p>
                </div>
            </alertMessage>
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                v-model="state.email"
                @blur="v$.email.$touch"
                :disabled="submitStatus === 'OK'"
            />
            <alertMessage>
                <div v-if="v$.email.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.email.$errors[0].$message }}</p>
                </div>
            </alertMessage>
        </div>
        <div class="form-group">
            <label for="subject">Assunto</label>
            <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Digite um assunto"
                v-model="state.subject"
                @blur="v$.subject.$touch"
                :disabled="submitStatus === 'OK'"
            />
            <alertMessage>
                <div v-if="v$.subject.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.subject.$errors[0].$message }}</p>
                </div>
            </alertMessage>
        </div>
        <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea
                name="message"
                id="message"
                placeholder="Digite sua mensagem"
                v-model="state.message"
                @blur="v$.message.$touch"
                :disabled="submitStatus === 'OK'"
            ></textarea>
            <alertMessage>
                <div v-if="v$.message.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.message.$errors[0].$message }}</p>
                </div>
            </alertMessage>
        </div>
        <button class="btn btn-primary button_reveal" :disabled="submitStatus === 'OK'">Enviar Mensagem</button>
    </form>
    <successMessage>
        <div class="message" v-if="submitStatus === 'OK'">
            <img src="../../../assets/img/success-icon.svg" class="icon" />
            <p class="text">Mensagem enviada!</p>
        </div>
    </successMessage>
</template>

<script>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength, email, helpers } from '@vuelidate/validators';

import AlertMessage from './AlertMessage.vue';
import SuccessMessage from './SuccessMessage.vue';

export default {
    name: 'ContactForm',
    components: { AlertMessage, SuccessMessage },
    setup() {
        const state = reactive({
            name: '',
            email: '',
            subject: '',
            message: '',
        });

        const rules = {
            name: {
                required: helpers.withMessage('Por favor, insira seu nome.', required),
                minLength: helpers.withMessage(
                    ({ $params }) => `O nome deve ter no mínimo ${$params.min} caracteres.`,
                    minLength(3),
                ),
                maxLength: helpers.withMessage(
                    ({ $params }) => `O nome deve ter no máximo ${$params.max} caracteres.`,
                    maxLength(128),
                ),
            },
            email: {
                required: helpers.withMessage('Por favor, insira seu endereço de e-mail.', required),
                minLength: helpers.withMessage(
                    ({ $params }) => `O endereço de e-mail ter no mínimo ${$params.min} caracteres.`,
                    minLength(12),
                ),
                maxLength: helpers.withMessage(
                    ({ $params }) => `O endereço de e-mail ter no máximo ${$params.max} caracteres.`,
                    maxLength(128),
                ),
                email: helpers.withMessage('O endereço de e-mail está inválido.', email),
            },
            subject: {
                required: helpers.withMessage('Por favor, insira um assunto.', required),
                minLength: helpers.withMessage(
                    ({ $params }) => `O assunto deve ter no mínimo ${$params.min} caracteres.`,
                    minLength(6),
                ),
                maxLength: helpers.withMessage(
                    ({ $params }) => `O assunto deve ter no máximo ${$params.max} caracteres.`,
                    maxLength(255),
                ),
            },
            message: {
                required: helpers.withMessage('Por favor, escreva uma mensagem.', required),
                minLength: helpers.withMessage('A mensagem é muito curta.', minLength(6)),
                maxLength: helpers.withMessage('A mensagem está muito longa.', maxLength(2048)),
            },
        };

        const v$ = useVuelidate(rules, state);

        return { state, v$ };
    },
    data() {
        return {
            submitStatus: null,
        };
    },
    methods: {
        async submitForm() {
            console.log('submit!');

            this.v$.$touch();

            if (!this.v$.$invalid) {
                this.submitStatus = 'PENDING';

                setTimeout(() => {
                    this.submitStatus = 'OK';
                }, 500);
            }
        },
    },
};
</script>
