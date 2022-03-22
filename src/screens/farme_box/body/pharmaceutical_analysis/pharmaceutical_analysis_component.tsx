import React, { useContext, useRef } from 'react'
import images from '../../../../assets/images'
import { DataContext } from '../../../../context/data'
import { CardImage } from '../../../../ds/card_image'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  BlockText,
  Container,
  Content,
  Image,
  TextPrincipal,
  Text,
} from './pharmaceutical_analysis_styles'

type PharmaceuticalAnalysisProps = {
  id?: string
  className?: string
}

export const PharmaceuticalAnalysis: React.FC<PharmaceuticalAnalysisProps> = ({
  id,
}) => {
  const {
    body: {
      farme_box: {
        pharmaceutical_analysis: { card },
      },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  const LeftSide = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: card.title }} />
      <Text dangerouslySetInnerHTML={{ __html: card.subtitle }} />
    </BlockText>
  )

  const RightSide = () => <Image src={images.ImageDoctorWihPhone} />

  return (
    <Container ref={ref} id={id}>
      <Content>
        <CardImage leftSide={LeftSide} rightSide={RightSide} />
      </Content>
    </Container>
  )
}
