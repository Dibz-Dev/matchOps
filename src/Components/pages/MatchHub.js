import NavPanel from "../SubComponents/NavPanel";
import Header from "../SubComponents/Header";
import LiveScores from "./subPages/LiveScores";

const MatchHub = ({ Section, changeSub, subSection}) => {


    return ( 

        <div>
            <Header/>
            <NavPanel changeSub={changeSub} subSection={subSection} Section={Section}/>
            {subSection === 'LiveScores' && <LiveScores subSection={subSection}/>}
        </div>
        
     );
}
 
export default MatchHub;