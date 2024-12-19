<template>
    <transition name="fadeWindow">
        <section class="window" v-show="viewWindow" @click="closeModal()">
            <section class="area">
                <transition name="fadeModal">
                    <VueModal v-if="viewModal"></VueModal>
                </transition>
            </section>
        </section>
    </transition>
</template>

<script>
import VueModal from '../Modal/Modal.vue';

export default {
    name: 'VueWindow',
    components: { VueModal },
    props: {
        viewWindow: {
            type: Boolean,
            required: true,
        },
        viewModal: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit('update:viewWindow', false);
            this.$emit('update:viewModal', false);
        },
    },
};
</script>

<style lang="scss">
@import './window-overlay';

.fadeWindow-enter-active {
    animation: fadeWindow 0.3s ease-in-out;
}

.fadeWindow-leave-active {
    animation: fadeWindow 0.3s ease-in-out reverse;
    animation-delay: 0.35s;
}

.fadeModal-enter-active {
    animation: fadeModal 0.35s ease-in-out;
}

.fadeModal-leave-active {
    animation: fadeModal 0.35s ease-in-out reverse;
}
</style>
