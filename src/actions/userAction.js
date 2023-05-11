export const register =(n)=>{
return {
    type : 'REGISTER',
    payload : n
}
}

export const addToCart =(n)=>{
    return {
        type : 'ADD_TO_CART',
        payload : n
    }
}