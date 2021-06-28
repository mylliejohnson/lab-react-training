import React from 'react'

function Random(props){

    return (<div className="random"> Random value between {props.min} and {props.max} → {Math.floor(Math.random(props.min) * props.max)}</div>)
}

export default Random