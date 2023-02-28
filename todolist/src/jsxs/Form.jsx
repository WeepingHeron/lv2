import React, { useState } from 'react';
import './csss/form.css';

let number = 3
function Form({ setTodos, todos }) {
    const initialState = {
        id: 0,
        title: '',
        body: '',
        isDone: false
    };

    const [todo, setTodo] = useState(initialState);
    const onChangeHandler = (event) => {                                        //state가 변경되어야 리렌더링이 이루어진다.
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === '' || todo.body.trim() === '') return;        // trim과 || 연산자를 통해 제목이나 내용의 입력칸이 공란일 경우를 배제한다.
        setTodos([...todos, { ...todo, id: number }]);                          // 스프레드 연산자로 todo 배열을 해체한 후 새로운 todo를 추가하여 재배열한다.
        setTodo(initialState);                                                  // submit 후 입력칸을 다시 initialState로 초기화시킨다.
        number++;
    };

    return (
        <form onSubmit={onSubmitHandler} className='add-form'>
            <div className='input-group'>
                <label className='form-label'>제목</label>
                <input
                type='text'
                name='title'
                value={todo.title}
                className='add-input input-body'
                onChange={onChangeHandler}
                />
                <label className='form-label'>내용</label>
                <input
                type='text'
                name='body'
                value={todo.body}
                className='add-input'
                onChange={onChangeHandler}
                />
            </div>
            <button className='add-button'>추가하기</button>
        </form>
    );
}

export default Form;