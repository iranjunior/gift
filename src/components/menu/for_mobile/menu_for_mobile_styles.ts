/* eslint-disable indent */
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.primary.light};
  height: fill-available;
`

export const ContainerBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.primary.light};
  height: auto;
`

export const Content = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  height: fill-available;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.internal} 0;
`
export const ContentBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  padding: ${({ theme }) => theme.spacing.internal};
`

export const Logo = styled.img`
  height: 64px;
`

export const Options = styled.div`
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }

  display: flex;
  width: fill-available;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 90%;

  button {
    width: 90%;
    margin-top: 30%;
    position: absolute;
    bottom: calc(${({ theme }) => theme.spacing.internal} * 4);
  }
`

export const OptionsMain = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  div:first-child {
    margin-top: 50%;
  }
`

type OptionType = {
  isExpanded: boolean
}

export const Option = styled.div<OptionType>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.nano}
    ${({ theme }) => theme.spacing.nano};
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    a {
      font-size: ${({ theme }) => theme.font.sizes.lg};
      font-family: ${({ theme }) => theme.font.family.sliver};
    }
  }
`

type LinkProps = {
  highlight?: boolean
}

export const Link = styled.a<LinkProps>`
  color: ${({ theme }) => theme.primary.darkness};
  white-space: nowrap;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-family: ${({ theme }) => theme.font.family.sliver};
  font-weight: ${({ highlight }) => (highlight ? 'bold' : 'normal')};
  display: flex;

  svg {
    height: ${({ theme }) => theme.font.sizes.md};
    width: ${({ theme }) => theme.font.sizes.md};
    align-self: flex-end;
    margin-bottom: ${({ theme }) => theme.spacing.quark};
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

export const DropdownTitle = styled.summary<SummaryType>`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ highlight }) => (highlight ? 'bold' : 'normal')};
  font-family: ${({ theme }) => theme.font.family.default};

  ${({ open }) =>
    open &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.primary.default};
    `}
`
export const DropdownContent = styled.div`
  position: absolute;
  left: -${({ theme }) => theme.spacing.nano};
  top: ${({ theme }) => theme.spacing.sm};
  width: 200px;
  z-index: 200;
  background-color: ${({ theme }) => theme.primary.default};
  border-radius: ${({ theme }) => theme.spacing.nano};
`
export const DropdownItem = styled.div`
  padding: ${({ theme }) => theme.spacing.internal};
`
export const DropdownItemLabel = styled.span``
