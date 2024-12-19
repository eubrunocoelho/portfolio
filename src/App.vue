<template>
    <MyHeader></MyHeader>
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
};
</script>
