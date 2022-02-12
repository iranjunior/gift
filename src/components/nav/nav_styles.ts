import styled from 'styled-components'
import { customersTheme } from '../../themes'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  height: 32px;
`

type CellProps = {
  active?: boolean
}
export const Cell = styled.div<CellProps>`
  background-color: ${(props) =>
    props.active
      ? customersTheme.backgroundColor.active
      : customersTheme.backgroundColor.disable};
  padding: ${customersTheme.padding};
  width: 100%;
  display: flex;
  justify-content: center;
`
type LinkProps = {
  active?: boolean
}
export const Link = styled.a<LinkProps>`
  color: ${(props) =>
    props.active ? customersTheme.color.active : customersTheme.color.disable};
  font-size: ${customersTheme.font.sizes.extraExtraExtraSmall};
`
