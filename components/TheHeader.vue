<template>
    <header class="header">
        <div class="logo">
            <nuxt-link to="/">
                <img src="~/static/images/logo/lajkonik-icon-large.png" alt="Lajkonik - Song & Dance Ensemble">
            </nuxt-link>
        </div>
        <div class="current-page">
            {{ pageName.title }}
        </div>
        <TheSubNavigation />
        <div id="toggle" @click="$store.commit('toggleMenu')" v-bind:class="{ 'is-active': $store.state.isMenuOpen }">
            <span></span>
        </div>
    </header>
</template>

<style>
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: white;
        box-shadow: 0 0 10px gray;
        z-index: 1;;
    }
    
    .logo {
        position: absolute;
        left: 0;
        width: 48px;
    }

    .current-page {
        position: absolute;
        left: 62px;
        right: 62px;
        top: 0;
        height: 52px;
        text-align: center;
        line-height: 52px;
    }
    @media(min-width: 768px) {
        .current-page {
            display: none;
        }
    }

    /* Toggle Styles */
    #toggle {
        position: absolute;
        right: 0;
        top: 0;
        width: 28px;
        height: 28px;
        margin: 12px 10px;
        z-index: 1;
        cursor: pointer;
    }

    #toggle span {
        position: absolute;
        top: 12px;
    }

    #toggle span:after,
    #toggle span:before {
        content: "";
        position: absolute;
        left: 0;
        top: -9px;
    }
    #toggle span:after{
        top: 9px;
    }
    #toggle span {
        position: relative;
        display: block;
    }

    #toggle span,
    #toggle span:after,
    #toggle span:before {
        width: 100%;
        height: 4px;
        background-color: #888;
        transition: all 0.3s;
        backface-visibility: hidden;
        border-radius: 2px;
    }

    #toggle.is-active span {
        background-color: transparent;
    }
    #toggle.is-active span:before {
        transform: rotate(45deg) translate(5px, 5px);
    }
    #toggle.is-active span:after {
        transform: rotate(-45deg) translate(7px, -8px);
    }
    @media(min-width: 768px) {
        #toggle {
            display: none;
        }
    }
</style>

<script>
import TheSubNavigation from "@/components/TheSubNavigation"
export default {
    components: {TheSubNavigation},
    computed: {
        pageName: function () {
            return this.$store.state.mainMenu.find((menu) => menu.to == this.$route.path)
        }
    }
}
</script>
