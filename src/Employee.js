import React from 'react'

const Employee=(props) =>{
return(
    <div style ={{border: "2px solid black"}}>
    <p>Id: {props.id}</p>
    <p>Status: {props.isActive}</p>
    <p>Age: {props.age}</p>
    <p>Name: {props.name}</p>
    <p>Company: {props.company}</p>
    <p>E-mail: {props.email}</p>
    </div>
)
}

export default Employee