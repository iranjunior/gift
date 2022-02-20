import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: ${({ theme }) => theme.spacing.xxxs} auto;
  height: 64px;
  padding: ${({ theme }) => theme.spacing.xxxs} 0px;
`
export const Logo = styled.img`
  height: 64px;
`
export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 65%;
`
export const OptionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const Option = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px ${({ theme }) => theme.spacing.xxxs};
`

export const Link = styled.a`
  color: ${({ theme }) => theme.primary.darkness};
  white-space: nowrap;
  text-decoration: none;
`
