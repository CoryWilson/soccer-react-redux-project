import React from 'react';
import { Link } from 'react-router';

class Viewers extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2 className="heading">Viewers</h2>
                <ul className="list-center" role="nav">
                    <li><Link to="/viewers/mystik-beaver">Mystik Beaver</Link></li>
                    <li><Link to="/viewers/kwanza-werewolf">Kwanza Werewolf</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    };
};

export default Viewers;