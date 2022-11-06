import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
import {serverTimestamp, collection, addDoc} from 'firebase/firestore';
import { database } from "../../../services/FirebaseConfig";
import './Form.css';


const Form = () => {
    const [orderID, setOrderID] = useState('');
    const [name, setName] =useState('');
    const [lastName, setLastName] =useState('');
    const{cart, totalPrice, deleteAllCart} = useContext(CartContext);

    
    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const orderInfo = {
            buyer:{name, lastName},
            items:cart,
            total:totalPrice(),
            date:serverTimestamp(),
        }
        
        const orderCollection = collection(database, 'orders')
        addDoc(orderCollection, orderInfo)
        .then((res)=>{
            setOrderID(res.id);
            deleteAllCart();
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    if(orderID){
        return(
            <div className="h1Container">
                <h1 className="h1Form">Gracias por tu compra! Tu número de seguimiento es: ${orderID}</h1>
            </div>
        )
    }

    return (
        <div className="formContainer">
            <h2 className="h2Form">Completá con tus datos para poder recibir la información sobre tu pedido</h2>
            <form onSubmit={handleSubmit} action="">
                <input className="inputForm" onChange={handleChangeName}
                type='text'
                name='nombre'
                placeholder='Nombre...'
                value={name}
                >
                </input>
                <input className="inputForm" onChange={handleChangeLastName}
                type='text'
                name='apellido'
                placeholder='Apellido...'
                value={lastName}
                >
                </input>
                <input className="inputForm"
                type='email'
                name='email'
                placeholder='Correo Electronico'
                >
                </input>
                <input className="inputForm"
                type='text'
                name='direccion'
                placeholder='Domicilio...'
                >
                </input>
                <input className="inputForm"
                type='text'
                name='telefono'
                placeholder='Teléfono de contacto...'
                >
                </input>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
    
}

export default Form;