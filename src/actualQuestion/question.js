import React from 'react';
import './question.scss';
import '@babel/polyfill';
import BirdImage from '../birdImage/birdImage';

export default class ActualQuestion extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            birdname: this.props.birdname,
            //image: `https://api.unsplash.com/photos/random?query=sparrow&client_id=c7aea232f1d7606d334e46c735841d75b4bf86e6f5c139a99d85d94e5bd7c314`,
          
        };
    }
    render() {
      return (
        <div className ="question_fragment">
         <BirdImage />
          
          
        </div>
      );
    }
};
