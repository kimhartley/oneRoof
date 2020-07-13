function tracks (state=[], action) {
    
    switch (action.type) {
        case 'GET_TRACKS':
            return action.tracks
        default:
            return state
    }
}

export default tracks