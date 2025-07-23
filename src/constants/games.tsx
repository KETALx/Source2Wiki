export interface GameInfo
{
    PrettyName: string,
    IconPath?: string 
}

export const Games: Record<string, GameInfo> = {
  "cs2": {PrettyName: "Counter-Strike 2", IconPath: "/img/cs2_icon.png"},
  "hla": {PrettyName: "Half-Life: Alyx", IconPath: "/img/hla_icon.png"},
  "dota2": {PrettyName: "Dota 2", IconPath: "/img/dota2_icon.png"},
  "steamvr": {PrettyName: "Steam VR", IconPath: "/img/steamvr_icon.png"},
  "any": {PrettyName: "Any game"}
};