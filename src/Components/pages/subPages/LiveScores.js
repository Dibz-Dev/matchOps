// import { useState } from 'react';
import LeagueList from "../../SubComponents/LeagueList";
import useFetch from "../../../useFetch";
import LoadingPage from '../../LoadingPage';

const LiveScores = ({ Section, subSection }) => {

    const { data, err, loading } = useFetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?live=39-40-41`)

    {!loading && console.log(data)}
 
    const dateArray = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',' Friday', 'Saturday'];

    return (
    
    <div>
       

        <div className="liveScoresCard">
          
          {loading ? <LoadingPage /> : data.response.map(item => (


                        <div className="fixturesCard">
                            
                            {/* <span key={item.date}> {dateArray[(new Date(item.fixture.date).getDay())]} </span> */}
                            <div className="fixtureGrid">
                                
                                    <img className="logoSize" src={item.teams.home.logo} alt="" />
                                    <h2 className='rankCard' key={item.nameHome}>  {item.teams.home.name}</h2> 
                                    <img className="logoSize" src={item.teams.away.logo} alt="" />
                                    <h2 key={item.nameAway} className='rankCard'>{item.teams.away.name} </h2>   
                                </div>
                            </div>
                            
                         )) }         
                          
           </div>
        </div> 
      );
}
 
export default LiveScores;