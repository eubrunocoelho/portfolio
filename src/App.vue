<template>
    <MyHeader :scrollToId="scrollToId"></MyHeader>
    <main>
        <MyPresentation :scrollToId="scrollToId"></MyPresentation>
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
    metaInfo: {
        title: 'Bruno Coelho - @eubrunocoelho',
        meta: [
            {
                name: 'description',
                content:
                    'UI Designer & Full-Stack Developer buscando criar experiências digitais. Ao combinar tecnologia, criatividade e design crio soluções para a web que colocam o usuário em primeiro lugar.',
            },
            {
                property: 'og:title',
                content: 'Bruno Coelho - Portfolio',
            },
            {
                property: 'og:description',
                content:
                    'UI Designer & Full-Stack Developer buscando criar experiências digitais. Ao combinar tecnologia, criatividade e design crio soluções para a web que colocam o usuário em primeiro lugar.',
            },
            {
                property: 'og:type',
                content: 'portfolio',
            },
            {
                property: 'og:url',
                content: 'https://eubrunocoelho.vercel.app',
            },
        ],
    },
    methods: {
        scrollToId(elementId, offset) {
            const targetElement = '#' + elementId;

            const element = document.querySelector(targetElement);
            const topOffset = offset;

            if (element) {
                const position = element.getBoundingClientRect().top + window.scrollY;

                var scrollPosition = position - topOffset;
            }

            if (elementId == 'app') {
                scrollPosition = 0;
            }

            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        },
    },
};
</script>
