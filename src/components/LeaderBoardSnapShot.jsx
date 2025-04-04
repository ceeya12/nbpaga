import React from 'react';
import {Card, Button, Table, Badge, Dropdown, Container} from 'react-bootstrap';
import styles from './LeaderBoardSnapShot.module.css'; // Import CSS module


// Sample data for the leaderboard
const winner = {
    name: 'Min Woo Lee',
    country: 'Australia',
    total: -20,
    scores: [66, 64, 63, 67],
    earnings: '$1,710,000',
    fedExPoints: 500,
    round: -3,
};



function LeaderBoardSnapShot({title, players}) {

    return (
        <div className="container mt-4">
            {/* Condensed All Players Table First Flight */}
            <div className={styles.allPlayersHeader}>
                <h5>{title}</h5>
            </div>
            <Table striped bordered hover responsive className={styles.customTable}>
                <thead>
                <tr>
                    <th>POS</th>
                    <th></th>
                    <th>PLAYER</th>
                    <th>TOTAL</th>
                    <th>ROUND</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>STROKES</th>
                </tr>
                </thead>
                <tbody>
                {players.map((player, index) => (
                    <tr key={index}>
                        <td>{player.position}</td>
                        <td>{player.change ? <span>↑{player.change}</span> : '–'}</td>
                        <td>{player.name}</td>
                        <td>{player.total}</td>
                        <td>{player.round}</td>
                        <td>{player.scores[0]}</td>
                        <td>{player.scores[1]}</td>
                        <td>{player.strokes}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>

    );
}

export default LeaderBoardSnapShot;

