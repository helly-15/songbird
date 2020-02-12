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
      audio: '',
      proxyUrl: 'https://cors-anywhere.herokuapp.com/',
      prevAudio:'',
    };
  }

  componentDidMount() {
        fetch(this.state.proxyUrl + this.props.audio)
          .then((blob) => blob.json())

         .then((response) => {
           this.setState({ audio: (`https:${response.recordings[0].file}`) });
           console.log ('зашел в фетч');
         })
         .catch((error) => {
            console.log('Audio request failed', error);
          });
  }
  componentDidUpdate(){
    if ((this.state.proxyUrl + this.props.audio)!==this.state.prevAudio) {
    fetch(this.state.proxyUrl + this.props.audio)
          .then((blob) => blob.json())

         .then((response) => {
           this.setState({ 
               audio: (`https:${response.recordings[0].file}`),
              prevAudio:this.state.proxyUrl + this.props.audio
            });
           console.log ('зашел в апдейт');
         })
         .catch((error) => {
            console.log('Audio request failed', error);
          });
        }
  }

  render() {
    console.log ('защел в плеер с такой ссылкой' + this.state.audio)
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
      audio: '',
      proxyUrl: 'https://cors-anywhere.herokuapp.com/',
    };
  }

    

  render() {
    console.log ('зашел в рендер картинки и аудио')
    if (this.props.visible ===false){
      return (
        <div className="question">
        <img className="neutralBirdImage" src={neutralBirdImage} alt="Logo" />
        <div className="question_player">
          
          <Player audio={this.props.audio}  />

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
          <Player audio={this.props.audio}  />

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
