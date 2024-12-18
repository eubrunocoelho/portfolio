<template>
    <section class="sidebar">
        <div class="wrapper">
            <div class="close">
                <font-awesome-icon :icon="['fas', 'xmark']" class="icon" />
            </div>
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
    </section>
</template>

<script>
export default {
    name: 'VueSidebar',
};
</script>

<style lang="scss">
@import './sidebar';
</style>
