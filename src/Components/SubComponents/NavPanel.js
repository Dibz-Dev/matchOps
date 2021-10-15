import { useSelector } from 'react-redux';

const NavPanel = ({ changeSub }) => {

  const Section = useSelector(state => state.Section)

      if (Section === 'MatchHub') {return (
        <div className="navPanelWrapper">
           <nav>
               <div className="navGrid">
                  <div className="navGroup">
                    <button onClick={changeSub} className="navItems teamStandings">Team Standings</button>
                    <button onClick={changeSub} className="navItems fixtures">Fixtures</button>
                  </div>
               </div>
           </nav>

       </div>
     );} else if (Section === 'FantasyHub') {return (
        <div className="navPanelWrapper">
           <nav>
               <div className="navGrid">
                  <div className="navGroup">
                      <button onClick={changeSub} className="navItems playerCompare">Player Compare</button>
                      <button onClick={changeSub} className="navItems teamStats">Team Stats</button>
                  </div>
               </div>
           </nav>

       </div>
     );}
}
 
export default NavPanel;