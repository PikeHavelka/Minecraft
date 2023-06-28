export type WebSocketData = {
  channel: string,
  message: MinecraftInitial | MinecraftStatus | MinecraftPlayersOnline
}

export type MinecraftInitial = {
  online: boolean,
  reasonForOffline: string | null,
  description: string,
  type: "initial"

  players: {
    online: number,
    max: number
  }

  version: string,
  favicon: string,

  mods: {
    [modName: string]: string
  }
}

export type MinecraftStatus = {
  online: boolean,
  reasonForOffline: string | null,
  type: "status"
}

export type MinecraftPlayersOnline = {
  playersOnline: number
  type: "onlinePlayers"
}

export type SideData = { serverOnline: boolean, serverDescription: string, serverPlayersMax: number, serverVersion: string, serverPlayersOnline: number }

export type MainData = {
  serverFavicon: string,

  serverMods: {
    [modName: string]: string
  }
}