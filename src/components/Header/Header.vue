<template>
    <Teleport to="#app">
        <SidebarWindow v-model:viewWindow="viewWindow" v-model:viewSidebar="viewSidebar"></SidebarWindow>
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
                        <a href="javascript:void(0);" @click="scrollToId('presentationRef', 0)">Início</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('summaryRef', 0)">Sobre</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('servicesRef', 60)">Serviços</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('projectsRef', 60)">Projetos</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('technologiesRef', 60)">Tecnologias</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('contactRef', 60)">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import SidebarWindow from '../Sidebar/Window.vue';

export default {
    name: 'MyHeader',
    components: { SidebarWindow },
    props: {
        scrollToId: {
            type: Function,
            required: true,
        },
    },
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
