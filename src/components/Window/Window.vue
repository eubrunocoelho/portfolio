<template>
    <section class="window">
        <VueSidebar></VueSidebar>
        <VueModal style="display: none"></VueModal>
    </section>
</template>

<script>
import VueSidebar from '../Sidebar/Sidebar.vue';
import VueModal from '../Modal/Modal.vue';

export default {
    name: 'VueWindow',
    components: { VueModal, VueSidebar },
};
</script>

<style lang="scss">
@import './window-overlay';
</style>
