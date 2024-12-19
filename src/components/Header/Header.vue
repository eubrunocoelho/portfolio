<template>
    <Teleport to="#app">
        <VueWindow v-model:viewWindow="viewWindow" v-model:viewSidebar="viewSidebar"></VueWindow>
    </Teleport>
    <header>
        <div class="container">
            <button class="open-menu">
                <font-awesome-icon :icon="['fas', 'bars']" class="open-menu--icon" @click="toggleSidebar" />
            </button>
            <div class="logo-wrapper"></div>
            <nav class="navigation">
                <ul>
                    <li>
                        <a href="javascript:void(0);">Início</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Sobre</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Serviços</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Projetos</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Tecnologias</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import VueWindow from '../Sidebar/Window.vue';

export default {
    name: 'VueHeader',
    components: { VueWindow },
    data() {
        return {
            viewWindow: false,
            viewSidebar: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.viewWindow = !this.viewWindow;
            this.viewSidebar = !this.viewSidebar;
        },
    },
};
</script>

<style lang="scss">
@import './header';
</style>
