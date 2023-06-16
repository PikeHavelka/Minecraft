export type webSocketData = {
  channel: string,
  message: minecraftInitial | minecraftStatus | minecraftPlayersOnline
}

export type minecraftInitial = {
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

export type minecraftStatus = {
  online: boolean,
  reasonForOffline: string | null,
  type: "status"
}

export type minecraftPlayersOnline = {
  playersOnline: number
  type: "onlinePlayers"
}

export type sideData = { serverOnline: boolean, serverDescription: string, serverPlayersMax: number, serverVersion: string, serverPlayersOnline: number }

export type mainData = { serverFavicon: string, serverMods: {} }