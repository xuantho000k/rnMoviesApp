import React from 'react'
import Button, { ButtonProps } from '../../../../shared/components/Button'
import { Colors } from '../../../../theme/colors'

function withStyle<T extends ButtonProps>(Component: React.ComponentType<T>) {
  return (props: T) => <Component {...props} />
}

const SearchButtonBase = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      style={[props.style, { backgroundColor: props.disabled ? Colors.gray5 : Colors.primary }]}
    />
  )
}

export const SearchButton = withStyle(SearchButtonBase)