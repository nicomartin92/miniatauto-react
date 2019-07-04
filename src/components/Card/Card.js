import React from 'react'
import './Card.scss'

const Card = (props) => {
    console.warn('list', props)

    return (
        <div className="card">
            <img src={props.list.imgUrl} alt="" />
            <h3>{props.list.title}</h3>
            <p>{props.list.view}</p>
            <p style={{display: !props.list.year && "none"}}>{props.list.year}</p>
        </div>
    )
}

export default Card