import styled from 'styled-components'
import { customersTheme } from '../../themes'

export const Container = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
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
