import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export default function player() {
  const [playerData, setPlayerData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/players/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPlayerData(json.data);
        setIsLoading(false);
      });
  }, []);

  const handleBackButton = () => {
    navigate.push('/');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>id</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {playerData.first_name} {playerData.last_name}
            </td>
            <td>{playerData.id}</td>
            <td>{playerData.team.name}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleBackButton}>Back</button>
    </div>
  );
}
