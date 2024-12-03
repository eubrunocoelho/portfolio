<template>
    <section class="contact">
        <h1 class="section-title title-spacing">Contato<span class="dot">.</span></h1>
        <div class="wrapper">
            <div class="form">
                <form>
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
                    <button class="btn btn-primary">Enviar Mensagem</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VueContact',
};
</script>

<style lang="scss">
@import './contact';
</style>
