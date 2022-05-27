import styled from 'styled-components'
import {
  ContentDiv,
  columnItensWithGap,
} from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
  justify-content: center;
`
export const Content = styled(ContentDiv)`
  gap: 0rem;
  width: 100%;
`
export const BlockText = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    justifyContent: 'center',
    alignItens: 'flex-start',
  })}
  padding: 0 60px;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    padding: 0;
    justify-content: flex-end;
  }
`
export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.superDistant};
  letter-spacing: 2%;
  font-family: 'Inter';
  text-align: start;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.font.sizes.xxs};
  }
`
export const TextPrincipal = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: start;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.font.sizes.md};
  }
`
type ImageProps = {
  square?: boolean
}

export const Image = styled.img<ImageProps>`
  height: 100%;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: auto;
  }
`
export const ContentContainer = styled.div`
  margin: 4rem auto;
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.light};
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 2rem;
    padding: 2rem 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: ${({ theme }) => theme.spacing.nano} auto;
  }
`
export const ContentCard = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    justifyContent: 'space-between',
    alignItens: 'flex-start',
  })}
  width: 310px;
  height: 250px;
}
`
export const ContentCardIcon = styled.img`
  width: 106px;
  height: 106px;
  align-self: center;
`
export const ContentCardText = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.ml};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  text-align: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.font.sizes.md};
  }
`
