<template>
    <section class="presentation">
        <div class="wrapper">
            <hgroup class="title-group title_reveal">
                <h1 class="title">Lorem Ipsum</h1>
                <h2 class="subtitle">Lorem ipsum dolor</h2>
            </hgroup>
            <p class="text presentation_reveal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <button class="btn btn-primary button_reveal">Solicitar Serviço</button>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

export default {
    name: 'VuePresentation',
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
