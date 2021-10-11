const LeagueList = ({ changeLeague }) => {

    return ( 

        <div className="leagueListWrapper">
            <div className="leagueListGroup">
                <button onClick={changeLeague} className="leagueListItem premier">Premier League</button>
                <button onClick={changeLeague} className="leagueListItem championship">Championship</button>
                <button onClick={changeLeague} className="leagueListItem leagueOne">League One</button>
                <button onClick={changeLeague} className="leagueListItem leagueTwo">League Two</button>
            </div>
        </div>

     );
}
 
export default LeagueList;