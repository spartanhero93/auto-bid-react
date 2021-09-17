import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    height: 200px;
    :hover {
      cursor: pointer;
    }
  }
`
const CarContainer = styled.div`
  padding: 1rem 2rem;

`

export default function Explore () {
  const [data, handleData] = useState([])
  useEffect(() => {
    async function getData () {
      try {
        const response = await fetch('http://localhost:3004/explore')
        const { data } = await response.json()
        handleData(data)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  return (
    <div>
      <h1>Explore all the car bids!</h1>
      <Container>
        {data.length > 0 ? (
          data.map(item => {
            return (
              <CarContainer>
                <h2>
                  {item.make} {item.model}
                </h2>
                <h3>Starting bid ${item.startingBid}</h3>
                <img src={item.pictures[0]} alt={item.make} />
              </CarContainer>
            )
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </div>
  )
}
