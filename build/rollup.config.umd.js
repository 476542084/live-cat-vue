import base, { OUTPUT_DIT, LIBRARY_NAME, liveCatPKG } from './rollup.config.base'
import path from 'path'
const config = {
    ...base,
    output: {
        name: LIBRARY_NAME,
        file: path.join(OUTPUT_DIT, liveCatPKG.browser),
        format: 'umd',
    },
}
export default config
