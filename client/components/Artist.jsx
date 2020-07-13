import React from 'react'
import { connect } from 'react-redux'
import AudioPlayer from 'react-h5-audio-player';

export function artist(props) {
    
    const artists = props.artists
    const artist = artists.find(artist => artist.name === props.match.params.name)
    
    return (

        <div className="background">

            {(artist) &&
                <>
                    <div className="card">
                        <ul style={{
                            border: "solid 4px #d3d3d3",
                            margin: "10px auto",
                            padding: "10px"
                        }}>
                            <img className="card-img" src={artist.image} />
                            <div className="content">
                                <h2>{artist.name}</h2>
                                <div>
                                    Bio: {artist.bio}
                                    <br></br>
                                    <AudioPlayer src={artist.audio} />
                                    
                                </div>
                            </div>
                        </ul>

                    </div>
                </>
            }
        </div>
    )
}

function mapStateToProps(state) {

    return {
        artists: state.artists
    }
}
export default connect(mapStateToProps)(artist)