import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class artistsPage extends React.Component {

    render() {

        return (

            <div>

                <h1>The Roster</h1>
                    
                <div className="cards">
                {this.props.artists.map((artist) =>
                        <div key={artist.id}>
                            <ul className="align" 
                            style={{
                            border: "solid 2px #d3d3d3",
                            margin: "10px",
                            padding: "5px"
                        }}>
                                <img className="card-img" src={artist.image} />
                                <Link to={`/${artist.name}`}>{artist.name}</Link>
                            </ul>

                        </div>)}
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        artists: state.artists
    }
}
export default connect(mapStateToProps)(artistsPage)