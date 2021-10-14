const SectionReducer = (state = '', action) => {
    switch(action.type) {
        case 'MatchSection':
           return state = 'MatchHub'
        case 'FantasySection':
            return state = 'FantasyHub'
        case 'Reset':
            return state = ''
        default:
            return state;

    }
    
}

export default SectionReducer;