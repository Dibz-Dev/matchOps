import NavPanel from "../SubComponents/NavPanel";
import Header from "../SubComponents/Header";
import PlayerCompare from "../pages/subPages/PlayerCompare";
import TeamStats from "../pages/subPages/TeamStats";
import { useState } from "react";


const FantasyHub = ({ Section, subSection, changeSub }) => {

    const [ league, setLeague] = useState(39);

    const changeLeague = (e) => {

        {e.target.classList.contains('premier') && setLeague(39)}
        {e.target.classList.contains('championship') && setLeague(40)}
        {e.target.classList.contains('leagueOne') && setLeague(41)}
        {e.target.classList.contains('leagueTwo') && setLeague(42)}
        }

    return ( 

        <div>
            <Header />
            {subSection === null ? <NavPanel subSection={subSection} changeSub={changeSub} Section={Section} /> : null}
            {subSection === 'PlayerCompare' && <PlayerCompare league={league} changeLeague={changeLeague} />}
            {subSection === 'TeamStats' && <TeamStats backOne={backOne} />}
        </div>
     );
}
 
export default FantasyHub;