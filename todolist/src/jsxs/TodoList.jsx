import React, { useState } from 'react';
import Form from './Form.jsx';
import Header from './Header.jsx';
import Layout from './Layout.jsx';                          // TodoList에서 Form, Header, Layout, List를 모아 APP으로 한 번에 전달한다.
import List from './List.jsx';

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: '리액트 공부하기',
            body: '리액트 기초를 공부해봅시다.',
            isDone: false,
        },
        {
            id: 2,
            title: '리액트 공부하기',
            body: '리액트 기초를 공부해봅시다.',
            isDone: true,
        },
    ]);

    return (
        <Layout>
            <Header />
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    );
};

export default TodoList;