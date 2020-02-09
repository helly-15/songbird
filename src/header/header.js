import React from 'react';
 import ReactDOM from 'react-dom';
 import LogoImage from './assets/logo.svg';
 import './header.scss';
import '@babel/polyfill';

// props: logo - logo of app in header, img
class Logo extends React.Component {
    render() {
      const image= this.props.logo;
      return (
         <img className="header_logo" src = {image} alt="Logo" />
      );
    }
  };
  // props: logo - logo of app in header, img
class QuestionCategoriesButton extends React.Component {
    render() {
      const category= this.props.category;
      return (
         <button className="header_button">
            {category}
         </button>
      );
    }
  };
// props: logo - logo of app in header, img
  class Score extends React.Component {
    render() {
      const points= `Score: ` + this.props.points;
      return (
         <span className="header_score">
            {points}
         </span>
      );
    }
  };

  export default class Header extends React.Component{
      constructor (props){
          super (props);
          this.state = {
            logo: LogoImage,
            numberOfQuestionsHeader: this.props.numberOfQuestions,
            points:0,
            questionCategories : this.props.questionCategories
          };
      }
      render() {
        return (
          <header className ="header">
            <div className = "header_wrapper">
          
                <Logo
                    logo={this.state.logo}
                />
                <Score
                     points ={this.state.points}
                />
            </div>
            <div className = "header_buttons">
                {this.state.questionCategories.map ((button)=>{
                    return <QuestionCategoriesButton key = {button} category = {button}/>
                })}
            </div>
          </header>
        );
      }
  };
  
