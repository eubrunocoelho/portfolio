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
                <!-- The first project must have the scrollreveal selectors -->
                <swiper-slide class="project">
                    <ProjectMinimalistPersonalPage></ProjectMinimalistPersonalPage>
                </swiper-slide>
                <!-- Following projects should not have scrollreveal selectors -->
                <swiper-slide class="project">
                    <ProjectTodoGraphQLAPI></ProjectTodoGraphQLAPI>
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
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';
import { Swiper, SwiperSlide } from 'swiper/vue';

import ProjectMinimalistPersonalPage from './project/MinimalistPersonalPage.vue';
import ProjectTodoGraphQLAPI from './project/TodoGraphQLAPI.vue';

import 'swiper/css';

export default {
    name: 'VueProjects',
    components: {
        Swiper,
        SwiperSlide,
        ProjectMinimalistPersonalPage,
        ProjectTodoGraphQLAPI,
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
                config: { delay: 300, distance: '0px', easing: 'ease-in-out', opacity: 0, origin: 'center' },
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
                config: { delay: 400, distance: '20px', origin: 'left' },
            },
            {
                selector: '.ellipses_reveal',
                config: { distance: '20px', delay: 100, origin: 'bottom' },
            },
        ];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './projects';
</style>
