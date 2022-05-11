import React, { useContext, useEffect, useRef } from 'react'

import WhatsAppIcon from '../../../../assets/images/illustration_whatsapp.svg'
import PhoneIcon from '../../../../assets/images/illustration_phone.svg'
import LetterIcon from '../../../../assets/images/illustration_letter.svg'
import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Text,
  TextPrincipal,
  BlockText,
  Logo,
  ContainerContacts,
  RowContacts,
  Contact,
} from './content_styles'

type ContentProps = {
  id?: string
  className?: string
}

export const ContentForCustomers: React.FC<ContentProps> = ({
  id,
  ...props
}) => {
  const ref = useRef(null as unknown as HTMLDivElement)

  const {
    body: {
      contact: {
        for_customers: { title, subtitle },
      },
    },
  } = useContext(DataContext)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} {...props} id={id}>
      <BlockText>
        <TextPrincipal>{title}</TextPrincipal>
        <Text>{subtitle}</Text>
      </BlockText>
      <ContainerContacts>
        <RowContacts>
          <Logo src={WhatsAppIcon} />
          <Contact href="https://api.whatsapp.com/send?phone=5531983722426">
            (31) 98372-2426
          </Contact>
        </RowContacts>
        <RowContacts>
          <Logo src={PhoneIcon} />
          <Contact href="tel:31983722426">(31) 98372-2426</Contact>
        </RowContacts>
        <RowContacts>
          <Logo src={LetterIcon} />
          <Contact href="mailto:farmembro@farme.com.br">
            farmembro@farme.com.br
          </Contact>
        </RowContacts>
      </ContainerContacts>
    </Container>
  )
}
