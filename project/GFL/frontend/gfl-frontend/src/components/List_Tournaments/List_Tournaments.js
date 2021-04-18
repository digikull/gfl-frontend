

import React from 'react';
import axios from 'axios';


class List_Tournaments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/tournamentapi/").then(response => {
            this.setState({posts: response.data});
            console.log(response.data,"all Data",this.state.posts)
        });
    }

    render() {
        return (
            <div >
                
                        <h1>List tournament</h1>
                        
                        <label className="label">Username</label>

                        <ul >
                           
                                {this.state.posts.map((tournament_list_data) => (
                                     

                                     <div class="row">
                                     <div class="col-sm-6">
                                       <div class="card">
                                         <div class="card-body">
                                             
                                         <div class="card m-1 text-center"  >
                                   <h4>Name Of Tournament :- {tournament_list_data.tournament_name}  </h4><br/>
                                    <label>Tournament Template :- {tournament_list_data.tournament_template}</label><br/>
                                  <label>Tournament :- {tournament_list_data.tournament_class}</label>
                                   </div>
 


                                         </div>
                                       </div>
                                     </div></div>
                                   


                                     
                             
                                   ))}
                             
                        </ul>

                    </div>
 
        )
    }
}

export default List_Tournaments;


