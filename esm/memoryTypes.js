import { varuint1, varuint32 } from 'wasm-leb128'

export function resizableLimits (min, max) {
  return Uint8ClampedArray.of(
    max ? varuint1(0x01) : varuint1(0x00),
    varuint32(min),
    ...(max ? varuint32(max) : []),
  )
}

export function tableType (type, min, max) {
  return Uint8ClampedArray.of(type, ...resizableLimits(min, max))
}

export function memoryType (min, max) {
  return resizableLimits(min, max)
}