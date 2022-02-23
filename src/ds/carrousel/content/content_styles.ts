import styled from 'styled-components'

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  padding: 0 60px;
`
export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 0 60px;
  button {
    width: 187px;
  }
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
export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary.default};
  border-radius: ${({ theme }) => theme.spacing.nano};
`
export const ContainerCard = styled.div`
  height: 560px;
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  border-radius: ${({ theme }) => theme.spacing.nano};
  background-color: transparent;
  align-items: center;
`

export const LeftSide = styled.div`
  width: 540px;
  height: 560px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`

export const RightSide = styled.div`
  width: 540px;
  height: 560px;
  flex: 1;
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
