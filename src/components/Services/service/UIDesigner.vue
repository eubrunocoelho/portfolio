<template>
    <div class="service service_reveal">
        <div class="service-content">
            <div class="icon-box service_icon_reveal">
                <font-awesome-icon :icon="['fas', 'pen-ruler']" class="icon-box--icon" />
            </div>
            <h1 class="title service_title_reveal">
                UI<br />
                Designer
            </h1>
        </div>
        <a href="javascript:void(0);" class="show-more service_link_reveal" @click="toggleUIDesigner">Exibir mais</a>
    </div>
</template>

<script>
export default {
    name: 'ServiceUIDesigner',
    props: {
        toggleUIDesigner: {
            type: Function,
            required: true,
        },
    },
};
</script>
