const initialCartState=[]

export const cartReducer= (state=initialCartState, action)=>{
    switch(action.type) {
        case 'ADDITEMTOCART': return [...state, {...action.payload}]
        case 'INCREMENTQUANTITY': return state.map(item=>{
            if(item.name===action.payload.name) return {...item, quantity: item.quantity+1, price: item.price+item.itemPrice}
            else return {...item}
        })
        case 'DECREMENTQUANTITY': return state.map(item=>{
            if(item.name===action.payload.name) return {...item, quantity: item.quantity-1, price: item.price-item.itemPrice}
            else return {...item}
        })
        case 'REMOVECARTITEM': return state.filter(item=>item.name!==action.payload.name)
        case 'EMPTYCART': return []
        default: {return state}
    }
}