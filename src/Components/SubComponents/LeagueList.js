import { premier, championship, leagueOne, leagueTwo } from "../../actions";
import { useSelector, useDispatch } from "react-redux";


const LeagueList = () => {

    const league = useSelector(state => state.league)
    const dispatch = useDispatch();

    return ( 

        <div className="leagueListWrapper">
            <div className="leagueListGroup">
                <button onClick={() => dispatch(premier())} className="leagueListItem premier">Premier League</button>
                <button onClick={() => dispatch(championship())} className="leagueListItem championship">Championship</button>
                <button onClick={() => dispatch(leagueOne())} className="leagueListItem leagueOne">League One</button>
                <button onClick={() => dispatch(leagueTwo())} className="leagueListItem leagueTwo">League Two</button>
            </div>
        </div>

     );
}
 
export default LeagueList;