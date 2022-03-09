import styled from 'styled-components'

export const CheckedItemsContainer = styled.div`
  display: flex;
  gap: 1rem;
  span {
    font-size: ${({ theme }) => theme.font.sizes.xxs};
  }
`
type TextProps = {
  color?: string
}

export const Text = styled.span<TextProps>`
  letter-spacing: 2%;
  width: 100%;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: start;
  color: ${({ theme, color }) =>
    color ? color : theme.colors.neutral.lightness};
`

export const CheckIcon = styled.div`
  height: ${({ theme }) => theme.spacing.xxs};
  width: ${({ theme }) => theme.spacing.xxs};
`
