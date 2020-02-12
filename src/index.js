
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
      randomBird: getRandomInt(changeAnswerOptions(numberOfStartingLevel).length),
      birdName: changeAnswerOptions(numberOfStartingLevel)[getRandomInt(changeAnswerOptions(numberOfStartingLevel).length)],
      birdImageAPI : 'https://api.unsplash.com/photos/random?client_id=c7aea232f1d7606d334e46c735841d75b4bf86e6f5c139a99d85d94e5bd7c314&query=',
      birdSoundAPI :'https://www.xeno-canto.org/api/2/recordings?query=',
      visible: false,
    
    };

    this.changeLevel = this.changeLevel.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
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
        <ActualQuestion visible = {this.state.visible} birdName={this.state.birdName} image={this.state.birdImageAPI+this.state.birdName} audio = {this.state.birdSoundAPI+this.state.birdName} />
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


