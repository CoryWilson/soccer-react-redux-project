import React from 'react'

export default React.createClass({
  render() {

    function capitalize_Words(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    let leagueName = this.props.params.league.replace(/-/g, ' ')
    leagueName = capitalize_Words(leagueName)

    return (
        <div>
            <div className="section">
                <h2>{leagueName} Standings</h2>
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
            <div className="section">
                <h2 className="heading">{leagueName} History</h2>
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