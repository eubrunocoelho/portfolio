<template>
    <form class="form form_reveal" autocomplete="off">
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" name="name" placeholder="Digite seu nome" />
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
</template>

<script>
export default {
    name: 'ContactForm',
};
</script>
