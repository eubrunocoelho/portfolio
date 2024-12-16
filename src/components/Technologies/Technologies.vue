<template>
    <section class="technologies">
        <h1 class="main-title main-title--spacing title_reveal">Tecnologias<span class="dot">.</span></h1>
        <div class="wrapper">
            <TechnologyFrontEnd></TechnologyFrontEnd>
            <TechnologyBackEnd></TechnologyBackEnd>
            <TechnologyFrameworks></TechnologyFrameworks>
            <TechnologyDatabase></TechnologyDatabase>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

import TechnologyFrontEnd from './technology/FrontEnd.vue';
import TechnologyBackEnd from './technology/BackEnd.vue';
import TechnologyFrameworks from './technology/Frameworks.vue';
import TechnologyDatabase from './technology/DataBase.vue';

export default {
    name: 'VueTechnologies',
    components: {
        TechnologyFrontEnd,
        TechnologyBackEnd,
        TechnologyFrameworks,
        TechnologyDatabase,
    },
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [
            { selector: '.technology_reveal', config: { interval: 400 } },
            { selector: '.technology_title_reveal', config: { delay: 400, distance: '60px', origin: 'left' } },
            { selector: '.technology_languages_reveal', config: { delay: 450 } },
        ];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './technologies';
</style>
