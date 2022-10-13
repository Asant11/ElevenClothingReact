import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';


const ItemDetail = ({item}) =>{
    return(
            <div className='item-detail'>
            <img src={item.img} className="item-detail-img"/>
            <div className='item-detail-info'>
                <h2 className="item-name">{item.name}</h2>
                <p className='item-price'>${item.price}</p>
                <p className='item-desc'>{item.description}</p>
                <ItemCount stock={10} initial={1}/>
            </div>   
        </div>
    )
    
}

export default ItemDetail;