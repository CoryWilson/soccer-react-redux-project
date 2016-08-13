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
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>League</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/leagues/premier-league">Premier League</Link></td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td><Link to="/leagues/serie-a">Serie A</Link></td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
                {this.props.children}
            </div>
        )
    };
};

export default Leagues;