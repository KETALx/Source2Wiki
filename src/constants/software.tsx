export interface SoftwareInfo
{
    PrettyName: string,
    IconPath?: string,
    Color?: string,
    Link?: string
}

export const Games: Record<string, SoftwareInfo> = {
  "cs2": {PrettyName: "Counter-Strike 2", IconPath: "/img/cs2_icon.png", Color: "#ff981aff"},
  "hla": {PrettyName: "Half-Life: Alyx", IconPath: "/img/hla_icon.png", Color: "#0fb4a3ff"},
  "dota2": {PrettyName: "Dota 2", IconPath: "/img/dota2_icon.png", Color: "#941818ff"},
  "steamvr": {PrettyName: "Steam VR", IconPath: "/img/steamvr_icon.png", Color: "#5735a6ff"},
  "any": {PrettyName: "Any game"}
};

export const Tools: Record<string, SoftwareInfo> = {
  "s2v": {PrettyName: "Source2 Viewer", IconPath: "/img/tools/s2v.png", Color: "#1bb072ff", Link: "https://s2v.app/"},
  "radgen": {PrettyName: "RadGen", IconPath: "/img/tools/radgen.png", Color: "#91513a", Link: "https://radargenerator.github.io/"},
};

export const Socials: Record<string, SoftwareInfo> = {
  "discord": {PrettyName: "Discord", IconPath: "/img/socials/discord.svg", Color: "#494b5fff"},
};