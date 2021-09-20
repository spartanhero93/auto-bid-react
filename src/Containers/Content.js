import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Explore from '../Routes/Explore'

const Container = styled.div`
  padding: 1rem 2rem;
`

export default function Content({title}){

  function handlePage(title) {
    if(title === 'Explore') {
      return <Explore />
    } else {
      return <h1>Under Construction</h1>
    }
  }
    return(
      <Container>
        {
          handlePage(title)
        }
      </Container>
    )
}