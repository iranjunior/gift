import styled from 'styled-components'
import {
  ContentDiv,
  columnItensWithGap,
  rowItensWithGap,
} from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = ContentDiv

export const BlockText = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    justifyContent: 'center',
    alignItens: 'center',
  })}
  padding: 0 60px;
`

export const TextPrincipal = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: start;
`
type ImageProps = {
  square?: boolean
}

export const Image = styled.img<ImageProps>`
  height: 104px;
`
export const Main = styled.div`
  ${columnItensWithGap({
    gap: '2rem',
    justifyContent: 'center',
    alignItens: 'center',
  })}
`

export const ContainerCards = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  row-gap: 6rem;
  column-gap: 1rem;
  width: 70%;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    row-gap: 2rem;
  }
`
export const ContentCard = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    justifyContent: 'flex-start',
    alignItens: 'center',
  })}
  width: 310px;
  height: 250px;
}
`
export const ContentCardIcon = styled.img`
  width: 80px;
  height: 80px;
  align-self: center;
  justify-self: flex-start;
`
export const ContentCardTitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.ml};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  text-align: center;
  height: 64px;
`
export const ContentCardText = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxs};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: center;
`

export const ContainerButtons = styled.div`
  ${rowItensWithGap({
    gap: '1rem',
    justifyContent: 'center',
    alignItens: 'center',
  })}
  width: 336px;
  flex-wrap: wrap;

  button {
    font-size: ${({ theme }) => theme.font.sizes.xxs};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    flex-wrap: wrap;
    button {
      width: 80%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: ${({ theme }) => theme.spacing.nano} auto;
  }
`
