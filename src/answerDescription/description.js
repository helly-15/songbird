
import React from 'react';
import './description.scss';
import ActualQuestion from '../actualQuestion/question';


export default class AnswerDescription extends React.Component {
  render() {
    return (
      <div className="description">
        <ActualQuestion 
          birdName ={this.props.birdName}
          image = {this.props.image}
          audio = {this.props.audio}
          visible ={this.props.visible}
        />
        <span className="description_text">
          {this.props.description}
        </span>
      </div>
    );
  }
}
