import LeagueReducer from "./League";
import SectionReducer from "./Section";
import SubSectionReducer from "./SubSection";
import isHomePanelReducer from "./isHomePanel";
import { combineReducers } from "redux";


const allReducers = combineReducers({

    League: LeagueReducer,
    Section: SectionReducer,
    SubSection: SubSectionReducer,
    HomePanel: isHomePanelReducer
})


export default allReducers;