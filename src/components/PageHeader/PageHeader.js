import React from 'react';
import './page_header.scss';

function PageHeader({title, children}) {
    if (title) {
        return (
            <header className="page-header">
                <div className="container">
                    <h1>{title}</h1>
                    {children && children}
                </div>
            </header>
        )
    } else {
        return (<></>)
    }
}

export default PageHeader;
