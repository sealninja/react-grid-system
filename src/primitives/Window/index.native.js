import { Dimensions } from 'react-native'

const WindowRef = { current: null }

const { width, height } = Dimensions.get('window')

WindowRef.current = {
  innerWidth: width,
  innerHeight: height,
  addEventListener: (___, callback) => {
    Dimensions.addEventListener('change', ({ window }) => {
      const {
        current: Window
      } = WindowRef
      Window.innerWidth = window.width
      Window.innerHeight = window.height
      callback()
    })
  },
  removeEventListener: (___, callback) => {
    Dimensions.removeEventListener('change', callback)
  },
}

export default WindowRef.current
