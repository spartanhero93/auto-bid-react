import React from 'react'
import styled from 'styled-components'

const CarContainer = styled.div`
  padding: 1rem 2rem;
`

export default function SingleCar (props) {
  return (
    <CarContainer>
      <h2>
        {props.item.make} {props.item.model}
      </h2>
      <h3>Starting bid ${props.item.startingBid}</h3>
      <img src={props.item.pictures[0]} alt={props.item.make} />
    </CarContainer>
  )
}
