<template>
    <section class="area">
        <article class="modal">
            <div class="close">
                <font-awesome-icon :icon="['fas', 'xmark']" class="icon" />
            </div>
            <h1 class="title">
                UI<br />
                Designer
            </h1>
            <ul class="skills">
                <li>Criação de UI (Interface do Usuário).</li>
                <li>Criatividade.</li>
                <li>Design Atrativo.</li>
                <li>Produtividade.</li>
                <li>Adobe Photoshop.</li>
                <li>Adobe Illustrator.</li>
            </ul>
        </article>
    </section>
</template>

<script>
export default {
    name: 'VueModal',
};
</script>

<style lang="scss">
@import './modal';
</style>
