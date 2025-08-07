import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

export type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  title: string;
  style?: any;
};

const Button = ({ onPress, disabled, title, style }: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.disabled, style]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.7}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.gray1,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 12,
  },
  text: {
    color: Colors.gray2,
    fontSize: 16,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default Button;