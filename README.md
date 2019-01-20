# wasm-type
WebAssembly type utility

```npm i wasm-type --save```

## Included functions
all function return a new `Uint8ClampedArray`

all constants fall in the range \[0, 255]
```javascript
// VALUE TYPES
import { I32 } from 'wasm-type'  // 0x7F
import { I64 } from 'wasm-type'  // 0x7E
import { F32 } from 'wasm-type'  // 0x7D
import { F64 } from 'wasm-type'  // 0x7C

// BLOCK & ELEM TYPES
import { NONE } from 'wasm-type'  // 0x40
import { ANYFUNC } from 'wasm-type'  // 0x70

// FUNCTION TYPE
import { funcType } from 'wasm-type'  // (params: valueType[], returns: valueType[]) -> Uint8ClampedArray

// GLOBAL TYPE
import { globalType } from 'wasm-type'  // (type: valueType, mutable: bool) -> Uint8ClampedArray

// MEMORY TYPES
import { memoryType } from 'wasm-type'  // (min: int, max: int) -> Uint8ClampedArray
import { tableType } from 'wasm-type'  // (type: elemType, min: int, max: int) -> Uint8ClampedArray
import { resizableLimits } from 'wasm-type'  // (min: int, max: int) -> Uint8ClampedArray

// EXTERNAL TYPES
import { E_FUNC } from 'wasm-type'  // 0x00
import { E_TABLE } from 'wasm-type'  // 0x01
import { E_MEMORY } from 'wasm-type'  // 0x02
import { E_GLOBAL } from 'wasm-type'  // 0x03
```
