import React from 'react';
import './birdImage.scss';
import '@babel/polyfill';
import Bird from './assets/sparrow/sparrow.jpg';


export default class BirdImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      actualImage:'',
      prevImage:'',
    };
  }

  componentDidMount() {
    fetch(this.props.birdPic)
      .then((res) => res.json())
      .then((response) => {
        this.setState({ 
          src: response.urls.regular, 
          prevImage :this.props.birdPic,
        });
      });
  }
  componentDidUpdate(){
    if ((this.state.prevImage)!==this.props.birdPic) {
      fetch(this.props.birdPic)
      .then((res) => res.json())
      .then((response) => {
        this.setState({ 
          src: response.urls.regular, 
          prevImage :this.props.birdPic,
        });
      });
        }
  }

  render() {
    return (
      <img className="birdImage" src={this.state.src} alt="Image of bird" />
    );
  }
}
