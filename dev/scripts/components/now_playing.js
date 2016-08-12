import React from 'react';

class NowPlaying extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2 className="heading">Now Playing: All Leagues</h2>
                <table className="standings">
                    <thead>
                        <tr>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>League</th>
                            <th>Viewers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chelsea</td>
                            <td>West Ham</td>
                            <td>Premier League</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};

export default NowPlaying;
