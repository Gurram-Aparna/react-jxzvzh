import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

function Home() {
  const [search, setSearch] = useState('');
  const [players, setPlayers] = useState([]);

  const fetchData = () => {
    return fetch('https://www.balldontlie.io/api/v1/players')
      .then((response) => response.json())
      .then((data) => setPlayers(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    return fetch(`https://www.balldontlie.io/api/v1/players?search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.data);
      })
      .then((data) => {
        setSearch(data.data);
      });
  };

  const handleClear = () => {
    setSearch('');
    fetchData();
  };

  const viewDetails = () => {};

  return (
    <div className="App">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>
      <br />
      <br />
      <table border="1" width="100%">
        <tr>
          <th>Sno</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Teamname</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {players.map((player, i) => {
            return (
              <tr key={player.id}>
                <td>{i + 1}</td>
                <td>{player.first_name}</td>
                <td>{player.last_name}</td>
                <td>{player.team.name}</td>
                <td>
                  <button onClick={viewDetails}>view details</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
