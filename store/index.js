import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			isMenuOpen: false,
			mainMenu: [],
			subMenu: [],
			pageData: {}
		},
		mutations: {
			toggleMenu (state) {
				state.isMenuOpen = !state.isMenuOpen
			},
			setMainMenu(state, menu) {
				state.mainMenu = menu
			},
			setSubMenu(state, menu) {
				state.subMenu = menu
			},
			setPageData(state, pageData) {
				state.pageData = pageData
			}
		},
		actions: {
			getMainMenu(context) {
				let menu = [
					{
						title: "Home",
						to: "/"
					},
					{
						title: "About",
						to: "/about"
					},
					{
						title: "Events",
						to: "/events"
					},
					{
						title: "Gallery",
						to: "/gallery"
					}
				]
				context.commit("setMainMenu", menu)
			},
			getPageData(context, pageData) {
				let subMenu = [];
				pageData.fullPages.map((fullPage) => {
					let page = {};
					page["name"] = fullPage.title;
					page["to"] = '#' + fullPage.id;
					subMenu.push(page);
				})
				context.commit("setSubMenu", subMenu);
				context.commit('setPageData', pageData)
			}
		}
	})
}

export default createStore