import React from 'react';
import {connect} from 'react-redux';
import { skip } from '../../actions/audio_actions';

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false, nowPlaying: 0, progress: 0 };
    this.togglePlay = this.togglePlay.bind(this);
    this.audioPlayer = this.audioPlayer.bind(this);
    this.duration = this.duration.bind(this);
    this.skip = this.skip.bind(this);
    this.previous = this.previous.bind(this);
    this.currentTime = this.currentTime.bind(this);
    this.progressTime = this.progressTime.bind(this);
    this.progressBar = this.progressBar.bind(this);
    this.progress = this.progress.bind(this);

  }

  togglePlay() {
    if (this.music) {
      if (this.state.play===true) {
        this.music.pause()
        this.setState({ play: false })
      } else {
        this.music.play()
        this.setState({ play: true })
      }
    } else {
      return ;
    }
  }

  duration() {
    if (this.music) {
      let time = this.music.duration
      let min = Math.floor(time / 60)
      let sec = ('00' + Math.floor(time % 60)).slice(-2)
      return (`${min}:${sec}`);
    } else {
      return null;
    }
  }

  audioPlayer() {
    if (this.props.queue.length > 0) {
      const audioplayer = <audio
          autoPlay
          onTimeUpdate={this.progress}
          // src={this.props.queue[i].audio}
          src={this.props.queue[this.state.nowPlaying].audio}
          ref={(el)=> { this.music = el; }}
          onEnded={this.skip}>
        </audio>
      return audioplayer;
    } else {
      return '';
    }
  }

  currentTime() {
    if (this.music) {
    return (this.music.currentTime / this.music.duration * 100)
  } else {
    return '0'
  }
  }

  progressTime() {
    if (!this.music) {
      return '0:00';
    }
    let time = this.music.currentTime
    let min = Math.floor(time / 60)
    let sec = ('00' + Math.floor(time % 60)).slice(-2)
    return (`${min}:${sec}`);
  }
  // play() {
  //   for (let i = 0; i < this.props.queue.length; i++) {
  //     this.props.queue[i]
  //     setState({ nowPlaying: i })
  //   }
  // }
  skip() {
    if (this.state.nowPlaying < this.props.queue.length) {
      this.setState({ nowPlaying: this.state.nowPlaying + 1 })
    } else {
      this.setState({ nowPlaying: 0, play: false})
    }
  }

  previous() {
    if (this.state.nowPlaying > 0) {
      this.setState({ nowPlaying: this.state.nowPlaying - 1 })
    }
  }

  componentWillReceiveProps() {
    this.setState({ play: true })
  }

  progress() {
    if (!this.music) {
      return 0;
    }
    if (Math.floor(this.music.currentTime)===Math.floor(this.music.duration)) {
      return 0
    }
    let progress = this.music.currentTime / this.music.duration * 100;
    this.setState({['progress']: progress})
  }

  progressBar() {
    let progress
    if (!this.music) {
      progress = 0;
    } else if
      (Math.floor(this.music.currentTime)===Math.floor(this.music.duration)) {
        progress = 0;
    } else {
      progress = this.music.currentTime / this.music.duration * 100;
    }
    let barStyle = {
      width: `${progress}%`,
      border: '2px solid #1db954',
      // bottom: '10px'
    }
    let progressSlider = {
      // position: 'absolute'

    }

    return ( <div className='progress' style={barStyle}></div> );
  }

  render() {
    // let playbtn = (this.state.play===true) ? "fa fa fa-pause" : "fa fa-2x fa-play-circle-o";
    let duration = this.duration();
    let playbtn = (this.state.play===true) ?
    <div id='pause'><i onClick={this.togglePlay}
      className="fa fa fa-pause"
      aria-hidden="true"></i></div> : <div onClick={this.togglePlay} id='play'>▶︎</div>;

      return (
        <section className='playbar'>
          <section className='playbar-items'>
          <div className='playbar-left'></div>
          <div className='playbar-middle'>

            <div className='controls'>

              {this.audioPlayer()}

              <div><i onClick={this.previous}
                id='previous'
                className="fa fa-step-backward"
                aria-hidden="true"></i></div>

                {playbtn}

              <div><i onClick={this.skip}
                id='skip'
                className="fa fa-step-forward"
                aria-hidden="true"></i></div>
            </div>

            <div className='playbar-bottom'>
              <div className='progress-time'>{this.progressTime()}</div>
              <div className='progress-bar'>{this.progressBar()}</div>
              <div className='duration'>{this.duration()}</div>
            </div>

          </div>
          <div className='playbar-right'></div>


      </section>
      </section>
        );
    }

}


const mapStateToProps = state => {
  return {
    queue: state.queue
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     skip: () => dispatch(skip())
//   };
// };

export default connect(
  mapStateToProps)
(PlayBar);
