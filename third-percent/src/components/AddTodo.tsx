import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';

const schema = yup.object().shape({
    title: yup.string().required('Invalid task')
});

interface AddTodoForm {
    title: string
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
        window.location.href = '/';
    }
    return (
        <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
            <h4>New task</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" 
                id="title" placeholder="New task..."
                    className="uk-input" ref={register}
                    //nao consegui fazer 'ref={register}' funcionar, 
                    //acredito que seja uma versão antiga do hook e que nas mais novas foi alterado a forma.
                    //falta apenas isso para funcionar "New Task"
                />
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Save</button>
            </div>
        </form>
    );
}

export default AddTodo;