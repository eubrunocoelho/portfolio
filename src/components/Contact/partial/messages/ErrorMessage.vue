<template>
    <transition name="fadeAlert">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'ErrorMessage',
};
</script>

<style>
.fadeAlert-enter-active {
    animation: fadeAlert 0.5s ease-in-out;
}

.fadeAlert-leave-active {
    animation: fadeAlert 0.5s ease-in-out reverse;
}
</style>
