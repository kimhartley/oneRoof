import request from 'superagent'

export const tracksUrl = '/api/v1/tracks'

export function getTracks () {
  
    return request.get(tracksUrl)
  .then(res => res.body)
}