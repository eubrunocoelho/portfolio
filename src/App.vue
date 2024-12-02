<template>
    <VueHeader></VueHeader>
    <main>
        <VuePresentation></VuePresentation>
    </main>
    <VueFooter></VueFooter>
</template>

<script>
import VueHeader from './components/Header/Header.vue';
import VuePresentation from './components/Presentation/Presentation.vue';
import VueFooter from './components/Footer/Footer.vue';

export default {
    name: 'App',
    components: { VueHeader, VueFooter, VuePresentation },
};
</script>
