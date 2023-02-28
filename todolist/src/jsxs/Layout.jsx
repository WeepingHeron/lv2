import React from 'react';
import './csss/layout.css';

const Layout = (props) => {
    return <div className='layout'>{props.children}</div>;
};

export default Layout;