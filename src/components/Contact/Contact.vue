<template>
    <section class="contact">
        <h1 class="main-title main-title--spacing">Contato<span class="dot">.</span></h1>
        <div class="wrapper">
            <form class="form" autocomplete="off">
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
            <div class="information">
                <div class="information-box">
                    <div class="icon-box">
                        <font-awesome-icon :icon="['fab', 'whatsapp']" class="icon-box--icon" />
                    </div>
                    <div class="about">
                        <h1 class="title">WhatsApp</h1>
                        <span class="description">(41) 98738-9397</span>
                    </div>
                </div>
                <div class="information-box">
                    <div class="icon-box">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="icon-box--icon" />
                    </div>
                    <div class="about">
                        <h1 class="title">E-mail</h1>
                        <span class="description">eu.brunocoelho94@gmail.com</span>
                    </div>
                </div>
                <div class="information-box">
                    <div class="icon-box">
                        <font-awesome-icon :icon="['fas', 'location-dot']" class="icon-box--icon" />
                    </div>
                    <div class="about">
                        <h1 class="title">Localização</h1>
                        <span class="description">Curitiba, Paraná, Brasil</span>
                    </div>
                </div>
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
