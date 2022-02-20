import styled, { css } from 'styled-components'

type ButtonActionType = {
  variant?: 'primary' | 'secondary' | 'ghost'
  customColor?: string
}

export const ButtonAction = styled.button<ButtonActionType>`
  height: ${({ theme }) => theme.spacing.md};
  padding: 0 ${({ theme }) => theme.spacing.xxs};
  width: 100%;
  ${({ variant, customColor }) =>
    variant === 'primary' &&
    css`
      border-radius: ${({ theme }) => theme.spacing.quark};
      border: none;
      background-color: ${({ theme }) => customColor || theme.primary.default};

      &:hover {
        background-color: ${({ theme }) => customColor || theme.primary.light};
        opacity: ${customColor ? 0.8 : 1};
      }

      &:disabled {
        background-color: ${({ theme }) => customColor || theme.primary.light};
        opacity: ${customColor ? 0.8 : 1};
        color: ${({ theme }) => theme.colors.neutral.light};
      }
    `}

  ${({ variant, customColor }) =>
    variant === 'secondary' &&
    css`
      border: 1px solid ${({ theme }) => customColor || theme.primary.dark};
      background-color: none;
      border-radius: 4px;

      &:hover {
        border-color: ${({ theme }) => customColor || theme.primary.darkness};
        opacity: ${customColor ? 0.8 : 1};
      }

      &:disabled {
        border-color: ${({ theme }) => customColor || theme.primary.darkness};
        opacity: ${customColor ? 0.8 : 1};
        color: ${({ theme }) => theme.colors.neutral.light};
      }
    `}
  ${({ variant, customColor }) =>
    variant === 'ghost' &&
    css`
      border: none;
      background-color: transparent;
      color: ${({ theme }) => customColor || theme.primary.darkness};

      &:hover {
        text-decoration: underline;
      }

      &:disabled {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.neutral.light};
      }
    `}
`
