import {createStore, applyMiddleware, combineReducers} from 'redux';

/* redux-thunk, instala un middleware que hachea el action 
 para que uno pueda, en vez desde el actionCreator un action,
 retornar una función que pueda hacer llamados asincronas
*/ 
import thunk from 'redux-thunk';

const products = (state=[], action) => {
	if (action.type === "REPLACE_PRODUCTS") 
		return action.products;
	return state;
}

const cart = (state=[], action) => {
	if (action.type === 'ADD_TO_CAR')
			return state.concat(action.product);
	else 
		if (action.type === 'REMOVE_FROM_CAR') 
			return state.filter(product =>	product.id !== action.product.id);
	return state;
}

/**
The final Approach
www.redux.js.org/docs/advanced/Middleware.html
Funcion que recibe el store de redux,
Esta funcion recibe otra función que recibe un next
y esta a su vez recibe un action
**/
const logger = store => next => action =>{
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

export default createStore(combineReducers({cart, products}), applyMiddleware(logger, thunk));