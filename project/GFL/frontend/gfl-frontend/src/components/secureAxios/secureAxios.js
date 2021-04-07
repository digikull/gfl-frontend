import axios from "axios";

 
export const secureAxios = {
  Create_Tournament,
    
};

 

function Create_Tournament(tournament_name,tournament_type,tournament_class,tournament_total_team,tournament_template,tournament_detials,lat,lon) {
    const object = {
        tournament_name:tournament_name,
        tournament_type:tournament_type, 
        tournament_class:tournament_class,
        tournament_total_team:tournament_total_team,
        tournament_template:tournament_template, 
        tournament_detials:tournament_detials,
        lat:lat,
        lon:lon,
       
    };

    return axios.post('http://127.0.0.1:8000/api/tournamentapi/', object)
        .then(res => {
            return res.data;
        })
}

 

