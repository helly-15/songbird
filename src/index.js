
import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import ActualQuestion from './actualQuestion/question';
import AnswerOptions from './answerOptions/answers';
import AnswerDescription from './answerDescription/description';
import birdsData from './data';
import { changeAnswerOptions, getRandomInt, findBirdDescription} from './utils/utilFunctions';

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
      //birdSoundAPI :'https://www.xeno-canto.org/api/2/recordings?query=',
      visible: false,
      score : 0,
      clickedTimes:6,
      actuallyClickedBird: 'Crow',
    };

    this.changeLevel = this.changeLevel.bind(this);
    this.handleAnswerButtonClick = this.handleAnswerButtonClick.bind(this);
  }


  changeLevel() {
    document.getElementsByClassName('header_button')[this.state.level].classList.remove('activeLevel');
    const newLevel = this.state.level + 1;

    this.setState({
      level: newLevel,
      answerOptions: changeAnswerOptions(newLevel),
      visible: false,
      birdName : changeAnswerOptions(newLevel)[getRandomInt(changeAnswerOptions(newLevel).length)],
      randomBird: getRandomInt(changeAnswerOptions(newLevel).length),
      clickedTimes:6,
      actuallyClickedBird: Object.values(birdsData)[newLevel][0].name,

    }, () => this.forceUpdate());

    document.getElementsByClassName('header_button')[newLevel].classList.add('activeLevel');
  }
  componentDidMount(){
    if (this.state.level ===0){
      document.getElementsByClassName('header_button')[this.state.level].classList.add('activeLevel');

    }
  }
  handleAnswerButtonClick(textOnButton) {

    if (textOnButton === this.state.birdName){
      let newScore = this.state.score+this.state.clickedTimes;
      this.setState({
      visible:true,
      score: newScore,
      actuallyClickedBird: textOnButton,
    });

    return true
    }
    else {
      let numOfClicks = this.state.clickedTimes-1;
      this.setState({
        clickedTimes: numOfClicks,
        actuallyClickedBird: textOnButton,
      });

      return false;
    }
  }

  render() {

    return (
      <div>
        <Header
              questionCategories={this.props.questionCategories}
              score ={this.state.score}
        />
        <ActualQuestion
              visible = {this.state.visible}
              birdName={this.state.birdName}
              image={this.state.birdImageAPI+this.state.birdName}
              audio = {`../audio/${this.state.birdName}.mp3` }/>
        <div className="answerOptionsWrapper">
          <AnswerOptions
              birdNameArray={this.state.answerOptions}
              handleAnswerButtonClick = {this.handleAnswerButtonClick} />
          <AnswerDescription
            description={findBirdDescription(Object.values(birdsData)[this.state.level],this.state.actuallyClickedBird)  }
            birdName = {this.state.actuallyClickedBird}
            image={this.state.birdImageAPI+this.state.actuallyClickedBird}
            audio = {`../audio/${this.state.actuallyClickedBird}.mp3`}
            visible = {true}
            />
        </div>
        <button
              className="nextLevel"
              onClick={this.changeLevel}>
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
 // stocked: true,
  //name: 'Football',
  //Sparrowy: ['Jackdaw', 'Jay', 'Magpie', 'Rook', 'Sparrow', 'Thrush'],
  //Sparrow: 'Although sparrows are not considered as water birds, they swim at a very fast pace to escape from predators.',
};
ReactDOM.render(
  <SongBird
    questionCategories={Object.keys(birdsData)}
  />,
  document.getElementById('root'),
);
// const App = () => <div>Hello World!</div>;
// export default hot(module)(App);


