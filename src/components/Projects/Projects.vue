<template>
    <section class="projects">
        <h1 class="main-title main-title--spacing">Projetos<span class="dot">.</span></h1>
        <div class="container">
            <div class="previous">
                <font-awesome-icon :icon="['fas', 'chevron-left']" class="previous--icon" />
            </div>
            <div class="next">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="next--icon" />
            </div>
            <div class="project">
                <span class="project-box"></span>
                <div class="about">
                    <h1 class="title">Página Pessoal Minimalista</h1>
                    <p class="text">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget massa varius primis elit
                        hendrerit.
                    </p>
                    <ul class="languages">
                        <li class="language-box language-box--vue"></li>
                        <li class="language-box language-box--js"></li>
                        <li class="language-box language-box--css"></li>
                        <li class="language-box language-box--sass"></li>
                    </ul>
                    <a href="#" class="show-more">Exibir mais</a>
                </div>
            </div>
        </div>
        <div class="ellipses">
            <div class="wrapper">
                <span class="ellipse"></span>
                <span class="ellipse"></span>
                <span class="ellipse ellipse--active"></span>
                <span class="ellipse"></span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VueProjects',
};
</script>

<style lang="scss">
@import './projects';
</style>
