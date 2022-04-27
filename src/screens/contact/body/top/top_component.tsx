import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoFarMe from '../../../../assets/images/logotype.svg'
import CloseIcon from '../../../../assets/images/close_icon.svg'

import { useIntersection } from '../../../../hooks/useIntersection'

import { Container, Logo, Header } from './top_styles'

type TopBarProps = {
  id?: string
  className?: string
}

export const TopBar: React.FC<TopBarProps> = ({ id, ...props }) => {
  const ref = useRef(null as unknown as HTMLDivElement)
  const navigate = useNavigate()

  useIntersection(ref, '100px', true)

  return (
    <Container {...props} id={id}>
      <Header ref={ref}>
        <Logo onClick={() => navigate('/')} src={LogoFarMe} />
        <Logo compact onClick={() => navigate('/')} src={CloseIcon} />
      </Header>
    </Container>
  )
}
