import React from 'react';

class ViewerStandings extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="section">
                <h2>Mystik Beaver's Most Watched</h2>
                <table className="standings">
                    <thead>
                        <tr>
                            <th>Club</th>
                            <th>Count</th>
                            <th>Most Recent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chelsea</td>
                            <td>100</td>
                            <td>08/13/2016: Chelsea vs. West Ham</td>
                        </tr>
                        <tr>
                            <td>Juventus</td>
                            <td>21</td>
                            <td>08/10/2016: Juventus vs. Napoli</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};

export default ViewerStandings;
