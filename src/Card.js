import React from 'react'
import './Card.css'

// functional component
// functional component + css 
// reusable functional component + css
const Card = ({title, text}) => {
    return(
        <div className='card'>
            <h1 className='card-h1'>    {title}   
            </h1>
            <p className='card-p'>
            {text}
            </p>
        </div>
    )
}

export default Card 