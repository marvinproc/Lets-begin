import React from 'react'
import { Todo } from '../models/Todo';



const TodoList = () => {

    const todos: Todo[] = [
        { id: 1, title: 'Go to smarket', done: false },
        { id: 2, title: 'Go to gym', done: false },
    ];
    return (
        <table className="uk-table">
            <caption>  To-do List  </caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>task</th>
                    <th>button</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<div key={todo.id}>{todo.title}</div>)
                    )
                }
            </tbody>
        </table>
    )
}
export default TodoList;