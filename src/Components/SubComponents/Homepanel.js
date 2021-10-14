import { Link } from 'react-router-dom';

const HomeNavPanel = ({ changeSection }) => {

    return (

        <div>
            <div className="navGrid">
                  <div className="navGroup">
                      <button className="navItems"><Link to='/matchhub' onClick={changeSection} className="link matchHub">Match Hub</Link></button>
                      <button className="navItems"><Link to='/fantasyhub' onClick={changeSection} className="link fantasyHub">Fantasy Hub</Link></button>
                  </div>
               </div>
        </div>
      );
}
 
export default HomeNavPanel;