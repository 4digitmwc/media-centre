import React from 'react';
import logo from './logo.svg';
import { Article } from './templates';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* This is a markdown to test */}
      <Article article_url='https://raw.githubusercontent.com/4digitmwc/skillban-articles/main/readme.md' />
    </div>
  );
}

export default App;
