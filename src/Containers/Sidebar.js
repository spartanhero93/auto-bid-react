import { useState } from 'react'
import styled from 'styled-components'
import Content from './Content'
import Navbar from './Navbar'

const Container = styled.div`
  display: flex;
  height: 100vh;
  ul {
    border-right: 2px solid;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    width: 15vw;
    li {
      width: 100%;
      padding: 1rem;
      font-size: 18px;
      list-style: none;
      &:hover {
        cursor: pointer;
        background-color: slategrey;
      }
    }
  }
`



function Sidebar() {
  const [selected, handleSelected] = useState('explore')
  return(
    <Container>
      <ul>
        <Navbar />
        <li onClick={() => handleSelected('Account')}>Account</li>
        <li onClick={() => handleSelected('Explore')}>Explore</li>
        <li onClick={() => handleSelected('Ending Soon')}>Ending Soon</li>
        <li onClick={() => handleSelected('My Bids')}>My Bids</li>
        <li onClick={() => handleSelected('Support')}>Support</li>
      </ul>
      <Content title={selected} />
    </Container>
  )
}

export default Sidebar