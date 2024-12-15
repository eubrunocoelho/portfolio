<template>
    <section class="projects">
        <h1 class="main-title main-title--spacing title_reveal">Projetos<span class="dot">.</span></h1>
        <div class="container">
            <div class="previous">
                <font-awesome-icon :icon="['fas', 'chevron-left']" class="navigation--icon" />
            </div>
            <div class="next">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="navigation--icon" />
            </div>
            <swiper :slides-per-view="1" :spaceBetween="0" :centeredSlides="true">
                <swiper-slide class="project">
                    <span class="project-box project_cover_reveal"></span>
                    <div class="about">
                        <h1 class="title project_title_reveal">Página Pessoal Minimalista</h1>
                        <p class="text project_text_languages_reveal">
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget massa varius primis elit
                            hendrerit.
                        </p>
                        <ul class="languages project_text_languages_reveal">
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
                        <a href="#" class="show-more project_link_reveal">Exibir mais</a>
                    </div>
                </swiper-slide>
                <swiper-slide class="project">
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
                </swiper-slide>
            </swiper>
        </div>
        <nav class="ellipses ellipses_reveal">
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';
import 'swiper/css';

export default {
    name: 'VueProjects',
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };

        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            onSwiper,
            onSlideChange,
        };
    },
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [
            {
                selector: '.project_cover_reveal',
                config: { origin: 'center', distance: '0px', opacity: 0, easing: 'ease-in-out', delay: 300 },
            },
            {
                selector: '.project_title_reveal',
                config: { delay: 300, distance: '20px' },
            },
            {
                selector: '.project_text_languages_reveal',
                config: { delay: 400, distance: '20px' },
            },
            {
                selector: '.project_link_reveal',
                config: { delay: 400, origin: 'left', distance: '20px' },
            },
            {
                selector: '.ellipses_reveal',
                config: { delay: 100, origin: 'bottom', distance: '20px' },
            },
        ];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './projects';
</style>
