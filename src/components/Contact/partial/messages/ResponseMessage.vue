<template>
    <transition name="fadeMessage">
        <SuccessMessage :submitStatus="submitStatus"></SuccessMessage>
    </transition>
    <ErrorMessage>
        <div v-if="submitStatus === 'ERR'" class="alert alert-danger margin--top-20">
            <p>Houve um erro inesperado.</p>
        </div>
    </ErrorMessage>
</template>

<script>
import ErrorMessage from './ErrorMessage.vue';
import SuccessMessage from './SuccessMessage.vue';

export default {
    name: 'ResponseMessage',
    components: { SuccessMessage, ErrorMessage },
    props: {
        submitStatus: {
            type: String,
            required: true,
        },
    },
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
