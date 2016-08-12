import React from 'react';

class ClubHistory extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2 className="heading">Chelsea History</h2>
                <table className="standings">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>League</th>
                            <th>Viewers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>08/13/2016</td>
                            <td>Chelsea</td>
                            <td>West Ham</td>
                            <td>Premier League</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};

export default ClubHistory;
