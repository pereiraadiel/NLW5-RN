import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string,
  isActivated?: boolean
}

export function Button( { title, isActivated = true, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity 
      style={[ isActivated ? styles.container : styles.containerInative ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    padding: 10,
    opacity: 30,
  },
  containerInative: {
    backgroundColor: colors.green_light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    padding: 10,
    opacity: 30,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading,
  },
});