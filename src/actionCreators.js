import axios from 'axios';

/* redux-thunk, instala un middleware que hachea el action 
 para que uno pueda, en vez desde el actionCreator un action,
 retornar una función que pueda hacer llamados asincronas.
*/ 
const loadProducts = () => {
	return dispatch => {
		return axios.get("http://localhost:3001/products")
		.then( res => {
			dispatch({
				type: 'REPLACE_PRODUCTS',
      			products: res.data
			})
		});
	};
}

const addToCart = product => {
	return {
      type: 'ADD_TO_CAR',
      product
    }
}

const removeFromCart = product => {
	return {
      type: 'REMOVE_FROM_CAR',
      product
    }
}

export {loadProducts, addToCart, removeFromCart};
