import { Link } from "react-router-dom";

const NavBar = ({ changeSection, Section, homePanel }) => {


    return (
        <div>
            <div className="navBarStyles">
                <img src="Kick Off.svg" alt="" />
                {homePanel ? null : <ul className="navBarList">
                   <li className="navBarItem matchHub"><Link to='/matchhub' onClick={changeSection} className={Section === 'MatchHub' ? "link matchHub active" : "link matchHub"}>Match Hub</Link></li>
                    <li className="navBarItem fantasyHub"><Link to='/fantasyhub' onClick={changeSection} className={Section === 'FantasyHub' ? "link active fantasyHub" : "link fantasyHub"}>Fantasy Hub</Link></li>
                </ul>}
            </div>
        </div>
      );
}
 
export default NavBar;