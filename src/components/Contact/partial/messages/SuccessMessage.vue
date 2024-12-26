<template>
    <div class="message" v-if="submitStatus === 'OK'">
        <img src="../../../../assets/img/success-icon.svg" class="icon" />
        <p class="text">Mensagem enviada!</p>
    </div>
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
