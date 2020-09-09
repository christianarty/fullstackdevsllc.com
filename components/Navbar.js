import React from 'react'
import {Pane, Heading, Button,majorScale } from 'evergreen-ui'
export function Navbar() {
  return (
    <Pane width={'100%'}display={'flex'} 
    position='sticky' top={0} background='tint1' 
    padding={majorScale(2)}
    justifyContent='space-between' alignItems='center'
    elevation={1}
    border='muted'
    borderBottom>
      <Pane flex={1} alignItems='center' display='flex'>
      <Heading size={700}>Full Stack Devs</Heading>
      </Pane>
      <Pane>
      <Button appearance='minimal'>About</Button>
      <Button appearance='primary'>Get in touch</Button>
      </Pane>
    </Pane>
  )
}

