import React, { useContext, useEffect, useRef } from 'react'

import OkayIcon from '../../../../assets/images/illustration_positive.svg'
import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Text,
  TextPrincipal,
  BlockText,
  Logo,
  Form,
} from './content_styles'

type ContentProps = {
  id?: string
  className?: string
}

export const ContentForLeads: React.FC<ContentProps> = ({ id, ...props }) => {
  const ref = useRef(null as unknown as HTMLDivElement)

  const {
    body: {
      contact: {
        for_leads: { title, subtitle },
      },
    },
  } = useContext(DataContext)
  useIntersection(ref, '100px', true)

  useEffect(() => {
    // eslint-disable-next-line
    // @ts-ignore
    new RDStationForms(
      'site-contato-site-novo-julho-2021-696fe189e32692d6edd4',
      'UA-175230602-1'
    ).createForm()
  }, [])

  return (
    <Container ref={ref} {...props} id={id}>
      <BlockText>
        <TextPrincipal>
          {title}
          <Logo src={OkayIcon} />
        </TextPrincipal>
        <Text>{subtitle}</Text>
      </BlockText>
      <Form>
        <div id="site-contato-site-novo-julho-2021-696fe189e32692d6edd4" />
      </Form>
    </Container>
  )
}
