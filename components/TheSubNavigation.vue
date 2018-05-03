<template>
    <div class="sub-nav-bar">
        <a
            v-for="subNavLink in $store.state.subMenu" 
            v-bind:class="{'is-active': isSubRouteActive(subNavLink.to)}"
            :key="subNavLink.name" 
            @click.prevent="scrollTo(subNavLink.to)"
        >
            {{subNavLink.name}}
        </a>
    </div>
</template>

<style scoped>
    .sub-nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 52px;
        background-color: lightgray;
        height: 32px;
    }
    .sub-nav-bar a {
        margin: 0 10px;
        cursor: pointer;
    }
    .sub-nav-bar a:first-child {
        margin-left: 20px
    }
    .sub-nav-bar a:last-child {
        margin-right: 20px
    }
    .sub-nav-bar a.is-active {
        color: darkgoldenrod;
    }
</style>

<script>
export default {
    watch: {
        $route: 'isSubRouteActive'
    },
    methods: {
        nextTick(id) {
            var el = document.getElementById(id.slice(1))
            if (!el) return
            var to = el.offsetTop - 25
            var doc = document.documentElement
            var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
            var diff = (to > top ? to - top : top - to) / 25
            var i = 0
            window.clearInterval(this.setInter)
            this.setInter = window.setInterval(() => {
            top = (to > top) ? top + diff : top - diff
            window.scrollTo(0, top)
            i++
            if (i === 25) {
                window.clearInterval(this.setInter)
            }
            }, 10)
        },
        scrollTo(id) {
            if (id !== this.$route.hash) {
                this.$router.replace(this.$route.fullPath.split('#')[0] + id)
            }
            this.nextTick(id);
        },
        isSubRouteActive(subNavLink) {
            return subNavLink === this.$route.hash
        }
    }
}
</script>

