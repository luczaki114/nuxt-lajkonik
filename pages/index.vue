<template>
	<div class="full-pages">
		<!-- <FullPage v-for="fullPage in fullPages" :key="fullPage.id" :id="fullPage.id">
			<h1 class="title">
				{{fullPage.title}}
			</h1>
			<h2 class="subtitle">
				{{fullPage.subTitle}}
			</h2>		
		</FullPage> -->
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
		let promise1 = new Promise((resolve, reject) => {
			setTimeout(() => {
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
			}, 50);
		});
		promise1.then((data) => {
			let menu = [];
			data.fullPages.map((fullPage) => {
				let page = {};
				page["name"] = fullPage.title;
				page["to"] = '#' + fullPage.id;
				menu.push(page);
			})
			context.app.store.commit("setMenu", menu);
		}) 
		return promise1
	}
}
</script>

