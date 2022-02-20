import React from 'react'

import { Container, LeftSide, RightSide } from './card_product_styles'

export type CardProductProps = {
  leftSide: () => JSX.Element
  rightSide: () => JSX.Element
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
}) => {
  return (
    <Container>
      <LeftSide>{React.createElement(leftSide)}</LeftSide>
      <RightSide>{React.createElement(rightSide)}</RightSide>
    </Container>
  )
}
