<template>
    <section class="summary">
        <article class="box">
            <div class="cover"></div>
            <div class="content">
                <hgroup class="title-group">
                    <h2 class="subtitle">Resumo</h2>
                    <h1 class="title">Bruno Coelho</h1>
                </hgroup>
                <div class="about">
                    <h1 class="description">Full-Stack Developer & UI Designer</h1>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
                <ul class="social">
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
export default {
    name: 'VueSummary',
};
</script>

<style lang="scss">
@import './summary';
</style>
