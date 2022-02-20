import React from 'react'
import { ButtonAction } from './button_styles'

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Ghost = 'ghost',
}

type ButtonProps = {
  label?: string
  type?: ButtonType
  customColor?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const Button: React.FC<ButtonProps> = ({
  label,
  type = ButtonType.Primary,
  ...props
}) => (
  <ButtonAction variant={type} {...props}>
    {label}
  </ButtonAction>
)
