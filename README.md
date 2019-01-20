# wasm-types
WebAssembly types utility

```npm i wasm-types --save```

## Included functions
all function return a new `Uint8ClampedArray`

all constants fall in the range \[0, 255]
```javascript
// VALUE TYPES
import { I32 } from 'wasm-types'  // 0x7F
import { I64 } from 'wasm-types'  // 0x7E
import { F32 } from 'wasm-types'  // 0x7D
import { F64 } from 'wasm-types'  // 0x7C

// BLOCK & ELEM TYPES
import { NONE } from 'wasm-types'  // 0x40
import { ANYFUNC } from 'wasm-types'  // 0x70

// FUNCTION TYPE
import { funcType } from 'wasm-types'  // (params: valueType[], returns: valueType[]) -> Uint8ClampedArray

// GLOBAL TYPE
import { globalType } from 'wasm-types'  // (type: valueType, mutable: bool) -> Uint8ClampedArray

// MEMORY TYPES
import { memoryType } from 'wasm-types'  // (min: int, max: int) -> Uint8ClampedArray
import { tableType } from 'wasm-types'  // (type: elemType, min: int, max: int) -> Uint8ClampedArray
import { resizableLimits } from 'wasm-types'  // (min: int, max: int) -> Uint8ClampedArray

// EXTERNAL TYPES
import { E_FUNC } from 'wasm-types'  // 0x00
import { E_TABLE } from 'wasm-types'  // 0x01
import { E_MEMORY } from 'wasm-types'  // 0x02
import { E_GLOBAL } from 'wasm-types'  // 0x03
```
