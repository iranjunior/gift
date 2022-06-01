import styled from 'styled-components'

type ContainerProps = {
  show: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 51px;
  display: ${({ show }) => (show ? 'flex' : 'none')};

  background-color: ${({ theme }) => theme.primary.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: auto;
  }
`

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    margin: ${({ theme }) => theme.spacing.xxxs} 0;
  }
`
export const Logo = styled.img`
  height: 40%;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 15px;
  }
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  font-family: ${({ theme }) => theme.font.family.default};
  margin: 0 ${({ theme }) => theme.spacing.xs};
  a {
    font-size: ${({ theme }) => theme.font.sizes.xs};
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.colors.neutral.darkness};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 40%;
    font-size: ${({ theme }) => theme.font.sizes.xxs};
    a {
      font-size: ${({ theme }) => theme.font.sizes.xxs};
    }
  }
`
export const CloseButton = styled.button`
  align-self: center;
  position: absolute;
  right: calc(${({ theme }) => theme.spacing.internal} * 3);

  background-color: transparent;
  border: none;
  cursor: pointer;

  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: calc(${({ theme }) => theme.spacing.internal});
  }
`
