<template>
    <section class="services">
        <div class="waves">
            <img src="../../assets/img/waves.svg" class="object" onload="SVGInject(this)" />
        </div>
        <div class="content">
            <h1 class="section-title title-spacing">Serviços<span class="dot">.</span></h1>
            <div class="wrapper">
                <div class="service-card">
                    <div class="card-content">
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
                <div class="service-card">
                    <div class="card-content">
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
                <div class="service-card">
                    <div class="card-content">
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
export default {
    name: 'VueServices',
};
</script>

<style lang="scss">
@import './services';
</style>
