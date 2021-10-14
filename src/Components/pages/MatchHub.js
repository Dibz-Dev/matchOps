import NavPanel from "../SubComponents/NavPanel";
import Header from "../SubComponents/Header";
import LiveScores from "./subPages/LiveScores";
import TeamStandings from "./subPages/TeamStandings";
import Futures from "./subPages/Futures";

import { useSelector } from 'react-redux';

const MatchHub = ({ changeSub }) => {

const SubSection = useSelector(state => state.SubSection)

    return ( 

        <div>
            <Header />
            {SubSection === null ? <NavPanel changeSub={changeSub} /> : null}
            {SubSection === 'LiveScores' && <LiveScores />}
            {SubSection === 'TeamStandings' && <TeamStandings />}
            {SubSection === 'Futures' && <Futures />}
        </div>
        
     );
}
 
export default MatchHub;