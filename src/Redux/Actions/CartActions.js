export const addCartItem= item=>{return {type: 'ADDITEMTOCART', payload: item}}
export const incrementQuantity= item=>{return {type: 'INCREMENTQUANTITY', payload: item}}
export const decrementQuantity= item=>{return {type: 'DECREMENTQUANTITY', payload: item}}
export const removeCartItem= item=>{return {type: 'REMOVECARTITEM', payload: item}}
export const emptyCart= ()=>{return {type: 'EMPTYCART'}}