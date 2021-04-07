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
            console.log(response.data,"all Data")
        });
    }

    render() {
        return (
            <div >
                
                        <h1>List tournament</h1>
                        
                        <label className="label">Username</label>
                    </div>
 
        )
    }
}

export default List_Tournaments;