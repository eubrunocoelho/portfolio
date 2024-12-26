<template>
    <section class="presentation" id="presentationRef">
        <div class="wrapper">
            <hgroup class="title-group title_reveal">
                <h1 class="title">Bruno Coelho</h1>
                <h2 class="subtitle">UI Designer & Full-Stack Developer</h2>
            </hgroup>
            <p class="text presentation_reveal">
                Freelancer buscando criar experiências digitais. Combinando tecnologia, criatividade e design desenvolvo
                soluções web que colocam o usuário em primeiro lugar.
            </p>
            <button class="btn btn-primary button_reveal" @click="scrollToId('contactRef', 60)">
                Solicitar Serviço
            </button>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

export default {
    name: 'MyPresentation',
    props: {
        scrollToId: {
            type: Function,
            required: true,
        },
    },
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [
            { selector: '.presentation_reveal', config: { delay: 250, distance: '60px', origin: 'left' } },
        ];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './presentation';
</style>
