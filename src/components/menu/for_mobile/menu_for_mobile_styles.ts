/* eslint-disable indent */
import styled, { css } from 'styled-components'

type ContainerProps = {
  fixed: boolean
  show: boolean
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  background-color: ${({ theme }) => theme.primary.light};
  height: fill-available;
`

export const ContainerBar = styled.div<ContainerProps>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  width: 100%;
  justify-content: center;
  margin: 0;
  background-color: ${({ theme }) => theme.primary.light};
  height: auto;
  flex-direction: column;
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
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.internal} 0;
`
export const ContentBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
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
  height: 100%;
`

export const OptionsMain = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: scroll;

  div:first-child {
    margin-top: ${({ theme }) => theme.spacing.internal};
  }
  div:last-child {
    margin-bottom: calc(${({ theme }) => theme.spacing.internal} * 3);
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

export const ContainerExpandedOptions = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.spacing.internal};
  background-color: ${({ theme }) => theme.primary.light};
  padding: ${({ theme }) => theme.spacing.internal};

  button {
    width: 100%;
  }
`
