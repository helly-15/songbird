import React from 'react';
import './birdImage.scss';
import '@babel/polyfill';
import Bird from "./assets/sparrow/sparrow.jpg"


export default class BirdImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          src: Bird
        };
      }
    
      ComponentDidMount() {
          fetch('https://api.unsplash.com/photos/random?query=sparrow&client_id=c7aea232f1d7606d334e46c735841d75b4bf86e6f5c139a99d85d94e5bd7c314')
          .then(res => res.json())
              .then(
                  (response) => {   
                       this.setState({
                          src: response.urls.regular
                      })
                      
             })
        }
     render() {
        return (
            <img className="birdImage" src = {this.state.src} alt="Image of bird" />
        )
        
    }
  }