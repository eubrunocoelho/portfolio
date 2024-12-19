<template>
    <transition name="fadeWindow">
        <section class="window" v-if="viewWindow" @click="closeWindow"></section>
    </transition>
</template>

<script>
export default {
    name: 'VueWindow',
    props: {
        viewWindow: {
            type: Boolean,
            required: true,
        },
    },
    data() {},
    methods: {
        closeWindow() {
            this.$emit('update:viewWindow', false);
        },
    },
};
</script>

<style lang="scss">
@import './window-overlay';

.fadeWindow-enter-active {
    animation: fadeWindow 0.5s ease-in-out;
}

.fadeWindow-leave-active {
    animation: fadeWindow 0.5s ease-in-out reverse;
}
</style>
