import React from 'react'
import { Button } from '../../ds'
import { addingCurrentQueryParams } from '../helpers/url_parser'

import { Container } from './call_to_action_styles'

export const CallToAction = () => (
  <Container>
    <Button
      onClick={() =>
        window.open(
          addingCurrentQueryParams('https://app.farme.com.br/orcamento')
        )
      }
      label="Faça seu orçamento"
    />
  </Container>
)
