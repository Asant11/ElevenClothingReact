
import ItemDetail from '../ItemDetail/ItemDetail';
import { Productos } from '../../Mock/ProductosMock';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const ItemDetailContainer =() =>{
    
    const [item, setItem] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        const traerProducto = () => {
            return new Promise ((res,rej) =>{
                const producto = Productos.find((prod)=>prod.id === Number(id))
                setTimeout(() =>{
                    res(producto);
                }, 2000);              
            });
        };
        traerProducto()
            .then((res)=>{
                setItem(res);
            })
            .catch((error)=>{
                console.log(error);
            })
    })
    return (
        <div>
            <ItemDetail item={item}></ItemDetail>     
        </div>
    )
    
}

export default ItemDetailContainer;
