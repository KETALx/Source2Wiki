import React, { ReactNode } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './style.css';

interface GameTabsProps {
  cs2?: ReactNode;
  steamvr?: ReactNode;
  dota2?: ReactNode;
  hla?: ReactNode;
}

const GameTabs: React.FC<GameTabsProps> = ({
  cs2,
  steamvr,
  dota2,
  hla
}) => {
  return (
    <Tabs queryString="game" className="game-tabs">
      {cs2 && (
        <TabItem value="cs2" label="Counter-Strike 2" attributes={{className: "cs2"}}>
          {cs2}
        </TabItem>
      )}
     
      {steamvr && (
        <TabItem value="steamvr" label="SteamVR Home" attributes={{className: "steamvr"}}>
          {steamvr}
        </TabItem>
      )}
     
      {dota2 && (
        <TabItem value="dota2" label="Dota 2" attributes={{className: "dota2"}}>
          {dota2}
        </TabItem>
      )}
     
      {hla && (
        <TabItem value="hla" label="Half-Life: Alyx" attributes={{className: "hla"}}>
          {hla}
        </TabItem>
      )}
    </Tabs>
  );
};

export default GameTabs;