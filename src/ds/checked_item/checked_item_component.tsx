import React from 'react'
import { useTheme } from 'styled-components'

import { ReactComponent as Icon } from '../../assets/images/check.svg'

import { CheckIcon, CheckedItemsContainer, Text } from './checked_item_styles'

type CheckedItemProps = {
  text: string
  key?: string
  color?: string
}

export const CheckedItem = ({ text, key, color }: CheckedItemProps) => {
  const theme = useTheme()
  return (
    <CheckedItemsContainer key={key}>
      <CheckIcon>
        <Icon stroke={color ?? theme.colors.neutral.lightness} />
      </CheckIcon>
      <Text
        color={color}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </CheckedItemsContainer>
  )
}
