import React from 'react';
import { Link } from 'react-router';

class Leagues extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2 className="heading">Leagues</h2>
                <ul className="list-center" role="nav">
                    <li><Link to="/leagues/premier-league">Premier League</Link></li>
                    <li><Link to="/leagues/serie-a">Serie A</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    };
};

export default Leagues;