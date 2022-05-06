import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary.light};
  margin: ${({ theme }) => theme.spacing.internal} 0;
`
type LogoProps = {
  compact?: boolean
}

export const Logo = styled.img<LogoProps>`
  height: ${({ compact, theme }) =>
    compact ? theme.font.sizes.xxl : theme.font.sizes.xxxl};
`

export const Header = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  align-self: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 1rem;
    height: auto;
    flex-wrap: wrap;
  }
`
