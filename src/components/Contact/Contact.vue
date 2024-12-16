<template>
    <section class="contact">
        <h1 class="main-title main-title--spacing title_reveal">Contato<span class="dot">.</span></h1>
        <div class="wrapper">
            <ContactForm></ContactForm>
            <ContactInformation></ContactInformation>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

import ContactForm from './partials/Form.vue';
import ContactInformation from './partials/Information.vue';

export default {
    name: 'VueContact',
    components: {
        ContactForm,
        ContactInformation,
    },
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [
            { selector: '.form_reveal', config: { delay: 400 } },
            { selector: '.information_reveal', config: { interval: 150 } },
        ];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './contact';
</style>
