<template>
	<div id="full-pages">
		<FullPage id="events">
			<h1 class="title">
				Gallery
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
				fullPages: []
			})
		});

		pageData.then((pageData) => {
			context.app.store.dispatch("getPageData", pageData);
		}) 
		return pageData
	}
}
</script>

