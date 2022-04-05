/* eslint-disable indent */
import styled, { css } from 'styled-components'
type ContentProps = {
  isVertical?: boolean
}
type ContainerProps = ContentProps

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0
    ${({ theme, isVertical }) => (isVertical ? '0' : theme.spacing.internal)};
  position: fixed;
  z-index: 200;
  top: calc(
    ${({ theme }) => theme.spacing.xs} + ${({ theme }) => theme.font.sizes.xxxs}
  );
  background-color: ${({ theme }) => theme.primary.light};
  ${({ isVertical }) =>
    isVertical &&
    css`
      height: 85%;
    `}
`
export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 64px;
  padding: ${({ theme }) => theme.spacing.internal} 0;

  ${({ isVertical }) =>
    isVertical &&
    css`
      flex-direction: column;
      height: auto;
      align-items: flex-start;
      height: fill-available;
      justify-content: space-between;
    `}
`

export const Logo = styled.img`
  height: 64px;
`

type OptionsProps = {
  isVertical?: boolean
  showOptions?: boolean
}

export const Options = styled.div<OptionsProps>`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  width: 65%;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }

  button {
    width: 20%;
  }
  ${({ showOptions }) =>
    !showOptions
      ? css`
          @media (max-width: calc(${({ theme }) =>
              theme.breakpoints.desktop} - 1px)) {
            display: none;
          }
        `
      : css`
          display: flex;
          flex: 1;
          width: fill-available;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          button {
            width: 100%;
            margin-top: 30%;
          }
          div:first-child {
            margin-top: 35%;
          }
        `}
`

export const Option = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.nano};
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    a {
      font-size: ${({ theme }) => theme.font.sizes.lg};
      font-family: ${({ theme }) => theme.font.family.sliver};
    }
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.primary.darkness};
  white-space: nowrap;
  text-decoration: none;
`

export const HamburgerMenu = styled.div`
  display: none;
  align-items: center;
  svg {
    height: 24px;
    width: 24px;
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    display: flex;
  }
`

type ModalProps = {
  show: boolean
}

export const Modal = styled.div<ModalProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.light};
`

export const LogoMobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: fill-available;
  align-items: center;
`

export const DropdownContainer = styled.details`
  margin: 0 ${({ theme }) => theme.spacing.nano};
  position: relative;
`
export const DropdownTitle = styled.summary`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DropdownContent = styled.div`
  position: absolute;
  left: -${({ theme }) => theme.spacing.nano};
  top: ${({ theme }) => theme.spacing.sm};
  width: 200px;
  z-index: 200;
  background-color: ${({ theme }) => theme.primary.light};
  border-radius: ${({ theme }) => theme.spacing.nano};
`
export const DropdownItem = styled.div`
  padding: ${({ theme }) => theme.spacing.internal};
`
export const DropdownItemLabel = styled.span``
