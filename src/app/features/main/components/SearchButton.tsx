import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type SearchButtonProps = {
  onPress: () => void;
  disabled?: boolean;
};

const SearchButton = ({ onPress, disabled }: SearchButtonProps) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.disabled]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.7}
  >
    <Text style={styles.text}>Search</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e0e0e0',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 12,
  },
  text: {
    color: '#555',
    fontSize: 16,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default SearchButton;