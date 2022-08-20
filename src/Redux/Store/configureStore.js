import {createStore, combineReducers} from 'redux'
import { cartReducer } from '../Reducers/CartReducer'
import { foodReducer } from '../Reducers/FoodReducer'

const saveToLocalStorage = (state) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
};
  
const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('state');
      return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
};

const persistedStore = loadFromLocalStorage();

export const configureStore=()=>{
    const store=createStore(combineReducers({
        foodItems: foodReducer,
        cartItems: cartReducer,
    }), persistedStore)
    
    store.subscribe(() => {
        saveToLocalStorage(store.getState());
    });
      
    return store
}
