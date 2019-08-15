import React from 'react';
import './App.css';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = ({ match: { params } }) => {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer />
    </div>
  );
};

export default App;
