<template>
    <transition name="fadeMessage">
        <div class="message" v-if="submitStatus === 'OK'">
            <img src="../../../../assets/img/success-icon.svg" class="icon" />
            <p class="text">Mensagem enviada!</p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'SuccessMessage',
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
