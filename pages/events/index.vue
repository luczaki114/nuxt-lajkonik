<template>
	<div id="full-pages">
		<FullPage id="events">
			<h1 class="title">
				Events
			</h1>
		</FullPage>
		<FullPage id="performance">
			<h1 class="title">
				Performance
			</h1>
		</FullPage>
		<FullPage id="videos">
			<h1 class="title">
				Videos
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
						title: "Events",
						id: "events"
					},
					{
						title: "Something",
						id: "something"
					},
					{
						title: "Other Thing",
						id: "other-thing"
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

