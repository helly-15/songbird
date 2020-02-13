import React from 'react';
import ReactDOM from 'react-dom';
import LogoImage from './assets/logo.svg';
import './header.scss';
import '@babel/polyfill';

// props: logo - logo of app in header, img
class Logo extends React.Component {
  render() {
    const image = this.props.logo;
    return (
      <img className="header_logo" src={image} alt="Logo" />
    );
  }
}
// props: logo - logo of app in header, img
class QuestionCategoriesButton extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <button className="header_button">
        {category}
      </button>
    );
  }
}
// props: logo - logo of app in header, img
class Score extends React.Component {
  render() {
    const points = `Score: ${this.props.points}`;
    return (
      <span className="header_score">
        {points}
      </span>
    );
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: LogoImage,
      questionCategories: this.props.questionCategories,
    };
  }

  render() {
    return (
      <header className="header">
        <div className="header_wrapper">

          <Logo
            logo={this.state.logo}
          />
          <Score
            points={this.props.score}
          />
        </div>
        <div className="header_buttons">
          {this.state.questionCategories.map((button) => <QuestionCategoriesButton key={button} category={button} />)}
        </div>
      </header>
    );
  }
}
