import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
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
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit =(data: AddTodoForm, e:any) =>{
        addTodo(data.title);
        e.target.reset();
        window.location.href = '/';
    }
    return (<h1>New</h1>);
}

export default AddTodo;