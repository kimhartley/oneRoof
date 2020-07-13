import request from 'superagent'
import { getTracks } from '../apis/tracks'

export function getTrackList(tracks) {
    return {
        type: 'GET_TRACKS',
        tracks: tracks
    }
}

export function fetchTracks() {
    return (dispatch) => {
            getTracks()
            .then((tracks) => {
                dispatch(getTrackList(tracks))
            })
    }
}