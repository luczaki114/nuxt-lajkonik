<template>
	<div @click="closeOpenedMenu">
		<TheMainNavigation />
		<section class="container" v-bind:class="{'is-active': $store.state.isMenuOpen }" >
			<TheHeader />
			<nuxt />
		</section>
	</div>
</template>

<style>
* {
	box-sizing: border-box;
}

img {
	width: 100%;
}

a,
a:hover,
a:focus {
	color: black;
	text-decoration: none;
	outline: none;
}

.container {
	position: relative;
	top: 0;
	right: 0;
	width: 100%;
	-moz-transition:all 200ms ease-in;
	-webkit-transition:all 200ms ease-in;
	-o-transition:all 200ms ease-in;
	transition:all 200ms ease-in;
}
.container.is-active {
	right: 50%;
}
</style>

<script>
import TheHeader from '@/components/TheHeader'
import TheMainNavigation from '@/components/TheMainNavigation'
export default {
	components: {
		TheHeader,
		TheMainNavigation
	},
	methods: {
		closeOpenedMenu: function (event) {
			console.log("closing opened menu")
			let thisTag = event.target;
			let targetInsideMenu = false;
			while(thisTag.tagName !== "HTML") 
			{
				if (thisTag.className.indexOf("main-nav-bar") >= 0 || thisTag.id == "toggle") {
					targetInsideMenu = true;
				}
				thisTag=thisTag.parentNode;
			} 

			if (this.$store.state.isMenuOpen == true && targetInsideMenu == false ) {
				this.$store.commit('toggleMenu')
			}      
		}
	}
}
</script>
