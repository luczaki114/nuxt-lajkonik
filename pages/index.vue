<template>
	<div class="full-pages">
		<FullPage :id="fullPages[0].id">
			<logo/>
			<h1 class="title">
				{{fullPages[0].actualTitle}}
			</h1>
			<h2 class="subtitle">
				{{fullPages[0].subTitle}}
			</h2>	
		</FullPage>
		<FullPage :id="fullPages[1].id">
			<h1 class="title">
				{{fullPages[1].title}}
			</h1>
			<h2 class="subtitle">
				{{fullPages[1].subTitle}}
			</h2>	
		</FullPage>
		<FullPage :id="fullPages[2].id">
			<h1 class="title">
				{{fullPages[2].title}}
			</h1>
			<h2 class="subtitle">
				{{fullPages[2].subTitle}}
			</h2>	
		</FullPage>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import FullPage from '@/components/Fullpage'

export default {
	components: {
		Logo,
		FullPage
	},
	asyncData(context) {
		let pageData = new Promise((resolve, reject) => {
			resolve({
				fullPages: [
					{
						title: "Video",
						id: "video",
						actualTitle: "Lajkonik",
						subTitle: "Song & Dance Ensemble"
					},
					{
						id: "overview",
						title: "Overview",
						subTitle: "Who we Are"
					},
					{
						id: "events",
						title: "Events",
						subTitle: "Here is where you'll find us"
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

