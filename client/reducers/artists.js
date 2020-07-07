function artists (state=[], action) {
    
    switch (action.type) {
        case 'GET_ARTISTS':
            return action.artists
        default:
            return state
    }
}

export default artists