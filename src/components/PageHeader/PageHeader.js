import React from 'react';
import './page_header.scss';

function PageHeader({title}) {
    if (title) {
        return (
            <header className="page-header">
                <div className="container">
                    <h1>{title}</h1>
                </div>
            </header>
        )
    } else {
        return (<></>)
    }
}

export default PageHeader;
