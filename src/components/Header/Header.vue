<template>
    <header>
        <div class="container">
            <button class="open-menu">
                <font-awesome-icon :icon="['fas', 'bars']" class="open-menu--icon" />
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
export default {
    name: 'VueHeader',
};
</script>

<style lang="scss">
@import './header';
</style>
