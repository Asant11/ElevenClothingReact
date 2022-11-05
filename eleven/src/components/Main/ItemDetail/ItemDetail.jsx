import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';


const ItemDetail = ({item}) =>{

    const [cantProductos, setCantProductos] = useState(0);

    const {addProductToCart} = useContext(CartContext);

    const addToCart = (cantidad) =>{
        // console.log(`Agregaste ${cantidad} unidades al carrito!`);   /*SweetAlert*/
        setCantProductos(cantidad);
        addProductToCart(item, cantidad);
    };

    return(
            <div className='item-detail'>
            <img src={item.img} className="item-detail-img"/>
            <div className='item-detail-info'>
                <h2 className="item-name">{item.name}</h2>
                <p className='item-price'>${item.price}</p>
                <p className='item-desc'>{item.description}</p>
                {cantProductos === 0? (<ItemCount addToCart={addToCart} stock={10} initial={0}/>):(<Link to="/cart"><button className="irAlCarrito">Ir al Carrito</button></Link>)}
            </div>   
        </div>
    )
    
}

export default ItemDetail;