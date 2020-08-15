import React from 'react';

import { Text, TextProps } from './Themed';

export const MonoText: React.FC<TextProps> = (props, { children }) => {
  return (
    <Text
      {...props}
      style={[props.style /* , { fontFamily: 'space-mono' } */]}
      {...children}
    />
  );
};
