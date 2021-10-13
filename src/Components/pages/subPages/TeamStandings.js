import LeagueList from "../../SubComponents/LeagueList";
import { useState } from 'react';

import useFetch from "../../../useFetch";
import PlayerPanel from "../../SubComponents/PlayerPanel";
import LoadingPage from "../../LoadingPage";

const TeamStandings = () => {
    
    const [ league, setLeague] = useState(39);
    const {data, err, loading} = useFetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=${league}`);

       

        const changeLeague = (e) => {

            {e.target.classList.contains('premier') && setLeague(39)}
            {e.target.classList.contains('championship') && setLeague(40)}
            {e.target.classList.contains('leagueOne') && setLeague(41)}
            {e.target.classList.contains('leagueTwo') && setLeague(42)}
            }

            console.log(data)
             
 return (

    <div>
        
        <LeagueList changeLeague={changeLeague}/>
        
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


