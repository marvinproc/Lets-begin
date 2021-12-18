import React from 'react'
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return (
        <div className="uk-container">
            <Navbar />
            <TodoList />
            <h1> Initializing a bot</h1>
        </div>);
}

export default App;