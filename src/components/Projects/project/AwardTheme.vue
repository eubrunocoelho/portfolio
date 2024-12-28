<template>
    <div class="project-cover">
        <img src="../../../assets/img/projects/award-theme.png" />
    </div>
    <div class="about">
        <h1 class="title">MU Award Theme</h1>
        <p class="text">Tema de website para servidores privados do MMORPG de MU Online.</p>
        <ul class="languages">
            <li class="language-box">
                <img src="../../../assets/img/languages/html.svg" class="language" />
            </li>
            <li class="language-box">
                <img src="../../../assets/img/languages/css.svg" class="language" />
            </li>
            <li class="language-box">
                <img src="../../../assets/img/languages/sass.svg" class="language" />
            </li>
            <li class="language-box">
                <img src="../../../assets/img/languages/js.svg" class="language" />
            </li>
            <li class="language-box">
                <img src="../../../assets/img/languages/jquery.svg" class="language" />
            </li>
        </ul>
        <a href="https://github.com/eubrunocoelho/mu-award" class="show-more" target="_blank" rel="noopener noreferrer">
            Exibir mais
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProjectMangaSKY',
};
</script>

<style lang="scss" scoped>
.project-cover {
    img {
        object-fit: cover;
    }
}
</style>
