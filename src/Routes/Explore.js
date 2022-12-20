import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RenderCars from '../Components/RenderCars'


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
        <RenderCars carArray={data}/>
      </Container>
    </div>
  )
}
