import React from 'react';
import ReactDOM from 'react-dom';
import './answers.scss';
//<div className="answer_button__dot" />
class Answer extends React.Component {
  render() {
    
    return (
      <button className="answer_button" onClick = {(e)=>{
        this.props.handleAnswerButtonClick(this.props.birdName)
        if (this.props.handleAnswerButtonClick(this.props.birdName)){
          e.target.classList.add ('greenButton') ;
        }
        else e.target.classList.add ('redButton')
      }
      }>
        
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
