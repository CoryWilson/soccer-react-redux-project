import React from 'react'

export default React.createClass({
  render() {

    function capitalize_Words(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    let clubName = this.props.params.club.replace(/-/g, ' ')
    clubName = capitalize_Words(clubName)

    return (
        <div>
            <div className="section">
                <h2>{clubName} Viewer Totals</h2>
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
            <div className="section">
                <h2 className="heading">{clubName} History</h2>
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
        </div>
    )
  }
})

