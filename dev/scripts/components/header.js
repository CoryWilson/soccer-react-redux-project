import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <header className="site-header">
                <h1>Hardcore Football</h1>
                <ul role="nav">
                    <li><Link to="/a">Leagues</Link></li>
                </ul>
            </header>
        )
    };
};

export default Header;
