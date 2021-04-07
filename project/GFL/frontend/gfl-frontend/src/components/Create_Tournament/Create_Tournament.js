import React from "react"; 
//import {toast} from "react-toastify";
//import {authenticationService} from "../services/authentication.services";
import {secureAxios} from "../secureAxios/secureAxios"
import 'bootstrap/dist/css/bootstrap.min.css';
 
import List_Tournaments from "../List_Tournaments/List_Tournaments"
import { Map, GoogleApiWrapper,InfoWindow, Marker,withScriptjs } from 'google-maps-react';

const mapStyles = {
  width: '30%',
  height: '20%'
};
 
const mystyle = {
 
 

}
    

 

class Create_Tournament extends React.Component {
  constructor(props) {
      super(props);
      
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.state = {

       
          showingInfoWindow: false,  // Hides or shows the InfoWindow
          activeMarker: {},          // Shows the active marker upon click
          selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
          
          location_flag: false


      };
  }
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  

  handleSubmit(e) {
      e.preventDefault();
     // const history = useHistory();
      const object = {
 //'tournament_name', 'tournament_type','tournament_class','tournament_total_team','tournament_template','tournament_datials','lat','lon']
     
          tournament_name:  e.target['tournament_name'].value,
          tournament_type:  e.target['tournament_type'].value,
          tournament_class:  e.target['tournament_class'].value,
          tournament_total_team:  e.target['tournament_total_team'].value,
          tournament_template:  e.target['tournament_template'].value,
          tournament_detials :  e.target['tournament_detials'].value,
          lat : 12.84, 
          lon : 12.96,
         // start_date: e.target['start_date'].value,
          //end_date: e.target['end_date'].value,
          

      };
      console.log(object.tournament_name,object)

     /* secureAxios
      .get("/tournamentapi")
      .then((res) => res.data)
      .then((data) => {
        console.log("fetching data",data)
      });
      secureAxios
      .post("/tournamentapi", object)
      .then((res) => res.data)
      .then((data) => {
        console.log(data, "fatch data"); 
      });
*/
  

 
     
secureAxios.Create_Tournament( object.tournament_name, object.tournament_type, object.tournament_class, object.tournament_total_team, object.tournament_template, object.tournament_detials, object.lat, object.lon)
.then(res => { 
  console.log("You have successfully Create Tournament.");
 
  this.props.history.push("/List_Tournaments");
  
   
})
.catch(function (error) {
    console.log("Not");
});
 
    }
    
  render() { 
      return (<div> 
            <div className="App">
            <div class="card-deck">

       {/*     <div className="phase1" style ={ { backgroundImage: "url('https://www.imagiaffichage.com/wp-content/uploads/2016/03/imagi-logo.png')" } }>
</div>*/}
  <div class="card m-5"  >
  <div class="card-body bg-light text-center m-5">
        <div class="card-body bg-primary m-5">
     <h5 class="card-title">Create Your Tournament</h5>



   <form onSubmit={this.handleSubmit}>
     
 <img src="https://as1.ftcdn.net/jpg/02/57/58/36/500_F_257583652_I8hFblDpM4OQrYq3nGFCw3w5bUfvBbkK.jpg" class="img-fluid rounded float-left m-4" alt="Responsive image" width="350"/>
 

 
<div class="p-3 mb-2 bg-light text-dark">
 
<h4>Welcome to Gully Fantasy Cricket League</h4>
<p> Organize and manage your Cricket tournament. Get the best Cricket platforms to manage Your Tournament. </p>
<div class="form-row">
    <div class="form-group col-md-6">
     <label className="label"><b>Tournament name </b></label> <input 
     type="text" class="form-control"
     name="tournament_name"
     placeholder="Tournament name" /> 
    </div>
    <div class="form-group col-md-6">
    <label className="label"><b>Tournament Total Team</b></label>
      <input 
     type="number" class="form-control"
     name="tournament_total_team"
     placeholder=" Enter Total Team" /> 
 </div>
  </div>

 

      <label className="label m-3"><b>Tournament Class</b></label>
      <select  name="tournament_class" >
        <option value="0">Please Select Type</option>
        <option value="Gully">Gully</option>
        <option value="School">School</option>
        <option value="Corporate">Corporate</option>
        <option value="Sponsored">Sponsored</option> 
        <option value="District">District</option>
        <option value="State">State</option>
        <option value="Other">Other</option>
      </select><br/>
      
 
     
<label className="label"><b>Tournament Template</b></label>
<select  name="tournament_template" >
        <option > Select Template</option>
        <option value="knock down">knock down</option>
        <option value="league">league</option>
        <option value="Other">Other</option>

      </select><br/>

 
     
    
      
      <hr className="border-warning"/>

 
 
      <label className="label m-3"> <b>Tournament Type</b> </label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="tournament_type" value="0" checked/>
          <label class="form-check-label"  for="Public">
          <b>Public</b>  
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="tournament_type" value="1"/>
          <label class="form-check-label" for="Privete">
          <b>Privete</b>  
          </label>
        </div>
     



  
        <label className="labelm-3"><b>Tournament Start Date</b></label>
  <input type="date"  />

  <label className="label m-3"><b>Tournament End Date</b></label>
  <input type="date"/><br/>
     
        <label className="label"><b><u>Tournament Details</u></b></label>

        <textarea class="form-control" name="tournament_detials" placeholder="Enter Tournament Details... " />
       <br/>
<button className="btn btn-warning m-2" type="button" onClick={() =>{this.setState({location_flag:true})}} > Select Tournament Location</button>
<div>
{this.state.location_flag === true && 
             <div><Map
             google={this.props.google}
             zoom={14}
             style={mapStyles}
             initialCenter={
               {
                 lat: 2.12, 
                 lng: 7.15 
               }
             }
           >
             <Marker
               onClick={this.onMarkerClick}
               name={'Nagpur Centre'}
             />
             <InfoWindow
               marker={this.state.activeMarker}
               visible={this.state.showingInfoWindow}
               onClose={this.onClose}
             >
               <div>
                 <h4>{this.state.selectedPlace.name}</h4>
               </div>
             </InfoWindow>
           </Map>   </div>
}

</div>

    
 <div className="control">
     <button className="btn btn-primary">Submit</button>
     </div>
 </div>
</form>
</div>
</div> </div>
</div>  </div>

</div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfkGTl0-EvlzhhBNWs6Mp08Qef68QpVUI'
})(Create_Tournament);
//export default Create_Tournament;