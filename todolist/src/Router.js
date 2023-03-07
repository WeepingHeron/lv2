import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './jsxs/TodoList.jsx';
import Form from './jsxs/Form.jsx';
import Header from './jsxs/Header.jsx';
import Layout from './jsxs/Layout.jsx';
import List from './jsxs/List.jsx';
import Todo from './jsxs/Todo.jsx';
import Detail from './jsxs/Detail.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<TodoList />} />
                <Route path='form' element = {<Form />} />
                <Route path='header' element = {<Header />} />
                <Route path='layout' element = {<Layout />} />
                <Route path='list' element = {<List />} />
                <Route path='todo' element = {<Todo />} />
                <Route path='detail' element = {<Detail />} />
            </Routes>        
        </BrowserRouter>
    );
};

export default Router;