import React from 'react';
import ReactDOM from 'react-dom';
import './answers.scss';

class Answer extends React.Component{

    render(){
        return (
            <button className ='answer_button'>
            <div className ="answer_button__dot"/>
            {this.props.birdName}
            </button>
        )
        
    }
}

export default class AnswerOptions extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            birdName:this.props.birdNameArray,
    }
    }
    render(){
        return(
            <div className="answer">
                {
                    this.state.birdName.map((birdName)=>{
                        return  <Answer key = {birdName} birdName = {birdName}/>
                         })
                }
            
            </div>
        )
    }



}