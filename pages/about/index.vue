<template>
	<div id="full-pages">
		<FullPage id="about">
			<h1 class="title">
				About
			</h1>
		</FullPage>
		<FullPage id="press">
			<h1 class="title">
				Press
			</h1>
		</FullPage>
		<FullPage id="craft-workshops">
			<h1 class="title">
				Craft Workshops
			</h1>
		</FullPage>
	</div>
</template>

<script>
import FullPage from '@/components/Fullpage'

export default {
	components: {
		FullPage
	},
	asyncData(context) {
		let pageData = new Promise((resolve, reject) => {
			resolve({
				fullPages: [
							{
								title: "About",
								id: "about"
							},
							{
								title: "Press",
								id: "press"
							},
							{
								title: "Craft Workshops",
								id: "craft-workshops"
							}
						]
			})
		});

		pageData.then((pageData) => {
			context.app.store.dispatch("getPageData", pageData);
		}) 
		return pageData
	}
}
</script>