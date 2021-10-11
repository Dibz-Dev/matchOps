import { useState } from "react";

import PlayerPanel from "../../SubComponents/PlayerPanel";
import CompareTemplate from "../../SubComponents/CompareTemplate";
import useFetch from "../../../useFetch";

const PlayerCompare = ({ league, changeLeague }) => {

    const [ team, setTeam] = useState();
    const [ position, setPosition ] = useState();
    const { data, err, loading } = useFetch(`https://api-football-v1.p.rapidapi.com/v3/players?season=2021&league=39&team=${league}`)

{loading ? console.log('loading') : console.log(data.response)}



    return (

        <div>
              <form className="playerPanelGroup">
                   <input onChange={((e) => { 
                       
                     setTeam(e.target.value)
                     console.log(team)
                     })} name="team" type="text" placeholder="Team"/>
                   <input onChange={((e) => {
                       setPosition(e.target.value)
                       console.log(position)
                   })} type="text" placeholder="Position"/>
                   <button type="submit"> Search</button>
                 </form>
            <PlayerPanel />
            <CompareTemplate />
        </div>
      );
}
 
export default PlayerCompare;