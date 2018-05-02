<template>
    <nav class="main-nav-bar" v-bind:class="{'is-active': $store.state.isMenuOpen }">
        <nuxt-link @click.native="toggleMenus" v-for="navLink in $store.state.menu" :key="navLink.title" :to="navLink.to">{{navLink.title}}</nuxt-link>
    </nav>
</template>

<style scoped>
    /* Nav Styles */
    .main-nav-bar {
        position: fixed;
        top: 0;
        right: -50%;
        width: 50%;
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
    .main-nav-bar.is-active {
        right: 0;
    }
</style>

<script>
export default {
  methods: {
      toggleMenus: function () {
          this.$store.commit('toggleMenu')
      }
  }
}
</script>
