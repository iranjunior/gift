import styled from 'styled-components'
import { customersTheme } from '../../themes'

export const Container = styled.div``

export const Content = styled.div`
  width: 1080px;
  height: 560px;
  border-radius: 8px;
  background-color: ${customersTheme.color.highlight};
`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const Tab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`

type TabProps = {
  active?: boolean
}

export const TabTitle = styled.span<TabProps>`
  font-size: ${customersTheme.font.sizes.smallMedium};
  font-family: 'Clearface ITC Pro', sans-serif;
  color: ${(props) =>
    props.active
      ? customersTheme.color.indicatorActive
      : customersTheme.color.indicatorNeutral};
`

export const TabBar = styled.div<TabProps>`
  height: 2px;
  width: 100%;
  background-color: ${(props) =>
    props.active
      ? customersTheme.color.indicatorActive
      : customersTheme.color.indicatorNeutral};
`
