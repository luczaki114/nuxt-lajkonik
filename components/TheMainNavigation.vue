<template>
    <nav class="main-nav-bar" v-bind:class="{'is-active': $store.state.isMenuOpen }">
        <nuxt-link 
            :class="{'link-active': isLinkActive(navLink.to)}"
            @click.native="toggleMenus" 
            v-for="navLink in $store.state.mainMenu" 
            :key="navLink.title" 
            :to="navLink.to">{{navLink.title}}</nuxt-link>
    </nav>
</template>

<style scoped>
    /* Nav Styles */
    .main-nav-bar {
        position: fixed;
        top: 0;
        right: -100px;
        width: 100px;
        bottom: 0;
        background-color: white;
        border-left: 2px solid black;
        -moz-transition:all 200ms ease-in;
        -webkit-transition:all 200ms ease-in;
        -o-transition:all 200ms ease-in;
        transition:all 200ms ease-in;
        z-index: 1;
    }
    .main-nav-bar a {
        display: block;
        margin: 10px;
        font-size: 20px;
        text-align: right;
    }

    .main-nav-bar a.nuxt-link-active:first-child {
        color: black;
    }
    .main-nav-bar.is-active {
        right: 0;
    }
    .main-nav-bar a.nuxt-link-active  {
        color: darkgoldenrod;
    }
    a.link-active  {
        color: darkgoldenrod !important;
    }
    @media(min-width: 768px) {
        .main-nav-bar {
            left: 52px;
            right: 52px;
            bottom: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: auto;
            height: 52px;
            border: none;
            z-index: 2;
        }
        .main-nav-bar.is-active {
            right: 52px;
        }
    }
</style>

<script>
export default {
    methods: {
        toggleMenus: function () {
            if (this.$store.state.isMenuOpen == true) {
                this.$store.commit('toggleMenu')
            }
        },
        isLinkActive: function (el) {
            if(el == "/"){
                return this.$route.fullPath == ("/") || this.$route.fullPath.indexOf("/#") >= 0 
            }
        }
    }
}
</script>
