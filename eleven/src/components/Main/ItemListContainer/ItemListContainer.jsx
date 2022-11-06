import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader";
import {collection, getDocs, query, where} from 'firebase/firestore';
import {database} from '../../../services/FirebaseConfig';

const ItemListContainer =({greeting}) =>{
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryName} = useParams();
    useEffect(()=>{
        const collectionProd = collection(database, 'Products');
        const referencia = categoryName
        ? query(collectionProd, where('category', '==', categoryName))
        :collectionProd;


        
        

        getDocs(referencia)
        .then((res)=>{
            const products = res.docs.map((prod)=>{
                return{
                    id: prod.id,
                    ...prod.data(),
                }
            })
            setItems(products);
        })

        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false);
        });
    }, [categoryName]);
        
        return (
            <div>
            {loading ? (
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
