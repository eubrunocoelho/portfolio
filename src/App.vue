<template>
    <VueHeader></VueHeader>
    <main>
        <VuePresentation></VuePresentation>
        <VueSummary></VueSummary>
    </main>
    <VueFooter></VueFooter>
</template>

<script>
import VueHeader from './components/Header/Header.vue';
import VuePresentation from './components/Presentation/Presentation.vue';
import VueSummary from './components/Summary/Summary.vue';
import VueFooter from './components/Footer/Footer.vue';

export default {
    name: 'App',
    components: { VueHeader, VueFooter, VuePresentation, VueSummary },
};
</script>
