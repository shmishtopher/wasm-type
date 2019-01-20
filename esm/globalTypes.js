import { varuint1 } from 'wasm-leb128'

export function globalType (type, mutable) {
  return Uint8ClampedArray.of(type, ...varuint1(mutable ? 1 : 0))
}