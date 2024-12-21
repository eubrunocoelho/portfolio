<template>
    <MyHeader :scrollToId="scrollToId"></MyHeader>
    <main>
        <MyPresentation></MyPresentation>
        <MySummary></MySummary>
        <MyServices></MyServices>
        <MyProjects></MyProjects>
        <MyTechnologies></MyTechnologies>
        <MyContact></MyContact>
    </main>
    <MyFooter></MyFooter>
</template>

<script>
import MyHeader from './components/Header/Header.vue';
import MyPresentation from './components/Presentation/Presentation.vue';
import MySummary from './components/Summary/Summary.vue';
import MyServices from './components/Services/Services.vue';
import MyProjects from './components/Projects/Projects.vue';
import MyTechnologies from './components/Technologies/Technologies.vue';
import MyContact from './components/Contact/Contact.vue';
import MyFooter from './components/Footer/Footer.vue';

export default {
    name: 'App',
    components: {
        MyHeader,
        MyPresentation,
        MySummary,
        MyServices,
        MyProjects,
        MyTechnologies,
        MyContact,
        MyFooter,
    },
    methods: {
        scrollToId(elementId) {
            const targetElement = '#' + elementId;

            const element = document.querySelector(targetElement);
            const offset = 82 + 20;

            console.log(element);

            if (element) {
                const position = element.getBoundingClientRect().top + window.scrollY;

                var scrollPosition = position - offset;
            }

            if (elementId == 'app') {
                scrollPosition = 0;
            }

            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        },
    },
};
</script>
