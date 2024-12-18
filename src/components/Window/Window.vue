<template>
    <section class="window">
        <VueModal></VueModal>
    </section>
</template>

<script>
import VueModal from '../Modal/Modal.vue';

export default {
    name: 'VueWindow',
    components: { VueModal },
};
</script>

<style lang="scss">
@import './window-overlay';
</style>
