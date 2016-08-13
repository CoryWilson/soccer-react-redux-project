import React from 'react';
import { Link } from 'react-router';

class Clubs extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2 className="heading">Clubs</h2>
                <ul role="nav">
                    <li><Link to="/clubs/chelsea" activeClassName="active">Chelsea</Link></li>
                    <li><Link to="/clubs/manchester-united" activeClassName="active">Manchester United</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    };
};

export default Clubs;
