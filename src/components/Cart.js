import React from "react";
import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";

const Cart =()=>{

    const {
        isEmpty,
        totalUniqueItems,
        cartTotal,
        items,
        updateItemQuantity,
        emptyCart,
        removeItem,
      } = useCart();

    const cart = useSelector(state=>{
       const cartState =  state.cart
       return cartState
    })

   
    if(isEmpty){
        return <h2>Your cart is empty</h2> 
    }

        return (
            <>
            <div>
                <h2>Total Items in Cart - {totalUniqueItems}</h2>
                {
                    items.map(ele=>{
                        return (
                            <div className="cartItems">
                                <img src={`${ele.image}`}/>
                                <p>{ele.title}</p>
                                <h2>{ele.price}$</h2>
                                <h3>Quantity - {`${ele.quantity}`}</h3>
                                <div>
                                    <div className="updateButton">

                                    <button onClick={()=>{
                                        updateItemQuantity(ele.id , ele.quantity + 1)
                                    }}>+</button>
                                    <button onClick={()=>{
                                        updateItemQuantity(ele.id , ele.quantity - 1)
                                    }}>-</button>
                                    </div>
                                <button onClick={()=>{removeItem(ele.id)}}>remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="cartTotal">
                <h2>Total Price - { Number((cartTotal).toFixed(2))}$</h2>
                <button onClick={()=>{emptyCart()}}>clear cart</button>
            </div>
            </>
            
        )
    
}

export default Cart