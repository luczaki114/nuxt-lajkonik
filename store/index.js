import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			isMenuOpen: false,
			subMenu: [],
			menu: [
				{
					title: "Home",
					to: "/"
				},
				{
					title: "About",
					to: "/about",
					subLinks: [],
					internalLinks: [
						{
							name: "About",
							to: "#about"
						},
						{
							name: "Press",
							to: "#press"
						},
						{
							name: "Craft Workshops",
							to: "#craft-workshops"
						}
					]
				},
				{
					title: "Events",
					to: "/events",
					subLinks: [],
					internalLinks: [
						{
							name: "Events",
							to: "#events"
						},
						{
							name: "Performance",
							to: "#performance"
						},
						{
							name: "Videos",
							to: "#videos"
						}
					]
				},
				{
					title: "Gallery",
					to: "/gallery"
				}
			]
		},
		mutations: {
			toggleMenu (state) {
				state.isMenuOpen = !state.isMenuOpen
			},
			setMenu(state, menu) {
				state.subMenu = menu
			}
		}
	})
}

export default createStore