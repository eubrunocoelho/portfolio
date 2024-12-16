<template>
    <section class="projects">
        <h1 class="main-title main-title--spacing title_reveal">Projetos<span class="dot">/</span></h1>
        <div class="container">
            <div class="previous" @click="swiper.slidePrev()">
                <font-awesome-icon
                    class="navigation--icon"
                    :class="{ 'navigation--disable': isFirstSlide() }"
                    :icon="['fas', 'chevron-left']"
                />
            </div>
            <div class="next" @click="swiper.slideNext()">
                <font-awesome-icon
                    class="navigation--icon"
                    :class="{ 'navigation--disable': isLastSlide() }"
                    :icon="['fas', 'chevron-right']"
                />
            </div>
            <swiper
                ref="swiperRef"
                :centeredSlides="true"
                :slides-per-view="1"
                :spaceBetween="0"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
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
                <span
                    class="ellipse"
                    v-for="(ellipse, index) in slides"
                    :key="index"
                    :class="{ 'ellipse--active': index == activeIndex }"
                    @click="goToSlide(index)"
                ></span>
            </div>
        </nav>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

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
        const swiperRef = ref(null);
        const activeIndex = ref(0);
        const slides = ref([]);

        const onSwiper = (swiperInstance) => {
            swiperRef.value = swiperInstance;

            slides.value = Array.from({ length: swiperInstance.slides.length }, (_, i) => i);
        };

        const onSlideChange = () => {
            activeIndex.value = swiperRef.value?.activeIndex || 0;

            isFirstSlide();
            isLastSlide();
        };

        const goToSlide = (index) => {
            swiperRef.value?.slideTo(index);
        };

        const isFirstSlide = () => {
            return activeIndex.value === slides.value[0];
        };

        const isLastSlide = () => {
            return activeIndex.value === slides.value[slides.value.length - 1];
        };

        return {
            swiper: swiperRef,
            activeIndex,
            slides,
            onSwiper,
            onSlideChange,
            goToSlide,
            isFirstSlide,
            isLastSlide,
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
