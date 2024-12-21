<template>
    <section class="sidebar">
        <div class="wrapper">
            <div class="close">
                <font-awesome-icon :icon="['fas', 'xmark']" class="icon" @click="closeSidebar()" />
            </div>
            <nav class="navigation">
                <ul>
                    <li>
                        <a href="javascript:void(0);" @click="handleClick('presentationRef', 0)">Início</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="handleClick('summaryRef', 0)">Sobre</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="handleClick('servicesRef', 60)">Serviços</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="handleClick('projectsRef', 60)">Projetos</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="handleClick('technologiesRef', 60)">Tecnologias</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="handleClick('contactRef', 60)">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MySidebar',
    props: {
        closeSidebar: {
            type: Function,
            required: true,
        },
        scrollToId: {
            type: Function,
            required: true,
        },
    },
    methods: {
        handleClick(elementId, offset) {
            this.closeSidebar();
            this.scrollToId(elementId, offset);
        },
    },
};
</script>

<style lang="scss">
@import './sidebar';
</style>
