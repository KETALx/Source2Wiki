import React, { ReactNode } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './style.css';
import { Games } from '@site/src/constants/games';

const GameTabs: React.FC<Record<string, React.ReactNode>> = ({ gameContent }) => {
  return (
    <Tabs queryString="game" className="game-tabs">
      {Object.entries(gameContent).map(([gameKey, content]) => {
        const gameInfo = Games[gameKey];
        if (!gameInfo || !content) return null;
        return (
          <TabItem 
            key={gameKey}
            value={gameKey} 
            label={gameInfo.PrettyName} 
            attributes={{className: gameKey}}
          >
            {content}
          </TabItem>
        );
      })}
    </Tabs>
  );
};

export default GameTabs;