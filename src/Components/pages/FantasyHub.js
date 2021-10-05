import NavPanel from "../SubComponents/NavPanel";
import Header from "../SubComponents/Header";
import PlayerCompare from "../pages/subPages/PlayerCompare";
import TeamStats from "../pages/subPages/TeamStats";



const FantasyHub = ({ Section, subSection, changeSub, backOne }) => {


    return ( 

        <div>
            <Header />
            {subSection === null ? <NavPanel subSection={subSection} changeSub={changeSub} Section={Section} /> : null}
            {subSection === 'PlayerCompare' && <PlayerCompare backOne={backOne} />}
            {subSection === 'TeamStats' && <TeamStats backOne={backOne} />}
        </div>
     );
}
 
export default FantasyHub;