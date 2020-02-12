import React from 'react';
import './birdImage.scss';
import '@babel/polyfill';
import Bird from './assets/sparrow/sparrow.jpg';


export default class BirdImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
    };
  }

  componentDidMount() {
    fetch(this.props.birdPic)
      .then((res) => res.json())
      .then((response) => {
        this.setState({ src: response.urls.regular });
      });
  }

  render() {
    return (
      <img className="birdImage" src={this.state.src} alt="Image of bird" />
    );
  }
}
