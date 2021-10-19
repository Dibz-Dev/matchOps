import LeagueReducer from "./League";
import SectionReducer from "./Section";
import SubSectionReducer from "./SubSection";
import isHomePanelReducer from "./isHomePanel";
import CounterReducer from "./Counter";

import { combineReducers } from "redux";


const allReducers = combineReducers({

    League: LeagueReducer,
    Section: SectionReducer,
    SubSection: SubSectionReducer,
    HomePanel: isHomePanelReducer,
    Counter: CounterReducer
})


export default allReducers;