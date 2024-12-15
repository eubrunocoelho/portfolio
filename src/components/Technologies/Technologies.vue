<template>
    <section class="technologies">
        <h1 class="main-title main-title--spacing title_reveal">Tecnologias<span class="dot">.</span></h1>
        <div class="wrapper">
            <div class="technology technology_reveal">
                <h1 class="title technology_title_reveal">Front-End</h1>
                <div class="container technology_languages_reveal">
                    <div class="technology-box">
                        <img src="../../assets/img/languages/html.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/css.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/js.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/jquery.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/vuejs.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/sass.svg" class="language" />
                    </div>
                </div>
            </div>
            <div class="technology technology_reveal">
                <h1 class="title technology_title_reveal">Back-End</h1>
                <div class="container technology_languages_reveal">
                    <div class="technology-box">
                        <img src="../../assets/img/languages/php.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/laravel.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/nodejs.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/ts.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/graphql.svg" class="language" />
                    </div>
                </div>
            </div>
            <div class="technology technology_reveal">
                <h1 class="title technology_title_reveal">Frameworks</h1>
                <div class="container technology_languages_reveal">
                    <div class="technology-box">
                        <img src="../../assets/img/languages/laravel.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/vuejs.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/jquery.svg" class="language" />
                    </div>
                </div>
            </div>
            <div class="technology technology_reveal">
                <h1 class="title technology_title_reveal">Banco de Dados</h1>
                <div class="container technology_languages_reveal">
                    <div class="technology-box">
                        <img src="../../assets/img/languages/mysql.svg" class="language" />
                    </div>
                    <div class="technology-box">
                        <img src="../../assets/img/languages/mongodb.svg" class="language" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

export default {
    name: 'VueTechnologies',
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [
            { selector: '.technology_reveal', config: { interval: 400 } },
            { selector: '.technology_title_reveal', config: { delay: 400, distance: '60px', origin: 'left' } },
            { selector: '.technology_languages_reveal', config: { delay: 450 } },
        ];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './technologies';
</style>
