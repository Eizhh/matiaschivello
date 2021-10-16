import React from 'react'

export const ItemDetail= ({id, name, price, img, description}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>
            
        </div>
    )
}
