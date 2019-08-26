import React, { useState } from "react";
import "./styles.css";

import PlayerGame from "../../objects/PlayerGame";

const HashtagGame = () => {
  const [players, setPlayers] = useState([{
    id: 1,
    content: ""
  },
  {
    id: 2,
    content: ""
  },
  {
    id: 3,
    content: ""
  },
  {
    id: 4,
    content: ""
  },
  {
    id: 5,
    content: ""
  },
  {
    id: 6,
    content: ""
  },
  {
    id: 7,
    content: ""
  },
  {
    id: 8,
    content: ""
  },
  {
    id: 9,
    content: ""
  }]);

  const handleClick = id => setPlayers(
    old => old.map(player => player.id === id ? { id, content: "X" } : player)
  )

  return (
    <ul className="hashtag-game">
      {players.map(({ id, content }) => (
        <li key={id} className="item" onClick={() => handleClick(id)}>
          <PlayerGame content={content} />
        </li>
      ))}
    </ul>
  );
}

export default HashtagGame;
