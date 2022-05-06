import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.internal};
  margin-top: calc(${({ theme }) => theme.spacing.xl} * 2.5);
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1120px;
  justify-content: center;
  gap: 8rem;
  align-items: center;
  flex-wrap: nowrap;
  align-self: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    margin-top: ${({ theme }) => theme.spacing.internal};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 1rem;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }
`
export const Logo = styled.img`
  height: ${({ theme }) => theme.font.sizes.md};
`

export const BlockText = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin-bottom: ${({ theme }) => theme.spacing.internal};
  }
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: ${({ theme }) => theme.spacing.internal};
  display: flex;
  height: calc(100vh - 40px);
  width: 100%;
  max-width: 1120px;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  align-self: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 1rem;
    height: auto;
    flex-wrap: wrap;
  }
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  letter-spacing: 2%;
  width: 100%;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
`
export const TextPrincipal = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxxl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  font-weight: normal;
  margin: 0;
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  display: flex;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;

    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
  }

  img {
    height: 6rem;
  }
`

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    margin-top: calc(${({ theme }) => theme.spacing.internal} * 2);
  }
`
export const RowContacts = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.internal};
`
export const Contact = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
  margin-left: ${({ theme }) => theme.spacing.internal};
`
