
import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import ActualQuestion from './actualQuestion/question';
import AnswerOptions from './answerOptions/answers';
import AnswerDescription from './answerDescription/description';
import birdsData from './data';
import { changeAnswerOptions, getRandomInt } from './utils/utilFunctions';

import './styles.scss';
import '@babel/polyfill';

const numberOfStartingLevel = 0;

class SongBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: numberOfStartingLevel,
      answerOptions: changeAnswerOptions(numberOfStartingLevel),
      randomBird: getRandomInt(changeAnswerOptions(numberOfStartingLevel).length)
    };

    this.changeLevel = this.changeLevel.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.getAnswerOptions = this.getAnswerOptions.bind(this);
  }

  getAnswerOptions() {
    return this.state.answerOptions;
  }

  changeLevel() {
    document.getElementsByClassName('header_button')[this.state.level].classList.remove('activeLevel');
    const newLevel = this.state.level + 1;
    
    this.setState({
      level: newLevel,
      answerOptions: changeAnswerOptions(newLevel),
    }, () => this.forceUpdate());
    
    document.getElementsByClassName('header_button')[newLevel].classList.add('activeLevel');
  }
  componentDidMount(){
    if (this.state.level ===0){
      document.getElementsByClassName('header_button')[this.state.level].classList.add('activeLevel');

    }
  }
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly,
    });
  }

  render() {
    return (
      <div>
        <Header
          questionCategories={this.props.questionCategories}
        />
        <ActualQuestion birdName="thrush" />
        <div className="answerOptionsWrapper">
          <AnswerOptions birdNameArray={this.state.answerOptions} />
          <AnswerDescription description={APPDETAILS.Sparrow} />
        </div>
        <button className="nextLevel" onClick={this.changeLevel}>
          Next birds please!
        </button>
      </div>
    );
    
  }
  
}

// All essential info about the application
const APPDETAILS = {
  numberOfQuestionsHeader: 6,
  questionCategories: ['Warm up', 'Sparrowy', 'Forester', 'Singing', 'Predatory', 'Sea'],
  stocked: true,
  name: 'Football',
  Sparrowy: ['Jackdaw', 'Jay', 'Magpie', 'Rook', 'Sparrow', 'Thrush'],
  Sparrow: 'Although sparrows are not considered as water birds, they swim at a very fast pace to escape from predators.',
};
ReactDOM.render(
  <SongBird
    questionCategories={Object.keys(birdsData)}
  />,
  document.getElementById('root'),
);
// const App = () => <div>Hello World!</div>;
// export default hot(module)(App);


