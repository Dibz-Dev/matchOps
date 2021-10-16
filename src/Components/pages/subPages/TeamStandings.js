import LeagueList from "../../SubComponents/LeagueList";
import { useState } from 'react';
import { useSelector } from "react-redux";

import useFetch from "../../../useFetch";
import LoadingPage from "../../LoadingPage";

const TeamStandings = () => {
    
    const League = useSelector(state => state.League)
  
    const {data, err, loading} = useFetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=${League}`);

    console.log(data.response)
             
 return (

    <div>
        
        <LeagueList />
        
        <div className="teamStandingsCardWrapper">
            <div className="tableTitles">
                <h4>Points</h4><h4>Goals</h4><h4>Form</h4>
            </div>
            
                 {loading ? <LoadingPage /> : data.response[0].league.standings[0].map(item => (
                     <div style={{ display: 'flex'}}>
                         <h3 className='rankCard' key={item.rank}> {item.rank} </h3>
                           <div className="teamStandingsCard">
                          
                                <div className="standingsStat" style={{ display: 'flex', justifyContent: 'start'}}>
                                <img className="logoSize" key={item.logo} src={item.team.logo} alt="" />
                                    <span className='nameCard' key={item.name}>{item.team.name}</span>
                                </div>
                                <div className="standingsStat">
                                    <span key={item.points}>{item.points}</span>
                                </div>
                                <div className="standingsStat">
                                    <span key={item.goalDiff}>{item.all.goals.for} - {item.all.goals.against}</span>
                                </div>
                                <div className="standingsStat">
                                    <span key={item.form}>{item.form}</span>
                                </div>
                            </div>  
                                      
                     </div>
                  )) 
                  }                
        </div>
    </div>
    ) }

 
export default TeamStandings;


