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
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>Club</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/clubs/chelsea">Chelsea</Link></td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td><Link to="/clubs/manchester-united">Manchester United</Link></td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
                {this.props.children}
            </div>
        )
    };
};

export default Clubs;
