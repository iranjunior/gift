import styled from 'styled-components'
import {
  ContentDiv,
  columnItensWithGap,
} from '../../../../../ds/styles/common_styles'
export const Container = styled.div`
  ${columnItensWithGap({ gap: '8rem', alignItens: 'center' })}
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = ContentDiv
export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) => theme.primary.light};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.spacing.nano} 0 0
    ${({ theme }) => theme.spacing.nano};
  button {
    max-width: 187px;
  }
`
export const LeftSideHeader = styled.div`
  ${columnItensWithGap({ gap: '1rem', alignItens: 'flex-start' })}
`
export const LeftSideLegend = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.sizes.xxxs};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const LeftSideTitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
`
export const LeftSideSubtitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
`

export const RightSideContainer = styled.div`
  background-color: ${({ theme }) => theme.primary.light};
  height: 100%;
  width: 100%;
  border-radius: 0 ${({ theme }) => theme.spacing.nano}
    ${({ theme }) => theme.spacing.nano} 0;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
`
