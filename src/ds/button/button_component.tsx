import React from 'react'
import IconArrowRight from '../../assets/images/arrow-right.svg'
import { ButtonAction, Image } from './button_styles'

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Ghost = 'ghost',
}

type ButtonProps = {
  label?: string
  type?: ButtonType
  customColor?: string
  hasArrow?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const Button: React.FC<ButtonProps> = ({
  label,
  type = ButtonType.Primary,
  ...props
}) => (
  <ButtonAction variant={type} {...props}>
    {label}
    {props.hasArrow && <Image src={IconArrowRight} />}
  </ButtonAction>
)
