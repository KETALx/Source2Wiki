export interface GameInfo
{
    PrettyName: string,
    IconPath?: string,
    Color?: string
}

export const Games: Record<string, GameInfo> = {
  "cs2": {PrettyName: "Counter-Strike 2", IconPath: "/img/cs2_icon.png", Color: "#ff981aff"},
  "hla": {PrettyName: "Half-Life: Alyx", IconPath: "/img/hla_icon.png", Color: "#0fb4a3ff"},
  "dota2": {PrettyName: "Dota 2", IconPath: "/img/dota2_icon.png", Color: "#941818ff"},
  "steamvr": {PrettyName: "Steam VR", IconPath: "/img/steamvr_icon.png", Color: "#5735a6ff"},
  "any": {PrettyName: "Any game"}
};