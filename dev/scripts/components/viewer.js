import React from 'react'

export default React.createClass({
  render() {

    function capitalize_Words(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    let viewerName = this.props.params.viewer.replace(/-/g, ' ')
    viewerName = capitalize_Words(viewerName)

    return (
        <div>
            <div className="section">
                <h2>{viewerName}'s Most Watched</h2>
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
            <div className="section">
                <h2 className="heading">{viewerName}'s History</h2>
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
        </div>
    )
  }
})

