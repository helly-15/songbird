
import { hot } from 'react-hot-loader';
import React from 'react';
 import ReactDOM from 'react-dom';
 import Header from './header/header';
import ActualQuestion from './actualQuestion/question';
import AnswerOptions from './answerOptions/answers';
import AnswerDescription from './answerDescription/description';


import './styles.scss';
import '@babel/polyfill';



class SongBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfQuestionsHeader: this.props.numberOfQuestions,
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <Header
          numberOfQuestions={this.state.numberOfQuestionsHeader}
          questionCategories = {APPDETAILS.questionCategories} 
        />
        <ActualQuestion birdName ='thrush'/>
        <div className='answerOptionsWrapper'>
            <AnswerOptions birdNameArray = {APPDETAILS.Sparrowy} />
            <AnswerDescription description ={APPDETAILS.Sparrow} />
        </div>
        <button className='nextLevel'>
             Next birds please!
        </button>

      </div>
    );
  }
}

//All essential info about the application
const APPDETAILS = 
  {numberOfQuestionsHeader: 6,
    questionCategories: ['Warm up','Sparrowy', 'Forester','Singing','Predatory','Sea' ], 
    stocked: true, 
    name: 'Football',
    Sparrowy: ['Jackdaw', 'Jay', 'Magpie', 'Rook', 'Sparrow', 'Thrush'],
    Sparrow: 'Although sparrows are not considered as water birds, they swim at a very fast pace to escape from predators.'
  }
  
;

ReactDOM.render(
  <SongBird 
  numberOfQuestions={APPDETAILS.questionCategories.length}
  questionCategories = {APPDETAILS.questionCategories} 
  />,
  document.getElementById('root')
);
//const App = () => <div>Hello World!</div>;
//export default hot(module)(App);


