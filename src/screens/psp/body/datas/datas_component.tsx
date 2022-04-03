import React, { useContext, useRef } from 'react'
import { useTheme } from 'styled-components'
import PieChartImage from '../../../../assets/images/pie_chart.svg'
import { DataContext } from '../../../../context/data'
import { Button, ButtonType, HeaderCentered } from '../../../../ds'
import { CardImage } from '../../../../ds/card_image'
import { useIntersection } from '../../../../hooks/useIntersection'

import { Container, Content, PieChart, ContainerButtons } from './datas_styles'

type DatasProps = {
  id?: string
  className?: string
}

export const Datas: React.FC<DatasProps> = ({ id }) => {
  const {
    body: {
      psp: { datas },
    },
  } = useContext(DataContext)
  const theme = useTheme()
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container id={id}>
      <Content ref={ref}>
        <HeaderCentered title={datas.title} />
        <PieChart src={PieChartImage} />
        <ContainerButtons>
          <Button
            label="Faça o seu orçamento"
            customColor={theme.primary.light}
          />
          <Button label="sem compromisso" type={ButtonType.Ghost} />
        </ContainerButtons>
      </Content>
    </Container>
  )
}
