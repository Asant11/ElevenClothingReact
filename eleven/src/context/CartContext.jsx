import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addProductToCart = (item, cantidad) => {
        
        const producto = {...item, cantidad};

        if(inTheCart(producto.id)){
            addQuantity(producto);
        }
        else{
            setCart([...cart, producto]);
        }
    }

    const addQuantity = (addedProd) =>{
        const updatedCart = cart.map((cartProd)=>{
            if (cartProd.id === addedProd.id) {
                const updatedProd= {
                    ...cartProd, 
                    cantidad: cartProd.cantidad + addedProd.cantidad
                }
                return updatedProd;
            } else {
                return addedProd;
            }
        })
        
        setCart(updatedCart);
    }



    const inTheCart = (id) => cart.some((prod) => prod.id === id);

    const deleteAllCart = () =>{
        setCart([]);
    }

    const deleteOneProd = (id) =>{
        const filteredCart = cart.filter((prod)=>prod.id !== id);
        setCart(filteredCart);
    }
    
    const allUnits = () => {
        let acc = 0;
        const cartCopy = [...cart];
        {cartCopy.forEach((prod)=>{
            acc += prod.cantidad;
        })}
        return acc;
    }

    const totalPrice = () =>{
        let acc = 0;
        const cartCopy = [...cart];
        {cartCopy.forEach((prod)=>{
            acc += prod.price * prod.cantidad;
        })}
        return acc;
    }

    console.log(cart);
    //funciones y estados
    
    return(
        <CartContext.Provider value={{cart, addProductToCart, deleteAllCart, deleteOneProd, allUnits, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;
