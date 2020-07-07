import request from 'superagent'
import { getArtists } from '../apis/artists'

export function getArtistList(artists) {
    return {
        type: 'GET_ARTISTS',
        artists: artists
    }
}

export function fetchArtists() {
    return (dispatch) => {
            getArtists()
            .then((artists) => {
                dispatch(getArtistList(artists))
            })
    }
}