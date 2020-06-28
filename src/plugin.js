// 只有export可以触发tree shaking机制

export const a = 1
export const b = 2
export function random() {
  console.log('random');
}

export default {
}