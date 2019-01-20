import { uint8 } from 'wasm-uint'

export const E_FUNC = uint8(0x00)[0]
export const E_TABLE = uint8(0x01)[0]
export const E_MEMORY = uint8(0x02)[0]
export const E_GLOBAL = uint8(0x03)[0]