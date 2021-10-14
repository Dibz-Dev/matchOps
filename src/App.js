import Header from "./Components/SubComponents/Header";
import { useState } from "react";
import MatchHub from "./Components/pages/MatchHub";
import FantasyHub from "./Components/pages/FantasyHub";
import HomeNavPanel from "./Components/SubComponents/Homepanel";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./Components/SubComponents/NavBar";
import { matchSection, fantasySection, liveScore, teamStandings, futures, playerCompare, teamStats, resetSubSection } from './actions';

import {  noHomePanel } from "./actions";
import { useSelector, useDispatch } from 'react-redux';


// import LoadingPage from './Components/LoadingPage';

function App() {

  const HomePanel = useSelector(state => state.HomePanel)
  const Section = useSelector(state => state.Section)
  const SubSection = useSelector(state => state.SubSection)
  const dispatch = useDispatch()
  

  const changeSection = (e) => {
 
    if(e.target.classList.contains('matchHub')) {

          dispatch(matchSection())
          dispatch(noHomePanel())
          dispatch(resetSubSection())
         

    } else if (e.target.classList.contains('fantasyHub')) {

          dispatch(fantasySection())
          dispatch(noHomePanel())
          dispatch(resetSubSection())
    }
 }

 const changeSub = (e) => {

  if(e.target.classList.contains('liveScores')) {
    dispatch(liveScore())
  
  } else if (e.target.classList.contains('teamStandings')) {
    dispatch(teamStandings())
  } else if (e.target.classList.contains('futures')) {
    dispatch(futures())
  } else if (e.target.classList.contains('playerCompare')) {
    dispatch(playerCompare())
  } else if (e.target.classList.contains('teamStats')) {
    dispatch(teamStats())
  }

 }


  return (
    <Router>
    <div className="App">

         <NavBar changeSection={changeSection} />
         
          {HomePanel && <HomeNavPanel changeSection={changeSection} />}

            <Switch>
                <Route exact path='/matchhub'>
                      <MatchHub changeSection={changeSection} changeSub={changeSub} />
                </Route>
                <Route exact path='/fantasyhub'>
                      <FantasyHub changeSection={changeSection} changeSub={changeSub} />
                </Route>
                
            </Switch>
    </div>
    </Router>
  );
}

export default App;
