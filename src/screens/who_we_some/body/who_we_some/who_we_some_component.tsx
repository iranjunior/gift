import React, { useContext, useRef } from 'react'

import ImageBoxWhoWeAre from '../../../../assets/images/who_we_are_initial.svg'
import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Image,
  TextPrincipal,
  BlockText,
} from './who_we_some_styles'

type MainProps = {
  id?: string
  className?: string
}

export const Main: React.FC<MainProps> = ({ id }) => {
  const {
    body: {
      who_we_are: { initial },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content>
        <BlockText>
          <TextPrincipal
            dangerouslySetInnerHTML={{ __html: initial['who-we-are'].title }}
          />
        </BlockText>
        <Image src={ImageBoxWhoWeAre} />
      </Content>
    </Container>
  )
}
