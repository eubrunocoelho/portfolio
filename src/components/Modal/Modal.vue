<template>
    <article class="modal">
        <div class="close">
            <font-awesome-icon :icon="['fas', 'xmark']" class="icon" @click="closeModal()" />
        </div>
        <h1 class="title" v-html="dataModal.title"></h1>
        <ul class="skills">
            <li v-for="(skill, index) in dataModal.skills" :key="index">{{ skill }}</li>
        </ul>
    </article>
</template>

<script>
export default {
    name: 'VueModal',
    props: {
        closeModal: {
            type: Function,
            required: true,
        },
        dataModal: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss">
@import './modal';
</style>
