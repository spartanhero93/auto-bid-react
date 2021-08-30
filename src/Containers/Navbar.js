import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

export default function Navbar() {
  const [userInput, handleUserInput] = useState('')


  async function searchQuery() {
    try {
      const response = await fetch('http://localhost:3004/search', {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          userInput
        })
      })
      const {data} = await response.json()
      console.log(data)
      handleUserInput('')
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <Container>
      <input onChange={e => handleUserInput(e.target.value)} type='text' value={userInput} />
      <button onClick={() => searchQuery()}>Submit</button>
    </Container>
  )
}