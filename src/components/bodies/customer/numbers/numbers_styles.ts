import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary.default};
  width: 100%;
  padding: 5% 0;
`
export const Number = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.giant};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const SubtitleNumber = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const Message = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
`
export const BlockNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const BlockNumbers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  width: 600px;
  text-align: center;
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
`
