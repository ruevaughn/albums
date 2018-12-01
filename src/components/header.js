  import React from 'react';
  import { Text } from 'react-native';

  const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums</Text>;
  };

  const styles = {
    textStyle: {
      fontSize: 20,
      textAlign: 'center',
      top: 200
    }
  };

  export default Header;
