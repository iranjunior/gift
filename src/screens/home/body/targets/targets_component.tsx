import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../../../context/data'

import { Card, HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'
import { Container, Content, Cards } from './targets_styles'

type TargetsProps = {
  id?: string
  className?: string
}

export const Targets: React.FC<TargetsProps> = ({ id }) => {
  const ref = useRef(null as unknown as HTMLDivElement)
  const {
    body: {
      home: { targets },
    },
  } = useContext(DataContext)
  const navigate = useNavigate()

  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <HeaderCentered title={targets.title} subtitle={targets.subtitle} />

        <Cards>
          {targets.cards.map((content) => (
            <Card
              key={content.title}
              description={content.text}
              title={content.title}
              type={content.type as 'doctors' | 'companies' | 'customers'}
              onClick={() => {
                if (content.type === 'doctors') {
                  navigate('/para-medicos')
                }
                if (content.type === 'companies') {
                  navigate('/para-instituicoes')
                }
                if (content.type === 'customers') {
                  navigate('/para-clientes')
                }
              }}
            />
          ))}
        </Cards>
      </Content>
    </Container>
  )
}
