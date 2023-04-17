import React from 'react';
import MainNavigation from './MainNavigation';
import s from './Layout.module.css';

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <div className={s.main}>{props.children}</div>
        </div>
    );
}

export default Layout;
