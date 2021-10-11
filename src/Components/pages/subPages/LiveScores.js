import { useState } from 'react';
import LeagueList from "../../SubComponents/LeagueList";
import useFetch from "../../../useFetch";
import LoadingPage from '../../LoadingPage';

const LiveScores = ({ Section, subSection }) => {

    const { data, err, loading } = useFetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`)

 
    return (

        <div>
            {loading ? <LoadingPage /> : console.log(data)}
          {/* {data ? data.map(item => (
                           <div className="teamStandingsCard">
                               <h2 className='rankCard' key={item.rank}> {item.rank} </h2>
                                <h2 className='nameCard' key={item.name}>{item.team.name}</h2>
                                <img key={item.logo} src={item.team.logo} alt="" />
                                        <div>
                                            <p key={item.form}>{item.form} </p>
                                        </div>
                            </div>
                  )) : loading}                 */}
            <LeagueList />
        </div>
      );
}
 
export default LiveScores;