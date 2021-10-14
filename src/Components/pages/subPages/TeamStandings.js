import LeagueList from "../../SubComponents/LeagueList";
import { useState } from 'react';
import { useSelector } from "react-redux";

import useFetch from "../../../useFetch";
import LoadingPage from "../../LoadingPage";

const TeamStandings = () => {
    
    const League = useSelector(state => state.League)
  
    const {data, err, loading} = useFetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=${League}`);

             
 return (

    <div>
        
        <LeagueList />
        
        <div className="teamStandingsCardWrapper">
            
                 {loading ? <LoadingPage /> : data.response[0].league.standings[0].map(item => (
                           <div className="teamStandingsCard">
                               <h2 className='rankCard' key={item.rank}> {item.rank} </h2>
                                <h2 className='nameCard' key={item.name}>{item.team.name}</h2>
                                <img key={item.logo} src={item.team.logo} alt="" />
                                      
                            </div>
                  )) 
                  }                
        </div>
    </div>
    ) }

 
export default TeamStandings;


