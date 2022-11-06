
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {collection, doc, getDoc} from 'firebase/firestore';
import {database} from '../../../services/FirebaseConfig';

const ItemDetailContainer =() =>{
    
    const [item, setItem] = useState({});

    const {id} = useParams();

    useEffect(()=>{
    
        const collectionProd = collection (database, 'Products');
        const ref = doc(collectionProd, id);
        getDoc(ref)
        .then((res)=>{
            setItem({ 
                id: res.id,
                ...res.data()
            });          
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [id]);
    return (
        <div>
            <ItemDetail item={item}></ItemDetail>     
        </div>
    )
    
}

export default ItemDetailContainer;
