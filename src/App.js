import Header from "./Components/SubComponents/Header";
import { useState } from "react";
import MatchHub from "./Components/pages/MatchHub";
import FantasyHub from "./Components/pages/FantasyHub";
import HomePanel from "./Components/SubComponents/Homepanel";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./Components/SubComponents/NavBar";


// import LoadingPage from './Components/LoadingPage';


function App() {

  const [ Section, setSection ] = useState('')
  const [ subSection, setSubSection] = useState(null)
  const [ homePanel, setHomePanel ] = useState(true)

  const changeSection = (e) => {
 
    if(e.target.classList.contains('matchHub')) {

          setSection('MatchHub')
          setHomePanel(false)
          setSubSection(null)
         

    } else if (e.target.classList.contains('fantasyHub')) {
          setSection('FantasyHub')
          setHomePanel(false)
          setSubSection(null)
    }
 }

 const changeSub = (e) => {

  if(e.target.classList.contains('liveScores')) {
    setSubSection('LiveScores')
  
  } else if (e.target.classList.contains('teamStandings')) {
    setSubSection('TeamStandings')
  } else if (e.target.classList.contains('futures')) {
    setSubSection('Futures')
  } else if (e.target.classList.contains('playerCompare')) {
    setSubSection('PlayerCompare')
  } else if (e.target.classList.contains('teamStats')) {
    setSubSection('TeamStats')
  }

 }


  return (
    <Router>
    <div className="App">

          <NavBar changeSection={changeSection} Section={Section} homePanel={homePanel} />
          <Header Section={Section} />
         
          {homePanel && <HomePanel Section={Section} changeSection={changeSection} />}

            <Switch>
                <Route exact path='/matchhub'>
                      <MatchHub changeSection={changeSection} changeSub={changeSub} subSection={subSection} Section={Section}/>
                </Route>
                <Route exact path='/fantasyhub'>
                      <FantasyHub changeSection={changeSection} changeSub={changeSub} Section={Section} subSection={subSection}/>
                </Route>
                
            </Switch>
    </div>
    </Router>
  );
}

export default App;
