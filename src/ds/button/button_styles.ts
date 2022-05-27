/* eslint-disable indent */
import styled, { css } from 'styled-components'

type ButtonActionType = {
  variant?: 'primary' | 'secondary' | 'ghost'
  customColor?: string
  customColorHover?: string
  customColorLabel?: string
  hasArrow?: boolean
}

export const ButtonAction = styled.button<ButtonActionType>`
  height: ${({ theme }) => theme.spacing.md};
  padding: 0 ${({ theme }) => theme.spacing.bit};

  &:hover {
    cursor: pointer;
  }

  ${({ customColorLabel }) =>
    customColorLabel &&
    css`
      color: ${customColorLabel};
    `}

  ${({ hasArrow }) =>
    hasArrow &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}

  ${({ variant, customColor, customColorHover }) =>
    variant === 'primary' &&
    css`
      border-radius: ${({ theme }) => theme.spacing.quark};
      border: none;
      background-color: ${({ theme }) =>
        customColor || theme.colors.base.default};

      &:hover {
        background-color: ${({ theme }) =>
          customColorHover || theme.colors.base.darkness};
        color: ${({ theme }) => theme.colors.base.default};
        opacity: ${customColor ? 0.8 : 1};
      }

      &:disabled {
        background-color: ${({ theme }) =>
          customColor || theme.colors.base.light};
        opacity: ${customColor ? 0.8 : 1};
        color: ${({ theme }) => theme.colors.neutral.light};
      }
    `}

  ${({ variant, customColor, customColorHover }) =>
    variant === 'secondary' &&
    css`
      border: 1px solid ${({ theme }) => customColor || theme.colors.base.dark};
      background-color: none;
      border-radius: 4px;

      &:hover {
        background-color: ${({ theme }) =>
          customColorHover || theme.colors.base.darkness};
        color: ${({ theme }) => theme.colors.neutral.lightness};
        opacity: ${customColor ? 0.8 : 1};
      }

      &:disabled {
        border-color: ${({ theme }) =>
          customColor || theme.colors.base.darkness};
        opacity: ${customColor ? 0.8 : 1};
        color: ${({ theme }) => theme.colors.neutral.light};
      }
    `}
  ${({ variant, customColor }) =>
    variant === 'ghost' &&
    css`
      border: none;
      background-color: transparent;
      color: ${({ theme }) => customColor || theme.colors.base.darkness};

      &:hover {
        text-decoration: underline;
      }

      &:disabled {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.neutral.light};
      }
    `}
`

export const Image = styled.img``
