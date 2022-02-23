import React from 'react'

import { Container, LeftSide, RightSide } from './card_product_styles'

export type CardProductProps = {
  leftSide: () => JSX.Element
  customLeftSideStyle?: React.CSSProperties
  rightSide: () => JSX.Element
  customRightSideStyle?: React.CSSProperties
}

type RightSideContentProps = {
  children: () => JSX.Element
}

export const RightSideContent: React.FC<RightSideContentProps> = ({
  children,
}) => React.createElement(children)

type LeftSideContentProps = {
  children: () => JSX.Element
}

export const LeftSideContent: React.FC<LeftSideContentProps> = ({ children }) =>
  React.createElement(children)

export const CardProduct: React.FC<CardProductProps> = ({
  leftSide,
  rightSide,
  customLeftSideStyle,
  customRightSideStyle,
}) => {
  return (
    <Container>
      <LeftSide style={customLeftSideStyle}>
        {React.createElement(leftSide)}
      </LeftSide>
      <RightSide style={customRightSideStyle}>
        {React.createElement(rightSide)}
      </RightSide>
    </Container>
  )
}
