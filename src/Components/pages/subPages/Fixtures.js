import useFetch from "../../../useFetch";
import LoadingPage from '../../LoadingPage';
import LeagueList from "../../SubComponents/LeagueList";
import Round from "../../SubComponents/Round";
import { useSelector } from "react-redux";

const Fixtures = () => {

    const League = useSelector(state => state.League)
    const Counter = useSelector(state => state.Counter)

    const { data, err, loading} = useFetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${League}&season=2021&round=Regular%20Season%20-%20${Counter}`)

    const dateArray = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',' Friday', 'Saturday'];

      console.log(data)
    return (

     
        <div>
       
         
         <LeagueList />
         <Round />
         <h1 className="roundHeading">Round  {!loading &&[data.parameters.round.split('-')[1]]}</h1>
        <div className="liveScoresCard">

           
          
          {loading ? <LoadingPage /> : data.response.map(item => (


                        <div className="fixturesCard">
                            
                            <span key={item.date}> {dateArray[(new Date(item.fixture.date).getDay())]} </span>
                            <div className="fixtureGrid">
                                
                                    <img className="logoSize" src={item.teams.home.logo} alt="" />
                                    <h2 className='fixtureInfo' key={item.nameHome}>  {item.teams.home.name}</h2> 
                                    <img className="logoSize" src={item.teams.away.logo} alt="" />
                                    <h2 key={item.nameAway} className='fixtureInfo'>{item.teams.away.name} </h2>   
                                </div>
                            </div>
                            
                         )) }         
                          
           </div>
        </div> 
                          
           
   
         
        
      );
}
 
export default Fixtures;