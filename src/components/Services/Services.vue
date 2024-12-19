<template>
    <Teleport to="#app">
        <VueWindow v-model:viewWindow="viewWindow"></VueWindow>
    </Teleport>
    <section class="services">
        <div class="waves">
            <img src="../../assets/img/waves.svg" class="object" onload="SVGInject(this)" />
        </div>
        <div class="content">
            <h1 class="main-title main-title--spacing title_reveal">Serviços<span class="dot">/</span></h1>
            <div class="wrapper">
                <ServiceUIDesigner :toggleUIDesigner="toggleUIDesigner"></ServiceUIDesigner>
                <ServiceFrontEndDeveloper></ServiceFrontEndDeveloper>
                <ServiceBackEndDeveloper></ServiceBackEndDeveloper>
            </div>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

import VueWindow from '../Window/Window.vue';
import ServiceUIDesigner from './service/UIDesigner.vue';
import ServiceFrontEndDeveloper from './service/FrontEndDeveloper.vue';
import ServiceBackEndDeveloper from './service/BackEndDeveloper.vue';

export default {
    name: 'VueServices',
    components: {
        VueWindow,
        ServiceUIDesigner,
        ServiceFrontEndDeveloper,
        ServiceBackEndDeveloper,
    },
    data() {
        return {
            viewWindow: false,
            viewUIDesigner: false,
        };
    },
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [{ selector: '.service_reveal', config: { interval: 400 } }];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
    methods: {
        toggleUIDesigner() {
            this.viewWindow = !this.viewWindow;
        },
    },
};
</script>

<style lang="scss">
@import './services';
</style>
