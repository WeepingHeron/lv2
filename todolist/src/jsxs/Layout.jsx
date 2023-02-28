import React from 'react';
import './csss/layout.css';

const Layout = (props) => {
    return <div className='layout'>{props.children}</div>;          //layout div 태그 사이에 props를 넣어 layout 사이 내용을 props로 쓸 수 있게 한다.
};

export default Layout;