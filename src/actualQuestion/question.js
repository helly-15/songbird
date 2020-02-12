import React from 'react';
import './question.scss';
import '@babel/polyfill';
import AudioPlayer from 'react-h5-audio-player';
import BirdImage from '../birdImage/birdImage';
import neutralBirdImage from './assets/neutralBird.png';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // audio: 'https://www.xeno-canto.org/sounds/uploaded/WHBIHHNZVS/XC418793-Levant%20Sparrow%20Hawk%20Lisi%20Lake%2002%20June%202018.mp3',
      proxyUrl: 'https://cors-anywhere.herokuapp.com/',
    };
  }

  componentDidMount() {
    fetch(this.state.proxyUrl + this.props.audio)
      .then((blob) => blob.json())

      .then((response) => {
        this.setState({ audio: (`https:${response.recordings[0].file}`) });
        console.log(this.state.audio);
        console.log(response.recordings[0].file);
      })
      .catch((error) => {
        console.log('Audio request failed', error);
      });
  }

  render() {
    return (


      <AudioPlayer
        autoPlayAfterSrcChange={false}
        controls
        autoplay={false}
        src={this.state.audio}
        onPlay={(e) => console.log('onPlay')}
                    // other props here
        volume={1}
        hidePlayer
      />
    );
  }
}


export default class ActualQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      
    };
  }


  render() {
    if (this.props.visible ===false){
      return (
        <div className="question">
        <img className="neutralBirdImage" src={neutralBirdImage} alt="Logo" />
        <div className="question_player">
          <Player audio={this.props.audio} birdname={this.props.birdName} />

        </div>
        <div className="question_description">
          Who am I?
          <p className="question_description__p">
            Wait 3 seconds and click on the bird to make it twit :)
          </p>
        </div>
      </div>
      )
    }
    else{
      return (
      <div className="question">
        <BirdImage birdPic={this.props.image} />
        <div className="question_player">
          <Player audio={this.props.audio} birdname={this.props.birdName} />

        </div>
        <div className="question_description">
          {this.props.birdName}
          <p className="question_description__p">
            Click on the bird to make it twit :)
          </p>
        </div>
      </div>
    );
  }
  }
}
