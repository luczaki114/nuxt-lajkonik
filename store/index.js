import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			isMenuOpen: false,
			menu: [
				{
					title: "Home",
					to: "/",
					subLinks: [],
					internalLinks: [
						{
							name: "Home",
							to: "#home"
						},
						{
							name: "About",
							to: "#about"
						},
						{
							name: "Events",
							to: "#events"
						}
					]
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
			]
		},
		mutations: {
			toggleMenu (state) {
				state.isMenuOpen = !state.isMenuOpen
			}
		},
		getters: {
			getSubMenu: (state, path) => {
				return state.menu.filter(menu => menu.to == path)
			}
		}
	})
}

export default createStore