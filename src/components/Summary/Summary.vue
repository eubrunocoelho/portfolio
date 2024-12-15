<template>
    <section class="summary">
        <article class="box">
            <div class="cover summary_cover_reveal"></div>
            <div class="content">
                <hgroup class="title-group">
                    <h2 class="subtitle summary_subtitle_reveal">Resumo</h2>
                    <h1 class="title summary_title_reveal">Bruno Coelho</h1>
                </hgroup>
                <div class="about">
                    <h1 class="description summary_description_reveal">Full-Stack Developer & UI Designer</h1>
                    <p class="text summary_text_social_reveal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
                <ul class="social summary_text_social_reveal">
                    <li>
                        <a href="#" class="social-box">
                            <ion-icon name="logo-github" class="social-icon"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-box">
                            <ion-icon name="logo-linkedin" class="social-icon"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-box">
                            <ion-icon name="logo-deviantart" class="social-icon"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-box">
                            <ion-icon name="logo-discord" class="social-icon"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

export default {
    name: 'VueSummary',
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [
            { selector: '.summary_cover_reveal', config: { delay: 300 } },
            { selector: '.summary_subtitle_reveal', config: { delay: 300 } },
            { selector: '.summary_title_reveal', config: { delay: 200 } },
            { selector: '.summary_description_reveal', config: { origin: 'left', distance: '60px', delay: 250 } },
            { selector: '.summary_text_social_reveal', config: { delay: 400 } },
        ];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './summary';
</style>
