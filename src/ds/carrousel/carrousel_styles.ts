/* eslint-disable indent */
import styled from 'styled-components'

export const Container = styled.div`
  gap: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100vw;
  }
  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    (max-width: 1080px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 95vw;
  }
`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxxs};

  overflow: scroll;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0px ${({ theme }) => theme.spacing.xxxs};
  }
`

export const Tab = styled.div`
  height: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 120px;
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
    width: 120px;
  }
`
