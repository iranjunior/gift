import React, { useContext, useRef, useState, useEffect } from 'react'

import { DataContext } from '../../../../context/data'
import videos from '../../../../assets/videos'

import { Container, Content, Video } from './farme_box_styles'
import { HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

type FarMeBoxProps = {
  id?: string
  className?: string
}

export const FarMeBox: React.FC<FarMeBoxProps> = ({ id }) => {
  const {
    body: {
      farme_box: { farme_box: pageFarmeBox },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  const refVideo = useRef(null as unknown as HTMLVideoElement)
  useIntersection(ref, '100px', true)
  useIntersection(refVideo, '5px', true)
  const [showControl, setShowControl] = useState(false)

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
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <HeaderCentered title={pageFarmeBox.title} />
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1080px',
          }}
          id="video-container"
        >
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
        </div>
      </Content>
    </Container>
  )
}
