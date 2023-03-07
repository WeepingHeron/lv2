import React from 'react';
import'./csss/detail.css';
import {useNavigate} from 'react-router-dom'

function Detail({todo}) {
    const navigate = useNavigate();
    return (
        <div className='detail'>
            <header>ID: {todo.id}
                <button
                className='detail-back-button'
                onClick={() => {navigate('/TodoList.jsx')}}
                >이전으로
                </button>
            </header>
            <h2>{todo.title}</h2>
            <div>{todo.body}</div>
        </div>
    );
}

export default Detail;