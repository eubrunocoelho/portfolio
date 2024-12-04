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
                        <li class="language-box">
                            <img src="../../assets/img/languages/vuejs.svg" class="language" />
                        </li>
                        <li class="language-box">
                            <img src="../../assets/img/languages/js.svg" class="language" />
                        </li>
                        <li class="language-box">
                            <img src="../../assets/img/languages/css.svg" class="language" />
                        </li>
                        <li class="language-box">
                            <img src="../../assets/img/languages/sass.svg" class="language" />
                        </li>
                    </ul>
                    <a href="#" class="show-more">Exibir mais</a>
                </div>
            </div>
        </div>
        <nav class="ellipses">
            <div class="wrapper">
                <span class="ellipse"></span>
                <span class="ellipse"></span>
                <span class="ellipse ellipse--active"></span>
                <span class="ellipse"></span>
            </div>
        </nav>
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
