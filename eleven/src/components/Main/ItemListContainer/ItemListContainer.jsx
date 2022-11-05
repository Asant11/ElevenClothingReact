import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {Productos} from '../../Mock/ProductosMock';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader";;

const ItemListContainer =({greeting}) =>{
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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

        .finally(()=>{
            setLoading(false);
        })
    },[categoryName]);
    return (
        <div>
            {loading ? (
                // <h1 className='loader'>Cargando...</h1>
                <div className='divLoader'>
                    <h2 className='h2'>{greeting}</h2>
                    <MoonLoader 
                        color="#f0f7f6"
                        speedMultiplier={1.5}
                    />
                </div>
            ) : 
            (<div>
                <h2 className='h2'>{greeting}</h2>
                <ItemList items={items}></ItemList>     
            </div>)}
        </div>
        
    )
    
}

export default ItemListContainer;