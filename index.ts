import type { ESXClient } from './client/esx_client'
import type { ESXServer } from './server/esx_server'

const esx = globalThis?.exports?.es_extended?.getSharedObject()
export const ESX: ESXClient | undefined = esx
export const ESX_Client: ESXClient | undefined = esx
export const ESX_Server: ESXServer | undefined = esx

type ICopyToClipboard = ((val: string) => void) | undefined
export const copyToClipboard = globalThis?.exports?.['fivem-copy-to-clipboard']?.copyToClipboard as ICopyToClipboard
