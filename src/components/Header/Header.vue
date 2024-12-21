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
                        <a href="javascript:void(0);" @click="scrollToId('myPresentation')">Início</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('mySummary')">Sobre</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('myServices')">Serviços</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('myProjects')">Projetos</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('myTechnologies')">Tecnologias</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="scrollToId('myContact')">Contato</a>
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
