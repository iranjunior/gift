import React from 'react'

import { CustomersCard, CompaniesCard, MedicalCard } from '../../../cards'
import {
  Container,
  Content,
  BlockText,
  Highlight,
  Text,
  Cards,
} from './targets_styles'

type TargetsProps = {
  id?: string
}

export const Targets: React.FC<TargetsProps> = ({ id }) => (
  <Container id={id}>
    <Content>
      <BlockText>
        <Highlight>
          Uma solução,
          <br />
          diferentes necessidades.
        </Highlight>
        <Text>
          A Far.me Box está presente em diversas rotinas,
          <br /> oferecendo benefícios únicos para cada forma de cuidado.
        </Text>
      </BlockText>
      <Cards>
        <CustomersCard />
        <CompaniesCard />
        <MedicalCard />
      </Cards>
    </Content>
  </Container>
)
