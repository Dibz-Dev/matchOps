import NavPanel from "../SubComponents/NavPanel";
import Header from "../SubComponents/Header";


const FantasyHub = ({ Section, changeSection, changeSub }) => {


    return ( 

        <div>
            <Header />
            <NavPanel changeSection={changeSection} changeSub={changeSub} Section={Section} />
        </div>
     );
}
 
export default FantasyHub;