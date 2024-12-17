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
            ></textarea>
            <alertMessage>
                <div v-if="v$.message.$error" class="alert alert-danger margin--top-20">
                    <p>{{ v$.message.$errors[0].$message }}</p>
                </div>
            </alertMessage>
        </div>
        <button class="btn btn-primary button_reveal">Enviar Mensagem</button>
    </form>
    <div class="message">
        <img src="../../../assets/img/success-icon.svg" class="icon" />
        <p class="text">Mensagem enviada!</p>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

import AlertMessage from './AlertMessage.vue';

export default {
    name: 'ContactForm',
    components: { AlertMessage },
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
            },
            email: {
                required: helpers.withMessage('Por favor, insira seu endereço de e-mail.', required),
            },
            subject: {
                required: helpers.withMessage('Por favor, insira um assunto.', required),
            },
            message: {
                required: helpers.withMessage('Por favor, escreva uma mensagem.', required),
            },
        };

        const v$ = useVuelidate(rules, state);

        return { state, v$ };
    },
    methods: {
        async submitForm() {
            // const isFormCorrect = await this.v$.$validate();
            // LOGIC HERE !! Ò.Ó
        },
    },
};
</script>
