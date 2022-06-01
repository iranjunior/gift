/* eslint-disable indent */
import styled, { css } from 'styled-components'

type ContainerProps = {
  fixed: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.primary.light};
  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
      z-index: 200;
      top: 0;
      left: 0;
    `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 64px;
  padding: ${({ theme }) => theme.spacing.internal} 0;

  @media (min-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 1px)) and (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
`

export const Logo = styled.img`
  height: 64px;
  cursor: pointer;
`
export const Space = styled.div`
  flex-grow: 1;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2rem;

  @media (min-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 1px)) and (max-width: 1200px) {
    gap: 0.5rem;
  }
  button {
    font-size: ${({ theme }) => theme.font.sizes.xs};
    max-width: 260px;
    width: 100%;

    @media (min-width: calc(${({ theme }) =>
        theme.breakpoints.desktop} - 200px)) {
      padding: 0 3rem;
    }
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    display: none;
  }

  @media (min-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 1px)) and (max-width: 1200px) {
    gap: 0.5rem;
  }
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

type LinkProps = {
  highlight: boolean
}

export const Link = styled.a<LinkProps>`
  color: #2c2f30;
  white-space: nowrap;
  text-decoration: none;

  ${({ highlight }) =>
    highlight &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.base.default};
    `}
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.base.default};
  }
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
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.light};

  overflow-y: scroll;
`

export const LogoMobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: fill-available;
  align-items: center;
`

type DropdownContainerProps = {
  open: boolean
}

export const DropdownContainer = styled.div<DropdownContainerProps>`
  margin: 0 ${({ theme }) => theme.spacing.nano};
  position: relative;

  ${(props) =>
    props.open &&
    css`
      summary {
        border-bottom: 2px solid ${({ theme }) => theme.primary.default};
        font-weight: normal;
      }
    `}
`

type SummaryType = {
  open: boolean
  highlight: boolean
}

export const DropdownTitle = styled.div<SummaryType>`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.default};
  white-space: nowrap;
  color: #2c2f30;

  ${({ highlight }) =>
    highlight &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.base.default};
    `}

  &:hover {
    cursor: pointer;
  }

  ${({ open }) =>
    open &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.base.default};
    `}
`
export const DropdownContent = styled.div<DropdownContainerProps>`
  position: absolute;
  left: -${({ theme }) => theme.spacing.nano};
  top: ${({ theme }) => theme.spacing.sm};
  width: 240px;
  z-index: 200;
  background-color: ${({ theme }) => theme.primary.default};
  border-radius: ${({ theme }) => theme.spacing.nano};
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-flow: column;
`
export const DropdownItem = styled.div`
  padding: ${({ theme }) => theme.spacing.internal};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary.light}4d;
  }
`
export const DropdownItemLabel = styled.span``

type BarProps = {
  show: boolean
}

export const Bar = styled.div<BarProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};

  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base.default};
  margin-top: 2px;
`
