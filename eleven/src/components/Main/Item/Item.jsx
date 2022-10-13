import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';


const Item = ({prod}) => {
    return (
    <>
        <article className="card">
            <img className="imagen"src={prod.img} alt={prod.name} />
            <div className="card-info">
                <h2 className="card__text">{prod.name}</h2>
                <h3 className="card__text">${prod.price}</h3>
                <h5 className="card__descripition">{prod.description}</h5>
                <Link to={`item/${prod.id}`} className="verDetalle">Ver Detalle</Link>
            </div>
        </article>
        </>
    )
}

export default Item;