import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
import TodoContext from '../contexts/TodoContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddTodo from './AddTodo';

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar />
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddTodo />
                        </Route>
                        <Route path="/">
                            <h4>Task List</h4>
                            <TodoList />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </TodoContext>);
}

export default App;


