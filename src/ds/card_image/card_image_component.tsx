import React from 'react'

import IllustrationArrow from '../../assets/images/illustration_arrow.svg'
import {
  Container,
  LeftSide,
  RightSide,
  ArrowContainer,
  Arrow,
} from './card_image_styles'

export type CardImageProps = {
  leftSide: () => JSX.Element
  customLeftSideStyle?: React.CSSProperties
  rightSide: () => JSX.Element
  customRightSideStyle?: React.CSSProperties
  showArrow?: boolean
  arrowReversed?: boolean
  ref?: React.ForwardedRef<HTMLDivElement>
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

const Card: React.FC<CardImageProps> = ({
  leftSide,
  rightSide,
  customLeftSideStyle,
  customRightSideStyle,
  showArrow,
  arrowReversed,
  ref,
}) => {
  return (
    <Container ref={ref}>
      <LeftSide style={customLeftSideStyle}>
        {React.createElement(leftSide)}
      </LeftSide>
      {showArrow ? (
        <ArrowContainer reverse={arrowReversed}>
          <Arrow reverse={arrowReversed} src={IllustrationArrow} />
        </ArrowContainer>
      ) : null}
      <RightSide style={customRightSideStyle}>
        {React.createElement(rightSide)}
      </RightSide>
    </Container>
  )
}

export const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  (props, ref) => <Card ref={ref} {...props} />
)
