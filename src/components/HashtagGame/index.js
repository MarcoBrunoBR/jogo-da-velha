import React from "react";
import "./styles.css";

import PlayerGame from "../../objects/PlayerGame";

const HashtagGame = () => (
  <ul className="hashtag-game">
    <li className="item">
      <PlayerGame content="X" />
    </li>
    <li className="item">
      <PlayerGame content="O" />
    </li>
    <li className="item">
      <PlayerGame content="X" />
    </li>
    <li className="item">
      <PlayerGame content="O" />
    </li>
    <li className="item">
      <PlayerGame content="O" />
    </li>
    <li className="item">
      <PlayerGame content="O" />
    </li>
    <li className="item">
      <PlayerGame content="X" />
    </li>
    <li className="item">
      <PlayerGame content="O" />
    </li>
    <li className="item">
      <PlayerGame content="X" />
    </li>
  </ul>
);

export default HashtagGame;
