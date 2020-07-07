import request from 'superagent'

export const artistsUrl = '/api/v1/artists'

export function getArtists () {
  
    return request.get(artistsUrl)
  .then(res => res.body)
}