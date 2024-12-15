<template>
    <section class="projects">
        <h1 class="main-title main-title--spacing titleReveal">Projetos<span class="dot">.</span></h1>
        <div class="container">
            <div class="previous">
                <font-awesome-icon :icon="['fas', 'chevron-left']" class="navigation--icon" />
            </div>
            <div class="next">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="navigation--icon" />
            </div>
            <swiper :slides-per-view="1" :spaceBetween="0" :centeredSlides="true">
                <swiper-slide class="project">
                    <span class="project-box projectCoverReveal"></span>
                    <div class="about">
                        <h1 class="title projectTitleReveal">Página Pessoal Minimalista</h1>
                        <p class="text projectTextAndSocialsReveal">
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget massa varius primis elit
                            hendrerit.
                        </p>
                        <ul class="languages projectTextAndSocialsReveal">
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
                        <a href="#" class="show-more projectShowMoreReveal">Exibir mais</a>
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
import { Swiper, SwiperSlide } from 'swiper/vue';
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
};
</script>

<style lang="scss">
@import './projects';
</style>
