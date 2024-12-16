<template>
    <div class="information">
        <div class="information-box information_reveal">
            <div class="icon-box">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="icon-box--icon" />
            </div>
            <div class="about">
                <h1 class="title">WhatsApp</h1>
                <span class="description">(41) 98738-9397</span>
            </div>
        </div>
        <div class="information-box information_reveal">
            <div class="icon-box">
                <font-awesome-icon :icon="['fas', 'envelope']" class="icon-box--icon" />
            </div>
            <div class="about">
                <h1 class="title">E-mail</h1>
                <span class="description">eu.brunocoelho94@gmail.com</span>
            </div>
        </div>
        <div class="information-box information_reveal">
            <div class="icon-box">
                <font-awesome-icon :icon="['fas', 'location-dot']" class="icon-box--icon" />
            </div>
            <div class="about">
                <h1 class="title">Localização</h1>
                <span class="description">Curitiba, Paraná, Brasil</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactInformation.vue',
};
</script>
