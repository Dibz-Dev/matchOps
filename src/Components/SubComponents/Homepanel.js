import { Link } from 'react-router-dom';

const HomePanel = ({ Section, changeSection }) => {

    return (

        <div>
            <div className="navGrid">
                  <div className="navGroup">
                      <button className="navItems"><Link to='/matchhub' onClick={changeSection} className="matchHub">Match Hub</Link></button>
                      <button className="navItems"><Link to='/fantasyhub' onClick={changeSection} className="fantasyHub">Fantasy Hub</Link></button>
                  </div>
               </div>
        </div>
      );
}
 
export default HomePanel;