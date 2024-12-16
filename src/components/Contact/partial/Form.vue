<template>
    <form class="form form_reveal" autocomplete="off">
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" name="name" placeholder="Digite seu nome" />
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" name="email" placeholder="Digite seu e-mail" />
            <div class="alert alert--danger margin--top-20">
                <p>O endereço de e-mail está inválido.</p>
            </div>
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
export default {
    name: 'ContactForm',
};
</script>
