import React from 'react'

function IdCard(props){
    let lastName = props.lastName
    let firstName = props.firstName
    let gender = props.gender
    let height = props.height
    let birth = props.birth
    let picture = props.picture;
    
    return (
        <div className="id-card">
            <div>
                <img src={picture} />
            </div>
            <div>
                <div><strong>First Name:</strong> {firstName}</div>
                <div><strong>Last name:</strong>  {lastName}</div>
                <div><strong>Gender:</strong>  {gender}</div>
                <div><strong>Height:</strong>  {height}</div>
                <div><strong>Birth:</strong>  {birth.toDateString()}</div>
            </div>
        </div>
    )
}

export default IdCard