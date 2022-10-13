import Item from "../Item/Item";
import './ItemList.css'


const ItemList = ({items}) => {
    return (
        <div className="container">
            {items.map((prod) =>{
                return <Item prod={prod} key={prod.id}></Item>;
            })}
        </div>
    )
}

export default ItemList;