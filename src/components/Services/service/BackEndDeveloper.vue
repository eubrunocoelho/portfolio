<template>
    <div class="service service_reveal">
        <div class="service-content">
            <div class="icon-box service_icon_reveal">
                <font-awesome-icon :icon="['fas', 'server']" class="icon-box--icon" />
            </div>
            <h1 class="title service_title_reveal">
                Back-End<br />
                Developer
            </h1>
        </div>
        <a href="javascript:void(0);" class="show-more service_link_reveal" @click="toggleBackEndDeveloper">
            Exibir mais
        </a>
    </div>
</template>

<script>
export default {
    name: 'ServiceBackEndDeveloper',
    props: {
        toggleBackEndDeveloper: {
            type: Function,
            required: true,
        },
    },
};
</script>
