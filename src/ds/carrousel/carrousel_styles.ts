import styled from 'styled-components'

export const Container = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxxs};
`

export const Tab = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
`
