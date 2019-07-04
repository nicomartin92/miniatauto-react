import React from 'react'

const Card = (props) => {
    console.warn('list', props)
    return (
        <div className="card">
            <img src={props.list.imgUrl} alt="" />
            <h3>{props.list.title}</h3>
            <p>{props.list.view}</p>
        </div>
    )
}

export default Card