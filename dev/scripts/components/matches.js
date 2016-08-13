import React from 'react';
import StatusIndicator from './status_indicator';

class Matches extends React.Component {
    constructor() {
        super();
    }
    render() {
        let today = new Date()
        const day = today.getDate()
        const month = today.getMonth()
        const year = today.getFullYear()
        today = day + '/' + month + '/' + year

        return (
            <div>
                <div className="section">
                    <h2>{today} Premier League Matches</h2>
                    <table className="standings">
                        <thead>
                            <tr>
                                <th>Home</th>
                                <th>Away</th>
                                <th>Viewers</th>
                                <th>Watching?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Chelsea</td>
                                <td>West Ham</td>
                                <td>0</td>
                                <td>
                                    <StatusIndicator />
                                </td>
                            </tr>
                            <tr>
                                <td>Everton</td>
                                <td>Tottenham</td>
                                <td>0</td>
                                <td>
                                    <StatusIndicator />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
      }
}

export default Matches;