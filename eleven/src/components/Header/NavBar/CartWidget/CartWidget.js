import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

function CartWidget(){
    
    const {allUnits} = useContext(CartContext)
    const units = allUnits();
    return (
        <div className='divCart'>
            <FontAwesomeIcon className='cartShopping' icon={faCartShopping} />
            <span className={units === 0 ? 'unitsCartDisplay':''}>{units}</span>
        </div>
    )
}

export default CartWidget; 