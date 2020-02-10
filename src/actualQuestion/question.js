import React from 'react';
import './question.scss';
import '@babel/polyfill';
import BirdImage from '../birdImage/birdImage';
import AudioPlayer from "react-h5-audio-player";

class Player extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                audio: 'https://www.xeno-canto.org/sounds/uploaded/WHBIHHNZVS/XC418793-Levant%20Sparrow%20Hawk%20Lisi%20Lake%2002%20June%202018.mp3',
                proxyUrl: 'https://cors-anywhere.herokuapp.com/'  
            };
            
        }
        componentDidMount() {
          
            fetch(this.state.proxyUrl + this.props.audio)
            .then(blob => blob.json())
                       
            .then((response) => {
                
                this.setState({audio:('https:'+ response.recordings[0].file)});
                console.log (this.state.audio);
                console.log(response.recordings[0].file);
            })
            .catch((error) => {  
                console.log('Audio request failed', error)  
            });
          }

    render(){
        
        return(
            
         

                <AudioPlayer
                    controls = {true}
                    autoplay={false}
                    src={this.state.audio}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                    volume = {1}
                    hidePlayer = {true}
                />
        );
    }
}
    
  

export default class ActualQuestion extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            birdname: "Sparrow",
            image: `https://api.unsplash.com/photos/random?query=sparrow&client_id=c7aea232f1d7606d334e46c735841d75b4bf86e6f5c139a99d85d94e5bd7c314`,
            visible : true,
            audio :'https://www.xeno-canto.org/api/2/recordings?query=sparrow'
        };
    }
    render() {
      return (
        <div className ="question">
            <BirdImage birdPic = {this.state.image} />
            <div className = "question_player">
                <Player audio = {this.state.audio} birdname ={this.state.birdname}/>
                
            </div>
            <div className ="question_description">
                {this.state.birdname}
                <p className ="question_description__p">
                    Click on the bird to make it twit :)
                </p>
            </div>
        </div>
      );
    }
};
