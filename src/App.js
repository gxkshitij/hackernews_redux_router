import React, { Component } from 'react';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom";

import SearchBar from './components/searchbar';
import StoryList from './components/list';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2> React Hackernews App </h2>
          
          <SearchBar />
          
          <Switch>
            <Route path='/author/:name' component={StoryList} />
            <Route path='/' component={StoryList} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
