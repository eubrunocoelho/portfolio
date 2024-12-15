<template>
    <section class="services">
        <div class="waves">
            <img src="../../assets/img/waves.svg" class="object" onload="SVGInject(this)" />
        </div>
        <div class="content">
            <h1 class="main-title main-title--spacing title_reveal">Serviços<span class="dot">.</span></h1>
            <div class="wrapper">
                <div class="service service_reveal">
                    <div class="service-content">
                        <div class="icon-box">
                            <font-awesome-icon :icon="['fas', 'pen-ruler']" class="icon-box--icon" />
                        </div>
                        <h1 class="title">
                            UI<br />
                            Designer
                        </h1>
                    </div>
                    <a href="javascript:void(0);" class="show-more">Exibir mais</a>
                </div>
                <div class="service service_reveal">
                    <div class="service-content">
                        <div class="icon-box">
                            <font-awesome-icon :icon="['fas', 'display']" class="icon-box--icon" />
                        </div>
                        <h1 class="title">
                            Front-End<br />
                            Developer
                        </h1>
                    </div>
                    <a href="javascript:void(0);" class="show-more">Exibir mais</a>
                </div>
                <div class="service service_reveal">
                    <div class="service-content">
                        <div class="icon-box">
                            <font-awesome-icon :icon="['fas', 'server']" class="icon-box--icon" />
                        </div>
                        <h1 class="title">
                            Back-End<br />
                            Developer
                        </h1>
                    </div>
                    <a href="javascript:void(0);" class="show-more">Exibir mais</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { initScrollReveal, revealComponentElements } from '../../utils/initScrollReveal';

export default {
    name: 'VueServices',
    mounted() {
        const scrollReveal = initScrollReveal();

        const customScrollReveal = [{ selector: '.service_reveal', config: { interval: 400 } }];

        revealComponentElements(scrollReveal, customScrollReveal);
    },
};
</script>

<style lang="scss">
@import './services';
</style>
