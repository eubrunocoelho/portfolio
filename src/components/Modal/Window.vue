<template>
    <transition name="fadeWindow">
        <section class="window" v-show="viewWindow">
            <section class="area" @click="isOutModal($event)" ref="area">
                <transition name="fadeModal">
                    <ServiceModal v-if="viewModal" :closeModal="closeModal" :dataModal="dataModal"></ServiceModal>
                </transition>
            </section>
        </section>
    </transition>
</template>

<script>
import ServiceModal from './Modal.vue';

export default {
    name: 'ServiceWindow',
    components: { ServiceModal },
    props: {
        viewWindow: {
            type: Boolean,
            required: true,
        },
        viewModal: {
            type: Boolean,
            required: true,
        },
        dataModal: {
            type: Object,
            required: true,
        },
    },
    methods: {
        isOutModal(event) {
            if (event.target === this.$refs.area) {
                this.closeModal();
            }
        },
        closeModal() {
            this.$emit('update:viewModal', false);
            this.$emit('update:viewWindow', false);
        },
    },
};
</script>

<style lang="scss">
.fadeWindow-enter-active {
    animation: fadeWindow 0.3s ease-in-out;
}

.fadeWindow-leave-active {
    animation: fadeWindow 0.3s ease-in-out reverse;
    animation-delay: 0.4s;
}

.fadeModal-enter-active {
    animation: fadeModal 0.4s ease-in-out;
}

.fadeModal-leave-active {
    animation: fadeModal 0.4s ease-in-out reverse;
}
</style>
