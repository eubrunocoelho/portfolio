<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <ul class="social">
                    <li>
                        <a
                            href="https://github.com/eubrunocoelho"
                            class="social-box social_reveal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="logo-github" class="social-icon"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/eubrunocoelho"
                            class="social-box social_reveal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="logo-linkedin" class="social-icon"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.deviantart.com/eubrunocoelho"
                            class="social-box social_reveal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="logo-deviantart" class="social-icon"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-copy">
            <div class="container">
                <p>
                    <span class="copy-symbol">©</span>2024
                    <a href="mailto:eu.brunocoelho94@gmail.com" class="author">Bruno Coelho</a> | Todos os direitos
                    reservados.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

export default {
    name: 'MyFooter',
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [{ selector: '.social_reveal', config: { distance: '20px', interval: 100 } }];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './footer';
</style>
