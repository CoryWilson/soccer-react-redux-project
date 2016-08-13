import React from 'react';

// class LeagueHistory extends React.Component {
//     constructor() {
//         super();
//     };

//     render() {
//         return (
//             <div className="section">
//                 <h2 className="heading">Premier League History</h2>
//                 <table className="standings">
//                     <thead>
//                         <tr>
//                             <th>Date</th>
//                             <th>Home Team</th>
//                             <th>Away Team</th>
//                             <th>Viewers</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>08/13/2016</td>
//                             <td>Chelsea</td>
//                             <td>West Ham</td>
//                             <td>2</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         )
//     };
// };

// export default LeagueHistory;

export default React.createClass({
    render() {
        return (
            <div className="section">
                <h2 className="heading">Premier League History</h2>
                <table className="standings">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>Viewers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>08/13/2016</td>
                            <td>Chelsea</td>
                            <td>West Ham</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})
