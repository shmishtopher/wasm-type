'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wasmLeb128 = require('wasm-leb128');
var wasmUint = require('wasm-uint');

const I32 = wasmLeb128.varint7(-0x01)[0];
const I64 = wasmLeb128.varint7(-0x02)[0];
const F32 = wasmLeb128.varint7(-0x03)[0];
const F64 = wasmLeb128.varint7(-0x04)[0];

const NONE = wasmLeb128.varint7(-0x40)[0];

const ANYFUNC = wasmLeb128.varint7(-0x10)[0];

function funcType (params, returns) {
  return Uint8ClampedArray.of(
    ...wasmLeb128.varint7(-0x20),
    ...wasmLeb128.varint32(params.length),
    ...params,
    ...wasmLeb128.varuint1(returns.length),
    ...returns,
  )
}

function globalType (type, mutable) {
  return Uint8ClampedArray.of(type, ...wasmLeb128.varuint1(mutable ? 1 : 0))
}

function resizableLimits (min, max) {
  return Uint8ClampedArray.of(
    max ? wasmLeb128.varuint1(0x01) : wasmLeb128.varuint1(0x00),
    wasmLeb128.varuint32(min),
    ...(max ? wasmLeb128.varuint32(max) : []),
  )
}

function tableType (type, min, max) {
  return Uint8ClampedArray.of(type, ...resizableLimits(min, max))
}

function memoryType (min, max) {
  return resizableLimits(min, max)
}

const E_FUNC = wasmUint.uint8(0x00)[0];
const E_TABLE = wasmUint.uint8(0x01)[0];
const E_MEMORY = wasmUint.uint8(0x02)[0];
const E_GLOBAL = wasmUint.uint8(0x03)[0];

exports.I32 = I32;
exports.I64 = I64;
exports.F32 = F32;
exports.F64 = F64;
exports.NONE = NONE;
exports.ANYFUNC = ANYFUNC;
exports.funcType = funcType;
exports.globalType = globalType;
exports.resizableLimits = resizableLimits;
exports.tableType = tableType;
exports.memoryType = memoryType;
exports.E_FUNC = E_FUNC;
exports.E_TABLE = E_TABLE;
exports.E_MEMORY = E_MEMORY;
exports.E_GLOBAL = E_GLOBAL;
