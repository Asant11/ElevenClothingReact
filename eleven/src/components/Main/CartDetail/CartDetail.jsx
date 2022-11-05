
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../../context/CartContext';
import './CartDetail.css';


const CartDetail = ({prod}) =>{
    const {deleteOneProd} = useContext(CartContext);
    return(       
        <div className='detailContainer'>
            <img className='imgDetail' src={prod.img} alt={prod.title}/>
            <h2>{prod.title}</h2>
            <h3>${prod.price}</h3>
            <h3>Cantidad: {prod.cantidad}</h3>
            <h3>Subtotal: ${prod.price * prod.cantidad}</h3>
            <button onClick={()=>deleteOneProd(prod.id)}>Borrar Producto</button>
        </div>
    )
}

export default CartDetail;