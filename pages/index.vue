<template>
	<div class="full-pages">
		<div id="home" class="full-page">
			<logo/>
			<h1 class="title">
				{{title}}
			</h1>
			<h2 class="subtitle">
				{{subTitle}}
			</h2>
		</div>
		<div id="about" class="full-page">
			<h1 class="title">
				About
			</h1>
		</div>
		<div id="events" class="full-page">
			<h1 class="title">
				Events
			</h1>
		</div>
	</div>
</template>

<style>
	.full-page {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo
	},
	data() {
		return {
			title: "Lajkonik",
			subTitle: "Song & Dance Ensemble"
		}
	}
}
</script>

