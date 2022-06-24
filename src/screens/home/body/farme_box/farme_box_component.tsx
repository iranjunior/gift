import React, { useContext, useEffect, useRef, useState } from 'react'

import { HeaderCentered } from '../../../../ds'
import { DataContext } from '../../../../context/data'
import videos from '../../../../assets/videos'

import { Container, Content, Video, VideoContainer } from './farme_box_styles'
import { useIntersection } from '../../../../hooks/useIntersection'

type FarMeBoxProps = {
  id?: string
  className?: string
}

export const FarMeBox: React.FC<FarMeBoxProps> = ({ id, ...props }) => {
  const ref = useRef(null as unknown as HTMLDivElement)
  const refVideo = useRef(null as unknown as HTMLVideoElement)
  const {
    body: {
      home: { farme_box: pageFarmeBox },
    },
  } = useContext(DataContext)
  const [showControl, setShowControl] = useState(false)
  useIntersection(ref, '100px', true)
  useIntersection(refVideo, '5px', true)

  useEffect(() => {
    document.getElementById('video')?.addEventListener('pause', () => {
      setShowControl(true)
    })
    document.getElementById('video')?.addEventListener('playing', () => {
      setShowControl(false)
    })
  }, [])
  const onClickMask = () => {
    refVideo.current?.play()
  }

  return (
    <Container ref={ref} {...props} id={id}>
      <Content ref={ref}>
        <HeaderCentered title={pageFarmeBox.title} />
        <VideoContainer id="video-container">
          <div
            style={{
              display: showControl ? 'block' : 'none',
            }}
            className="mask"
            onClick={onClickMask}
          />
          <Video
            ref={refVideo}
            controls
            autoPlay
            muted
            typeof="video/mp4"
            src="https://assets.farme.com.br/videos/farme.mp4"
            id="video"
          ></Video>
        </VideoContainer>
      </Content>
    </Container>
  )
}
