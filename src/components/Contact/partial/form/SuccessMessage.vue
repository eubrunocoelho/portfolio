<template>
    <transition name="fadeMessage">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'SuccessMessage',
};
</script>

<style>
.fadeMessage-enter-active {
    animation: fadeMessage 0.5s ease-in-out;
}

.fadeMessage-leave-active {
    animation: fadeMessage 0.5s ease-in-out reverse;
}
</style>
