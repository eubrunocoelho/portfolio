<template>
    <transition name="fadeWindow">
        <section class="window" v-show="viewWindow" @click="isOutSidebar($event)" ref="window">
            <transition name="fadeSidebar">
                <MySidebar v-if="viewSidebar" :closeSidebar="closeSidebar" :scrollToId="scrollToId"></MySidebar>
            </transition>
        </section>
    </transition>
</template>

<script>
import MySidebar from './Sidebar.vue';

export default {
    name: 'SidebarWindow',
    components: { MySidebar },
    props: {
        viewWindow: {
            type: Boolean,
            required: true,
        },
        viewSidebar: {
            type: Boolean,
            required: true,
        },
        scrollToId: {
            type: Function,
            required: true,
        },
    },
    methods: {
        isOutSidebar(event) {
            if (event.target === this.$refs.window) {
                this.closeSidebar();
            }
        },
        closeSidebar() {
            this.$emit('update:viewSidebar', false);
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
    animation-delay: 0.3s;
}

.fadeSidebar-enter-active {
    animation: fadeSidebar 0.3s ease-in-out;
}

.fadeSidebar-leave-active {
    animation: fadeSidebar 0.3s ease-in-out reverse;
}
</style>
