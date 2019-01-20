import { varint7 } from 'wasm-leb128'

export const I32 = varint7(-0x01)[0]
export const I64 = varint7(-0x02)[0]
export const F32 = varint7(-0x03)[0]
export const F64 = varint7(-0x04)[0]