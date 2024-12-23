<template>
    <div class="service service_reveal">
        <div class="service-content">
            <div class="icon-box service_icon_reveal">
                <font-awesome-icon :icon="['fas', 'display']" class="icon-box--icon" />
            </div>
            <h1 class="title service_title_reveal">
                Front-End<br />
                Developer
            </h1>
        </div>
        <a href="javascript:void(0);" class="show-more service_link_reveal" @click="toggleFrontEndDeveloper">
            Exibir mais
        </a>
    </div>
</template>

<script>
export default {
    name: 'ServiceFrontEndDeveloper',
    props: {
        toggleFrontEndDeveloper: {
            type: Function,
            required: true,
        },
    },
};
</script>
