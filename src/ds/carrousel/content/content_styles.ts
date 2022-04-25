/* eslint-disable indent */
import styled from 'styled-components'

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  padding: 0 60px;
  text-align: start;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.font.sizes.md};
    text-align: center;
    width: 90%;
    padding: 0;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin-top: ${({ theme }) => theme.spacing.nano};
    margin-bottom: ${({ theme }) => theme.spacing.nano};
  }
`
export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 0 60px;
  flex-wrap: wrap;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    padding: 0;
  }

  button {
    width: 187px;
    font-size: ${({ theme }) => theme.font.sizes.xxs};

    @media (max-width: calc(${({ theme }) =>
        theme.breakpoints.desktop} - 1px)) {
      width: 100%;
      padding: 0;
      margin: 0 ${({ theme }) => theme.spacing.xxxs};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    button {
      margin-top: ${({ theme }) => theme.spacing.nano};
      margin-bottom: ${({ theme }) => theme.spacing.nano};
    }
  }
`
type ImageProps = {
  src: string
  sizeInTablet?: 'cover' | 'contain'
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    border-radius: 0px 0px ${({ theme }) => theme.spacing.nano}
      ${({ theme }) => theme.spacing.nano};
  }

  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    (max-width: 1080px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    border-radius: 0px ${({ theme }) => theme.spacing.nano}
      ${({ theme }) => theme.spacing.nano} 0px;
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)),
    (width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 280px;
    background-position: center;
    background-size: ${({ sizeInTablet }) => sizeInTablet ?? 'cover'};
    background-repeat: no-repeat;
  }
`
export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary.default};
  border-radius: ${({ theme }) => theme.spacing.nano};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 16px;
  }
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

  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    (max-width: 1080px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;

    div {
      width: 100%;
    }
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    display: grid;
    grid-template-columns: none;
    grid-auto-rows: none;
    height: auto;
    padding: 0;
    margin: 0;
  }
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

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: 280px;
    align-items: center;
  }
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

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: 280px;
  }
`
