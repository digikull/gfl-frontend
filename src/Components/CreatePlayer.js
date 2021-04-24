import React, {useState } from 'react'
import secureAxios from './APIService'
import Button from 'react-bootstrap/Button'
import {Link } from "react-router-dom";


function Form(props) {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const all={
        name,city,image,role
    }


    const insertPlayer = (body) =>{
        secureAxios.post("player-create/" , all)
        .then( resp => {
            setName('')
            setCity('')
            setRole('')
            setImage('')

        })
        .catch( err =>{console.log("error")})
   
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Create a New Player Here</h1>
            <div className="float-right"> <Button variant="warning"> <Link to={"/"}>Home</Link></Button> </div>
                <div className = "mb-3">
                    <label htmlFor = "name" className = "form-label">Name</label>
                    <input type="text" className = "form-control" id="name" placeholder="please enter the name"
                    value = {name} onChange = {e => setName(e.target.value)}
                    />
                    <label htmlFor = "role" className = "form-label">Role</label>
                    <input type="text" className = "form-control" id="role" placeholder="please enter the Role"
                    value = {role} onChange = {e => setRole(e.target.value)}
                    />
                    <label htmlFor = "image" className = "form-label">Image</label>
                    <input type="File" accept=".jpg" className = "form-control" id="image" placeholder="please provide image"
                    value = {image} onChange = {e => setImage(e.target.value)}
                    />
                    <label htmlFor = "city" className = "form-label">City</label>
                    <input type="text" className = "form-control" id="city" rows="5" placeholder="please enter the city"
                    value = {city} onChange = {e => setCity(e.target.value)}
                    ></input>
                    <br/>
                        <button onClick = {insertPlayer} className="btn btn-success"> Insert Player</button>
            </div>
       </div>
    )
    }

export default Form