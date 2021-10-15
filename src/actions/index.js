
// ------------------------- League State---------------


export const premier = () => {

    return {
        type: 'PREMIER'
    }
}

export const championship = () => {

    return {
        type: 'CHAMPIONSHIP'
    }
}

export const leagueOne = () => {

    return {
        type: 'LEAGUEONE'
    }
}

export const leagueTwo = () => {

    return {
        type: 'LEAGUETWO'
    }
}


// -------------------------- Section State--------------

export const resetSection = () => {

    return {
        type: 'RESET'
    }
}

export const matchSection = () => {

    return {
        type: 'MatchSection'
    }
}

export const fantasySection = () => {

    return {
        type: 'FantasySection'
    }
}

// -------------------------- Sub Section State----------

export const resetSubSection = () => {

    return {
        type: 'RESET'
    }
}

export const liveScore = () => {

    return {
        type: 'LiveScores'
    }
}

export const teamStandings = () => {

    return {
        type: 'TeamStandings'
    }
}

export const fixtures = () => {

    return {
        type: 'Fixtures'
    }
}

export const playerCompare = () => {

    return {
        type: 'PlayerCompare'
    }
}

export const teamStats = () => {

    return {
        type: 'TeamStats'
    }
}

// ------------------------------ HomePanel---------------------------


export const yesHomePanel = () => {

    return {
        type: 'YesHomePanel'
    }
}

export const noHomePanel = () => {

    return {
        type: 'NoHomePanel'
    }
}

//--------------------------------Counter-------------------------------

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {

    return {
        type: "DECREMENT"
    }
}