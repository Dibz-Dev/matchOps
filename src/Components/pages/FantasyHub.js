import NavPanel from "../SubComponents/NavPanel";
import Header from "../SubComponents/Header";
import PlayerCompare from "../pages/subPages/PlayerCompare";
import TeamStats from "../pages/subPages/TeamStats";
import { useSelector } from 'react-redux';


const FantasyHub = ({ changeSub }) => {

    const SubSection = useSelector(state => state.SubSection)

    return ( 

        <div>
            <Header />
            {SubSection === null ? <NavPanel  changeSub={changeSub} /> : null}
            {SubSection === 'PlayerCompare' && <PlayerCompare  />}
            {SubSection === 'TeamStats' && <TeamStats />}
        </div>
     );
}
 
export default FantasyHub;