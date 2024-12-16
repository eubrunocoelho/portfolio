<template>
    <section class="services">
        <div class="waves">
            <img src="../../assets/img/waves.svg" class="object" onload="SVGInject(this)" />
        </div>
        <div class="content">
            <h1 class="main-title main-title--spacing title_reveal">Serviços<span class="dot">/</span></h1>
            <div class="wrapper">
                <ServiceUIDesigner></ServiceUIDesigner>
                <ServiceFrontEndDeveloper></ServiceFrontEndDeveloper>
                <ServiceBackEndDeveloper></ServiceBackEndDeveloper>
            </div>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

import ServiceUIDesigner from './service/UIDesigner.vue';
import ServiceFrontEndDeveloper from './service/FrontEndDeveloper.vue';
import ServiceBackEndDeveloper from './service/BackEndDeveloper.vue';

export default {
    name: 'VueServices',
    components: {
        ServiceUIDesigner,
        ServiceFrontEndDeveloper,
        ServiceBackEndDeveloper,
    },
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [{ selector: '.service_reveal', config: { interval: 400 } }];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './services';
</style>
