<template>
    <div class="sub-nav-bar">
        <a
            v-for="subNavLink in getSubMenu.internalLinks" 
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
        height: 52px;
    }
    .sub-nav-bar a {
        margin: 10px;
        cursor: pointer;
    }
</style>

<script>
export default {
    methods: {
        scrollTo(id) {
            if (id !== this.$route.hash) {
                this.$router.push(this.$route.fullPath.split('#')[0] + id)
            }
            this.$nextTick(() => {
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
            })
        }
    },
    computed: {
        getSubMenu: function () {
            return this.$store.state.menu.find(subMenu => subMenu.to == this.$route.path)
        }
    }
}
</script>

