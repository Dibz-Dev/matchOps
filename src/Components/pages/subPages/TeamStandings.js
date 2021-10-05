import LeagueList from "../../SubComponents/LeagueList";
import { useState, useEffect } from 'react';
// import BackBtn from "../../SubComponents/BackBtn";
// import useFetch from "../../../useFetch";

const TeamStandings = () => {

    // const [ data, setData ] = useState([])
    // const [ err, setErr ] = useState(null)
    // const [ loading, setLoading ] = useState(true)

    // useEffect(() => {

    //     const connect = async () => {
         
    //      const response =  await fetch("https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39", {
    //                         "method": "GET",
    //                             "headers": {
    //                                 "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //                                 "x-rapidapi-key": "1eb628ee98msh88d74b32f5a3c11p198c0bjsn7a831a3c9184"
    //                             }
    //                     })

    //             const result = await response.json();

    //               setData([result])

                 
    //     }
    //     connect()
       
    // }, [])

    return (

        <div>
            {/* <BackBtn backOne={backOne} /> */}
            <LeagueList />
            <div>
                {/* {data ? data.map(item => (
 
                 console.log(item.league.standings[0])
                    // <h1>{ item }</h1>
                )) : loading } */}
            </div>
        </div>
      );
}
 
export default TeamStandings;