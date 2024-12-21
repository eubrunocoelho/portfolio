<template>
    <Teleport to="#app">
        <ServiceWindow
            v-model:viewWindow="viewWindow"
            v-model:viewModal="viewModal"
            :dataModal="dataModal"
        ></ServiceWindow>
    </Teleport>
    <section class="services" id="myServices">
        <div class="waves">
            <img src="../../assets/img/waves.svg" class="object" onload="SVGInject(this)" />
        </div>
        <div class="content">
            <h1 class="main-title main-title--spacing title_reveal">Serviços<span class="dot">/</span></h1>
            <div class="wrapper">
                <ServiceUIDesigner :toggleUIDesigner="toggleUIDesigner"></ServiceUIDesigner>
                <ServiceFrontEndDeveloper :toggleFrontEndDeveloper="toggleFrontEndDeveloper"></ServiceFrontEndDeveloper>
                <ServiceBackEndDeveloper :toggleBackEndDeveloper="toggleBackEndDeveloper"></ServiceBackEndDeveloper>
            </div>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

import ServiceWindow from '../Modal/Window.vue';
import ServiceUIDesigner from './service/UIDesigner.vue';
import ServiceFrontEndDeveloper from './service/FrontEndDeveloper.vue';
import ServiceBackEndDeveloper from './service/BackEndDeveloper.vue';

export default {
    name: 'MyServices',
    components: {
        ServiceWindow,
        ServiceUIDesigner,
        ServiceFrontEndDeveloper,
        ServiceBackEndDeveloper,
    },
    data() {
        return {
            viewWindow: false,
            viewModal: false,

            UIDesigner: {
                title: 'UI<br />Designer',
                skills: [
                    'Criação de UI (Interface do Usuário).',
                    'Criatividade.',
                    'Design atrativo.',
                    'Experiência com Adobe Photoshop.',
                    'Experiência com Adobe Illustrator.',
                ],
            },

            FrontEndDeveloper: {
                title: 'Frond-End<br />Developer',
                skills: [
                    'Temas para diferentes disposítivos.',
                    'Recursos interativos e intuitivos.',
                    'Componentes bem definidos.',
                    'Fidelidade com o tema apresentado.',
                    'Metodoligias de desenvolvimento.',
                    'Suporte e orientação.',
                ],
            },

            BackEndDeveloper: {
                title: 'Back-End<br />Developer',
                skills: [
                    'Implementação de sistemas.',
                    'Resoluções de problemas.',
                    'Código bem escrito e organizado.',
                    'Padrões de Projeto.',
                    'Banco de dados robusto e normalizado.',
                ],
            },

            dataModal: {},
        };
    },
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [{ selector: '.service_reveal', config: { interval: 400 } }];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
    methods: {
        openModal() {
            this.viewWindow = !this.viewWindow;
            this.viewModal = !this.viewModal;
        },

        toggleUIDesigner() {
            this.openModal();

            this.dataModal = {};
            this.dataModal = this.UIDesigner;
        },

        toggleFrontEndDeveloper() {
            this.openModal();

            this.dataModal = {};
            this.dataModal = this.FrontEndDeveloper;
        },

        toggleBackEndDeveloper() {
            this.openModal();

            this.dataModal = {};
            this.dataModal = this.BackEndDeveloper;
        },
    },
};
</script>

<style lang="scss">
@import './services';
</style>
