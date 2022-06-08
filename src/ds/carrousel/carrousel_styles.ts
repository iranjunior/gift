/* eslint-disable indent */
import styled from 'styled-components'

export const Container = styled.div`
  gap: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100vw;
  }
  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    (max-width: 1080px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 95vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin-top: ${({ theme }) => theme.spacing.nano};
    margin-bottom: ${({ theme }) => theme.spacing.nano};
    width: 95vw;
  }
`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;

  overflow: scroll;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0px ${({ theme }) => theme.spacing.xxxs};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: 0;
    margin-top: ${({ theme }) => theme.spacing.nano};
    margin-bottom: ${({ theme }) => theme.spacing.nano};
    overflow: unset;
    width: auto;
    gap: ${({ theme }) => theme.spacing.xxxs};
  }
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }
  ::-webkit-scrollbar-thumb:hover {
    display: none;
  }
  ::-webkit-scrollbar-thumb:active {
    display: none;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }
`

export const Tab = styled.div`
  min-height: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 ${({ theme }) => theme.spacing.nano};

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: auto;
    margin: 0;
  }

  &:hover {
    cursor: pointer;

    span {
      color: ${({ theme }) => theme.colors.base.default};
    }
    div {
      background-color: ${({ theme }) => theme.colors.base.default};
    }
  }
`

type TabProps = {
  active?: boolean
}

export const TabTitle = styled.span<TabProps>`
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-family: ${({ theme }) => theme.font.family.sliver};
  color: ${({ theme, active }) =>
    active ? theme.colors.neutral.darkness : theme.colors.neutral.default};
`

export const TabBar = styled.div<TabProps>`
  height: 2px;
  width: 100%;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.neutral.darkness : theme.colors.neutral.default};
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    min-width: 120px;
  }
`
