import React from 'react'
import {Pane, majorScale} from 'evergreen-ui'
function Hero({bgColor, children,...props}) {
  return (
    <Pane display='flex' alignItems='center' 
    justifyContent='center' backgroundImage={'url(/assets/hero_overlay.jpg)'} backgroundSize='cover' 
    backgroundBlendMode='overlay' flexDirection='column' width={'100%'} height={`${majorScale(5)}vh`} background={bgColor} >
      {children}
    </Pane>
  )
}

export default Hero
