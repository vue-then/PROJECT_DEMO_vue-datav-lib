import { random} from './plugin'
import json from '../package.json'

const say = () => {
  console.log('箭头幻术');
}

console.log('哈哈..', random, say(), json)

export default random