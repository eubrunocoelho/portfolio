<template>
    <header>
        <div class="container">
            <button class="open-menu">
                <font-awesome-icon :icon="['fas', 'bars']" class="open-menu--icon" />
            </button>
            <div class="logo-wrapper"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'VueHeader',
};
</script>

<style lang="scss">
@import './header';
</style>
