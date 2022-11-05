import { useState } from "react";
import './ItemCount.css';
const ItemCount = (props) =>{


    const [contador, setContador] = useState (props.initial);

    const sumar = () =>{
        
        contador < props.stock? setContador(contador + 1): alert('No queda más stock!')
    }

    const restar = () =>{
        contador>props.initial && setContador(contador - 1);
        
    }

    const agregarCarrito = () => {
        props.stock > 1 && props.addToCart(contador);
    }



    return(
        <div>
            <h2 className="contador">{contador}</h2>
            <div className="divContador">
                <button className="restar"onClick={restar}>-</button>
                <button className="agregarCarrito" onClick={()=> agregarCarrito()}>Agregar al Carrito</button>
                <button className="sumar"onClick={sumar} >+</button>
            </div>
        </div>
        
    )
}

export default ItemCount;