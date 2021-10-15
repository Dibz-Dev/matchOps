const SubSectionReducer = (state = null, action) => {
    switch(action.type) {
        case 'LiveScores':
           return state = 'LiveScores'
        case 'TeamStandings':
            return state = 'TeamStandings'
        case 'Fixtures':
           return state = 'Fixtures'
        case 'TeamStats':
            return state = 'TeamStats'
        case 'PlayerCompare':
            return state = 'PlayerCompare'
        case 'RESET':
            return state = null
        default:
            return state;

    }
    
}

export default SubSectionReducer;