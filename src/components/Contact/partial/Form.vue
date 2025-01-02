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
            <ErrorMessage>
                <div v-if="v$.name.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.name.$errors[0].$message }}</p>
                </div>
            </ErrorMessage>
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
            <ErrorMessage>
                <div v-if="v$.email.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.email.$errors[0].$message }}</p>
                </div>
            </ErrorMessage>
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
            <ErrorMessage>
                <div v-if="v$.subject.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.subject.$errors[0].$message }}</p>
                </div>
            </ErrorMessage>
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
            <ErrorMessage>
                <div v-if="v$.message.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.message.$errors[0].$message }}</p>
                </div>
            </ErrorMessage>
        </div>
        <button class="btn btn-primary button_reveal" :disabled="submitStatus === 'OK'">Enviar Mensagem</button>
    </form>
    <ResponseLoading v-if="submitStatus === 'PENDING'"></ResponseLoading>
    <ResponseMessage :submitStatus="submitStatus"></ResponseMessage>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { reactive } from 'vue';
import { required, minLength, maxLength, email, helpers } from '@vuelidate/validators';

import ResponseLoading from './loading/Loading.vue';
import ErrorMessage from './messages/ErrorMessage.vue';
import ResponseMessage from './messages/ResponseMessage.vue';
import { sendMessage } from '../../../services/emailAPI.js';

export default {
    name: 'ContactForm',
    components: { ResponseLoading, ErrorMessage, ResponseMessage },
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
                required: helpers.withMessage('Por favor, insira seu e-mail.', required),
                maxLength: helpers.withMessage(
                    ({ $params }) => `O e-mail ter no máximo ${$params.max} caracteres.`,
                    maxLength(128),
                ),
                email: helpers.withMessage('O e-mail está inválido.', email),
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
        return { submitStatus: null };
    },
    methods: {
        async submitForm() {
            this.v$.$touch();

            if (!this.v$.$invalid) {
                this.submitStatus = 'PENDING';

                const sendResponse = await sendMessage({ ...this.state });

                const sendStatus = sendResponse.statusCode !== 200 ? 'ERR' : 'OK';

                this.submitStatus = sendStatus;
            }
        },
    },
};
</script>
