import React, { ReactNode } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './style.css';
import { Games } from '@site/src/constants/games';

const GameTabs: React.FC<Record<string, React.ReactNode>> = (props) => {
  const gameContent: Record<string, React.ReactNode> = {};
  
  Object.entries(props).forEach(([key, value]) => {
    if (value && (React.isValidElement(value) || typeof value === 'object')) {
      gameContent[key] = value;
    }
  });

  if (!gameContent || typeof gameContent !== 'object') {
    console.warn('GameTabs: No valid game content found in props');
    return <div>No game content available</div>;
  }

  // Check if gameContent has any entries
  const entries = Object.entries(gameContent);
  if (entries.length === 0) {
    return <div>No games configured</div>;
  }

  return (
    <Tabs queryString="game" className="game-tabs">
      {entries.map(([gameKey, content]) => {
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