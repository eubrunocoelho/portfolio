<template>
    <form class="form form_reveal" autocomplete="off" @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" name="name" placeholder="Digite seu nome" v-model="state.name" @blur="v$.name.$touch" />
            <div v-if="v$.name.$error" class="alert alert--danger margin--top-20">
                <p>{{ v$.name.$errors[0].$message }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" name="email" placeholder="Digite seu e-mail" />
        </div>
        <div class="form-group">
            <label for="subject">Assunto</label>
            <input type="text" name="subject" placeholder="Digite um assunto" />
        </div>
        <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea name="message" placeholder="Digite sua mensagem"></textarea>
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
import { required } from '@vuelidate/validators';

export default {
    name: 'ContactForm',
    setup() {
        const state = reactive({
            name: '',
        });

        const rules = {
            name: { required },
        };

        const v$ = useVuelidate(rules, state);

        return { state, v$ };
    },
    methods: {
        async submitForm() {
            const isFormCorrect = await this.v$.$validate();

            if (isFormCorrect) {
                console.log('SEND');
            } else {
                console.log('NOT SEND');
            }
        },
    },
};
</script>
