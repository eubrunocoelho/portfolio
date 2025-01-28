<template>
    <section class="summary" id="summaryRef">
        <article class="box">
            <div class="cover summary_cover_reveal"></div>
            <div class="content">
                <hgroup class="title-group">
                    <h2 class="subtitle summary_subtitle_reveal">Resumo</h2>
                    <h1 class="title summary_title_reveal">Bruno Coelho</h1>
                </hgroup>
                <div class="about">
                    <h1 class="description summary_description_reveal">UI Designer & Full-Stack Developer</h1>
                    <p class="text summary_text_social_reveal">
                        Atualmente atuo como Freelancer, dedicado a criar soluções para a web que atendam às
                        expectativas do cliente e as necessidades do usuário. Tenho experiência com diversas
                        tecnologias, construindo aplicações desde o banco de dados até a interface do usuário. Meu
                        objetivo é entregar projetos que seguem as expectativas do cliente, oferencendo experiências
                        intuitivas e agradáveis aos usuários.
                    </p>
                </div>
                <ul class="social summary_text_social_reveal">
                    <li>
                        <a
                            href="https://github.com/eubrunocoelho"
                            class="social-box"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="logo-github" class="social-icon"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/eubrunocoelho"
                            class="social-box"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="logo-linkedin" class="social-icon"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.deviantart.com/eubrunocoelho"
                            class="social-box"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="logo-deviantart" class="social-icon"></ion-icon>
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
    name: 'MySummary',
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [
            { selector: '.summary_cover_reveal', config: { delay: 300, distance: '70px' } },
            { selector: '.summary_subtitle_reveal', config: { delay: 300 } },
            { selector: '.summary_title_reveal', config: { delay: 200 } },
            { selector: '.summary_description_reveal', config: { delay: 250, distance: '60px', origin: 'left' } },
            { selector: '.summary_text_social_reveal', config: { delay: 400 } },
        ];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './summary';
</style>
