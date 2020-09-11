import React from 'react'
import { View } from 'react-native'

export default ({
  children,
  style,
  ...rest
}) => (
  <View
    style={[{ flexDirection: 'row' }, style]}
    {...rest}
  >
    {children}
  </View>
)
