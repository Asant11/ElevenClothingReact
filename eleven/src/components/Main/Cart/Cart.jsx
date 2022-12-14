import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import './Cart.css';

const Cart = () => {
    const {cart, deleteAllCart, totalPrice} = useContext(CartContext);

    if(cart.length===0){
        return(
            <div className="emptyCartContainer">
                <h2 className="h2Empty">Aún no hay nada en el carrito!</h2>
                <Link to='/'>
                    <button>Volvé y seleccioná los productos que quieras comprar</button>
                </Link>
            </div>
        )
    }

    return(
        <div className="cartContainer">
            {
                cart.map((prod)=>(
                    <CartDetail prod={prod}/>
                ))
            }
            <h3 className="h3Total">Total: $ {totalPrice()}</h3>
            <div className="buttonsContainer">
                <button onClick={deleteAllCart}>Limpiar el Carrito</button>
                <Link to='/checkout'>
                    <button>Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart;