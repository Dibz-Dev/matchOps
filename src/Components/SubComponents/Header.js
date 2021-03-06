import { useSelector } from "react-redux";

const Header = () => {

    const Section = useSelector(state => state.Section)

    return ( 

        <div className="headerWrapper">
            <header>
          
               { Section === 'FantasyHub' && <h1 className="sectionHeader">Fantasy<span style={{ color: 'black', fontSize: '2rem'}}>Hub</span></h1>}
               {Section === 'MatchHub' &&  <h1 className="sectionHeader">Match<span style={{ color: 'black', fontSize: '2rem'}}>Hub</span></h1>}
               {/* {Section === 'TeamStandings' && <h1 className="sectionHeader">Team<span style={{ color: 'black', fontSize: '2rem'}}>Standings</span></h1>}
               {Section === 'WeeklyCalender' && <h1 className="sectionHeader">Weekly<span style={{ color: 'black', fontSize: '2rem'}}>Calender</span></h1>} */}
            </header>

        </div>

     );
}
 
export default Header;