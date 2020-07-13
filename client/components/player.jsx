import AudioPlayer from 'react-h5-audio-player';

import React from 'react'
import { connect } from 'react-redux'
// https://github.com/lhz516/react-h5-audio-player


const Player = () => (
    <AudioPlayer
      autoPlay
      onPlay={e => console.log("onPlay")}
      // other props here<AudioPlayer onAbort={action('onAbort')} onCanPlay={action('onCanPlay')} onCanPlayThrough={action('onCanPlayThrough')} onEnded={action('onEnded')} onError={action('onError')} onListen={action('onListen')} onPause={action('onPause')} onPlay={action('onPlay')} onClickPrevious={action('onClickPrevious')} onClickNext={action('onClickNext')} volume={0.8} showSkipControls progressUpdateInterval={100} src={SAMPLE_MP3_URL} />
    />
  )

export default Player

  





