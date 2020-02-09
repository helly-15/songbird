
import { hot } from 'react-hot-loader';
import React from 'react';
 import ReactDOM from 'react-dom';
 import Header from './header/header';

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
      
      </div>
    );
  }
}

//All essential info about the application
const APPDETAILS = 
  {numberOfQuestionsHeader: 6,
    questionCategories: ['Warm up','Sparrow', 'Forester','Singing','Predatory','Sea' ], 
    stocked: true, 
    name: 'Football'
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

console.log('hello Lena peppa world');
