import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar = ({ changeSection }) => {

    const HomePanel = useSelector(state => state.HomePanel)
    const Section = useSelector(state => state.Section)

    return (
        <div>
            <div className="navBarStyles">
                <img src="Kick Off.svg" alt="" />
                {HomePanel ? null : <ul className="navBarList">
                   <li className="navBarItem matchHub"><Link to='/matchhub' onClick={changeSection} className={Section === 'MatchHub' ? "link matchHub active" : "link matchHub"}>Match Hub</Link></li>
                    <li className="navBarItem fantasyHub"><Link to='/fantasyhub' onClick={changeSection} className={Section === 'FantasyHub' ? "link active fantasyHub" : "link fantasyHub"}>Fantasy Hub</Link></li>
                </ul>}
            </div>
        </div>
      );
}
 
export default NavBar;