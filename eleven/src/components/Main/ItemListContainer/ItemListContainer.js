import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {Productos} from '../../Mock/ProductosMock';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const ItemListContainer =({greeting}) =>{
    
    const [items, setItems] = useState([]);

    const {categoryName} = useParams();
    useEffect(()=>{
        const traerProductos = () => {
            return new Promise ((res,rej) =>{
                const prodFiltrados = Productos.filter((prod)=> prod.category === categoryName);

                setTimeout(() =>{
                    res(categoryName? prodFiltrados : Productos);
                }, 2000);              
            });
        };
        traerProductos()
            .then((res)=>{
                setItems(res);
            })
            .catch((error)=>{
                console.log(error);
            })
    },[categoryName]);
    return (
        <div>
            <h2 className='h2'>{greeting}</h2>
            <ItemList items={items}></ItemList>     
        </div>
    )
    
}

export default ItemListContainer;