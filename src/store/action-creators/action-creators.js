import { LOAD_VASES } from '../../constants/action-types'

export function loadVases() {
  console.log('click')
  return {
    type: LOAD_VASES,
  }
}
