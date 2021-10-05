import NavPanel from "../SubComponents/NavPanel";
import Header from "../SubComponents/Header";
import LiveScores from "./subPages/LiveScores";
import TeamStandings from "./subPages/TeamStandings";
import WeeklyCalender from "./subPages/WeeklyCalender";


const MatchHub = ({ Section, changeSub, subSection, backOne}) => {


    return ( 

        <div>
            <Header />
            {subSection === null ? <NavPanel changeSub={changeSub} subSection={subSection} Section={Section}/> : null}
            {subSection === 'LiveScores' && <LiveScores Section={Section} subSection={subSection} backOne={backOne}/>}
            {subSection === 'TeamStandings' && <TeamStandings Section={Section} subSection={subSection} backOne={backOne}/>}
            {subSection === 'WeeklyCalender' && <WeeklyCalender Section={Section} subSection={subSection} backOne={backOne}/>}
        </div>
        
     );
}
 
export default MatchHub;