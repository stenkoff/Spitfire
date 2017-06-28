import React from 'react';
import {connect} from 'react-redux';
import { skip } from '../../actions/audio_actions';

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false, nowPlaying: 0 };
    this.togglePlay = this.togglePlay.bind(this);
    this.audioPlayer = this.audioPlayer.bind(this);
    // this.controls = this.controls.bind(this);
    this.length = this.length.bind(this);
    this.skip = this.skip.bind(this);
    this.previous = this.previous.bind(this);
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


  length() {
    if (this.music) {
      let min = '00'+ Math.floor(this.music.duration/60)
      let sec = '00' + this.music.duration % 60
      return `${min.slice(-2)}:${sec.slice(-2)}`
    }
  }

  duration() {
    let start = time.now()

  }
  audioPlayer() {
    if (this.props.queue.length > 0) {
      return (<audio
          autoPlay
          // src={this.props.queue[i].audio}
          src={this.props.queue[this.state.nowPlaying].audio}
          ref={(el)=> { this.music = el; }}
          onEnded={this.skip}>
        </audio>);
    } else {
      return '';
    }
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


  render() {
    let playbtn = (this.state.play===true) ? "fa fa-2x fa-pause" : "fa fa-2x fa-play-circle-o";

      return (
        <section className='playbar'>
          <div className='playbar-items'>
            <div className='controls'>

              {this.audioPlayer()}

              <i onClick={this.previous} id='previous' className="fa fa-step-backward" aria-hidden="true"></i>
              <i id='play' className={playbtn}
              aria-hidden="true"
              onClick={this.togglePlay}></i>
              <i onClick={this.skip} id='skip' className="fa fa-step-forward" aria-hidden="true"></i>
              <div className='length'>{this.length()}</div>
            </div>
            <div className='bar'>___</div>
          </div>
          <div>

          </div>
        </section>
        );
    }

}


const mapStateToProps = state => {
  return {
    queue: state.queue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    skip: () => dispatch(skip())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(PlayBar);
