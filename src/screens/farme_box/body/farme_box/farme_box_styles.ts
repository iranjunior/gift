import styled from 'styled-components'
import { ContentDiv } from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
  flex-wrap: wrap;
`
export const Content = ContentDiv

export const Video = styled.video`
  max-width: 1080px;
  width: 90%;
`
