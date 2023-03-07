import React from 'react';
import './csss/todo.css';
import {useNavigate} from 'react-router-dom';



function Todo({ todo, onDeleteHandler, onEditHandler }) {
    const navigate = useNavigate();
    return (
        <div className='todo-container'>            
            <div>
                <button
            className='todo-detail-button'
            onClick={() => {navigate('/Detail.jsx')}}
            >상세보기
            </button>
                <h2 className='todo-title'>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>
            <div className='button-set'>
                <button
                className='todo-delete-button button'
                onClick={() => onDeleteHandler(todo.id)}        // 화살표 함수의 ()는 페이지가 렌더링 시 자동으로 onDeleteHandler가 실행되는 것을 방지한다.
                >
                    삭제하기
                </button>
                <button
                className='todo-complete-button button'
                onClick={() => onEditHandler(todo.id)}
                >
                    {todo.isDone ? '취소' : '완료'}
                </button>
            </div>
        </div>                                                  // 삼항연산자를 통해 isDone의 값에 따라 취소와 완료를 바꿔준다.
    );
}

export default Todo;