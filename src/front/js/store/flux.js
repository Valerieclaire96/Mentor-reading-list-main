const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			item: "",
			description: {},
			favorites: []
			},
		actions: {
			// Use getActions to call a function within a fuction
			fetchDescription: (e) => {
				fetch(e)
				  .then((res) => {
					return res.json();
				  })
				  .then((data) => {
					setStore({
					  favorites: getStore().favorites,
					  item: getStore().item,
					  description: data.result.properties,
					});
				  });
			  },
			  setItem: (e) => {
				setStore({
				  favorites: getStore().favorites,
				  item: e,
				  description: getStore().description,
				});
			  },
			addFavorite: (e) => {
				console.log(e);
				setStore({
				  favorites: [ ...getStore().favorites, e ],
				  item: getStore().item,
				  description: getStore().description, 
				  
				});
			  },
			  removeFavorite: (e) => {
				setStore({
				  favorites: getStore().favorites.filter((x) => {
					return x != e;
				  }),
				  item: getStore().item,
				  description: getStore().description,
				});
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
