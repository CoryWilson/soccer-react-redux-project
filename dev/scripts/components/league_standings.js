import React from 'react';

class LeagueStandings extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2>Premier League Standings</h2>
                <table className="standings">
                    <thead>
                        <tr>
                            <th>Viewer</th>
                            <th>Games Watched</th>
                            <th>Watched Recently</th>
                            <th>Most Watched</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mystik Beaver</td>
                            <td>2</td>
                            <td>08/13/2016: Chelsea vs. West Ham</td>
                            <td>Chelsea</td>
                        </tr>
                        <tr>
                            <td>Kwanza Werewolf</td>
                            <td>1</td>
                            <td>08/13/2016: Manchester United vs. Sunderland</td>
                            <td>Manchester United</td>
                        </tr>
                        <tr>
                            <td>Reefa5</td>
                            <td>0</td>
                            <td>no games watched recently =()</td>
                            <td>n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};

export default LeagueStandings;
