import { CONSTANTS as BSC } from './bsc'
import { CONSTANTS as ETHEREUM } from './ethereum'
import { CONSTANTS as FANTOM } from './fantom'
import { CONSTANTS as POLYGON } from './polygon'
import { CONSTANTS as SOLANA } from './solana'
import { CONSTANTS as VELAS } from './velas'

let CONSTANTS = {}

CONSTANTS['ethereum'] = ETHEREUM
CONSTANTS['bsc'] = BSC
CONSTANTS['polygon'] = POLYGON
CONSTANTS['solana'] = SOLANA
CONSTANTS['fantom'] = FANTOM
CONSTANTS['velas'] = VELAS

export { CONSTANTS }
