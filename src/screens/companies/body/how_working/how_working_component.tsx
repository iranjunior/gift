import React, { useContext, useRef, useState, useEffect } from 'react'

import { DataContext } from '../../../../context/data'

import videos from '../../../../assets/videos'

import { Container, Content, Video } from './how_working_styles'
import { HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

type HowWorkingProps = {
  id?: string
  className?: string
}
export const HowWorking: React.FC<HowWorkingProps> = ({ id }) => {
  const {
    body: {
      for_companies: {
        how_working: { title, subtitle },
      },
    },
  } = useContext(DataContext)

  const [showControl, setShowControl] = useState(false)
  const ref = useRef(null as unknown as HTMLDivElement)
  const refVideo = useRef(null as unknown as HTMLVideoElement)

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
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <HeaderCentered title={title} subtitle={subtitle} />
        <div
          style={{
            position: 'relative',
            width: '90%',
          }}
          id="video-container"
          onClickCapture={() => console.log('onClickCapture')}
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
            src={videos.VideoFarMeBox}
          />
        </div>
      </Content>
    </Container>
  )
}
