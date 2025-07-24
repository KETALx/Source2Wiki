// src/components/GameIcon.tsx
import React from 'react';
import { Games } from '@site/src/constants/games';
import { useColorMode } from '@docusaurus/theme-common';



interface GameIconProps {
  game: string;
  size?: number | string;
  link?: string;
  iconOnly?: boolean;
  suffix?: string;
}

const GameIcon: React.FC<GameIconProps> = ({ 
  game, 
  size = 16, 
  link, 
  iconOnly = false,
  suffix
}) => {

  if (!game) {
    throw new Error(`game parameter missing from GameIcon element`);
  }

  const gameData = Games[game];

  if (!gameData) {
    throw new Error(`Game "${game}" is invalid in GameIcon element`);
  }

  const { colorMode } = useColorMode(); // 'light' or 'dark'

// color overlay for the background
const overlayColor =
    colorMode === 'light'
      ? 'rgba(255, 255, 255, 0.3)' // lighten in light mode
      : 'rgba(0, 0, 0, 0.4)';      // slightly darken in dark mode

  const content = (
    <span
      style={{
        backgroundColor: gameData.Color,
        borderRadius: '6px',
        verticalAlign: 'middle',
        alignItems: 'center', 
        display: 'inline-flex', 
      }}
    >
      <span 
        style={{ 
          backgroundColor: overlayColor,
          paddingRight: '0.2rem',
          paddingLeft: '0.2rem',
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '4px',
          verticalAlign: 'middle',
        }}
      >
        {gameData.IconPath && (
          <img 
            src={gameData.IconPath} 
            alt={`${gameData.PrettyName} icon`}
            style={{ 
              width: `${size}px`, 
              height: `${size}px`,
              display: 'inline-block'
            }}
          />
        )}
        {!iconOnly && (
          <span
          style={{ 
              textAlign: "center",
              lineHeight: '1.5', // match image height better
            }}
          >
            {gameData.PrettyName}
            {suffix && suffix}
          </span>
        )}
      </span>
    </span>
  );

  if (link) {
    return (
      <a 
        href={link} 
        style={{ 
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default GameIcon;