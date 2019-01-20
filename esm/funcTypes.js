import { varint7, varint32, varuint1 } from 'wasm-leb128'

export function funcType (params, returns) {
  return Uint8ClampedArray.of(
    ...varint7(-0x20),
    ...varint32(params.length),
    ...params,
    ...varuint1(returns.length),
    ...returns,
  )
}