<template>
    <div class="project-cover">
        <img src="../../../assets/img/projects/minimalist-personal-page.png" />
    </div>
    <div class="about">
        <h1 class="title">Minimalist Personal Page</h1>
        <p class="text">
            Página pessoal com um estilo minimalista, desenvolvida para mostrar as tecnologias de estudo e um formulário
            para contato. (Desatualizado)
        </p>
        <ul class="languages">
            <li class="language-box">
                <img src="../../../assets/img/languages/vuejs.svg" class="language" />
            </li>
            <li class="language-box">
                <img src="../../../assets/img/languages/js.svg" class="language" />
            </li>
            <li class="language-box">
                <img src="../../../assets/img/languages/css.svg" class="language" />
            </li>
            <li class="language-box">
                <img src="../../../assets/img/languages/sass.svg" class="language" />
            </li>
        </ul>
        <a href="#" class="show-more">Exibir mais</a>
    </div>
</template>

<script>
export default {
    name: 'ProjectMinimalistPersonalPage',
};
</script>

<style lang="scss" scoped>
.project-cover {
    img {
        object-fit: cover;
    }
}
</style>
