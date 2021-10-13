import NavPanel from "../SubComponents/NavPanel";
import Header from "../SubComponents/Header";
import PlayerCompare from "../pages/subPages/PlayerCompare";
import TeamStats from "../pages/subPages/TeamStats";



const FantasyHub = ({ Section, subSection, changeSub }) => {

   
    return ( 

        <div>
            <Header />
            {subSection === null ? <NavPanel subSection={subSection} changeSub={changeSub} Section={Section} /> : null}
            {subSection === 'PlayerCompare' && <PlayerCompare  />}
            {subSection === 'TeamStats' && <TeamStats />}
        </div>
     );
}
 
export default FantasyHub;