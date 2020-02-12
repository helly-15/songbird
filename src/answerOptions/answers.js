import React from 'react';
import ReactDOM from 'react-dom';
import './answers.scss';

class Answer extends React.Component {
  render() {
    
    return (
      <button className="answer_button" onClick = {()=>this.props.handleAnswerButtonClick(this.props.birdName)}>
        <div className="answer_button__dot" />
        {this.props.birdName}
      </button>
    );
  }
}

export default class AnswerOptions extends React.Component {
  
  render() {
    
    return (
      <div className="answer">
      
        {
          this.props.birdNameArray.map((birdName) => <Answer handleAnswerButtonClick={this.props.handleAnswerButtonClick} key={birdName} birdName={birdName} />)
                }

      </div>
    );
  }
}
