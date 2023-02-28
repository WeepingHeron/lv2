import React from 'react';
import Todo from './Todo';
import './csss/list.css';

function List({ todos, setTodos }) {
    const onDeleteHandler = (todoId) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== todoId;
        });

        setTodos(newTodos);
    };

    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {                                    // key값을 받아 isDone의 상태를 바꾼다.
                    ...todo,
                    isDone: !todo.isDone,
                };
            } else {
                return { ...todo };
            }
        });

        setTodos(newTodos);
    };

    return (
        <div className='list-container'>
            <h2 className='list-title'>Working.. 🔥</h2>
            <div className='list-wrapper'>
                {todos.map((todo) => {
                    if (!todo.isDone) {
                    return (
                        <Todo
                        todo={todo}
                        key={todo.id}                       // key값과 value는 세트다.
                        setTodos={setTodos}
                        onDeleteHandler={onDeleteHandler}
                        onEditHandler={onEditHandler}
                        />
                    );
                } else {
                    return null;
                }
            })}
            </div>
            <h2 className='list-title'>Done..! 🎉</h2>
            <div className='list=wrapper'>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <Todo
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onEditHandler={onEditHandler}
                                />
                            );
                        } else {
                            return null;
                        }
                })}
            </div>
        </div>
    );
}

export default List;