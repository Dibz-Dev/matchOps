const LeagueReducer = (state = 39, action) => {
    switch(action.type) {
        case 'PREMIER':
           return state = 39
        case 'CHAMPIONSHIP':
            return state = 40
        case 'LEAGUEONE':
            return state = 41
        case 'LEAGUETWO':
            return state = 42
        default:
            return state;

    }
    
}

export default LeagueReducer;