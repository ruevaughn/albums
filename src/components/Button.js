import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
// TouchableOpacity - Treated like it's a View tag

const Button = () => {
  return (
    <TouchableOpacity>
      <Text>Click me!!!</Text>
    </TouchableOpacity>
  );
}

export default Button;
