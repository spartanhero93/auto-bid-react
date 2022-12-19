import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Explore from '../Routes/Explore'
import Account from '../Routes/Account'

const Container = styled.div`
  padding: 1rem 2rem;
`

export default function Content({title}){

  function handlePage(title) {
    switch (title) {
      case 'Explore':
        return <Explore />;
      case 'Account':
       return <Account />;
      default:
        return <h1>Under construction</h1>
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