import { useState } from "react";

const Form = () => {
    
    const [name, setName] =useState('');
    const [lastName, setLastName] =useState('');

    
    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }

    console.log(name, lastName);
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleChangeName}
                type='text'
                name='nombre'
                placeholder='Nombre...'
                value={name}
                >
                </input>
                <input onChange={handleChangeLastName}
                type='text'
                name='apellido'
                placeholder='Apellido...'
                value={lastName}
                >
                </input>
                <input
                type='email'
                name='email'
                placeholder='Correo Electronico'
                >
                </input>
                <input
                type='text'
                name='direccion'
                placeholder='Domicilio...'
                >
                </input>
                <input
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