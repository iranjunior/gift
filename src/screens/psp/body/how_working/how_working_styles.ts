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
  height: 100%;
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
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    row-gap: 2rem;
  }
`
export const ContentCard = styled.div`
  ${columnItensWithGap({
    gap: '0px',
    justifyContent: 'space-between',
    alignItens: 'center',
  })}
  width: 310px;
  height: 224px;
}
`
export const ContentCardNumber = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  text-align: center;
`
export const ContentCardTitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.ml};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  text-align: center;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    flex-wrap: wrap;
    button {
      width: 80%;
    }
  }
`
