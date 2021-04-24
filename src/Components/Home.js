
import {useEffect, useState} from 'react'
import secureAxios from './APIService'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { BrowserRouter, Route, Link, Router } from "react-router-dom";


function Home(props) {

    const [Player ,setPlayer] =useState([])
    
    useEffect(() => {
      secureAxios.get("player-list/")
      .then( resp =>{setPlayer(resp.data)})
  
    },[])

    function deletePlayer(id){
      secureAxios.delete(`player-delete/${id}`)
      .then( resp =>{
        secureAxios.get("player-list/")
            .then( resp =>{setPlayer(resp.data)})
      })
            
    }
  
    return (
      <div className="App">
       <h1 style={{textAlign:"center"}}>List of All Players</h1>
        <div className="float-right"> <Button variant="warning"> <Link to={"/Form"}>Insert New PLayer</Link></Button> </div>
        <div>
            {Player.map( i =>{ return(<Card  className="float-left" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={i.image} /> 
                <Card.Body>
                  <Card.Title>{i.name}</Card.Title>
                  <Card.Text>
                    {i.city}
                  </Card.Text>
                  <Card.Text>
                    {i.role}
                  </Card.Text>
                  <Button variant="primary" > <Link to={`/Update/${i.id}/`}>Update</Link></Button>
                  <Button variant="primary" onClick={ ()=> deletePlayer(i.id)}>Delete</Button>
                </Card.Body>
              </Card>   )})}
        </div>
      </div>
    );
  }
  
  export default Home