import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';

function CartWidget(){
    return (
        <div>
            <FontAwesomeIcon className='cartShopping' icon={faCartShopping} />
        </div>
    )
}

export default CartWidget; 