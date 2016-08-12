import React from 'react';

class ViewerHistory extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2 className="heading">Mystik Beaver's History</h2>
                <table className="standings">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>League</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>08/13/2016</td>
                            <td>Chelsea</td>
                            <td>West Ham</td>
                            <td>Premier League</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};

export default ViewerHistory;
