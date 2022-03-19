import styled from 'styled-components'
import {
  columnItensWithGap,
  ContentDiv,
} from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
  flex-wrap: wrap;
`
export const Content = ContentDiv

export const ContainerCards = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  row-gap: 6rem;
  column-gap: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    row-gap: 2rem;
  }
`
export const ContentCard = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    justifyContent: 'space-between',
    alignItens: 'center',
  })}
  width: 310px;
  height: 224px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
  }
}
`
export const ContentCardIcon = styled.img`
  width: 80px;
  height: 80px;
  align-self: center;
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

export const Video = styled.video`
  max-width: 1080px;
  width: 90%;
`
