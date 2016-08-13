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
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>Viewer</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/viewers/mystik-beaver">Mystik Beaver</Link></td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td><Link to="/viewers/kwanza-werewolf">Kwanza Werewolf</Link></td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
                {this.props.children}
            </div>
        )
    };
};

export default Viewers;