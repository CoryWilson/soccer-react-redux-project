import React from 'react';

class ClubStandings extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2>Chelsea Viewer Totals</h2>
                <table className="standings">
                    <thead>
                        <tr>
                            <th>Viewer</th>
                            <th>Count</th>
                            <th>Most Recent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mystik Beaver</td>
                            <td>100</td>
                            <td>08/13/2016: Chelsea vs. West Ham</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};

export default ClubStandings;
