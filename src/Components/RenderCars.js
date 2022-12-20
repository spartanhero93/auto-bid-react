import styled from 'styled-components'

const CarContainer = styled.div`
  padding: 1rem 2rem;
`

function SingleCar ({item}) {
  return (
    <CarContainer>
      <h2>
        {item.make} {item.model}
      </h2>
      <h3>Starting bid ${item.startingBid}</h3>
      <img src={item.pictures[0]} alt={item.make} />
    </CarContainer>
  )
}

export default function RenderCars({carArray}){
  return(
    carArray.length 
    ? ( carArray.map(item => { return ( <SingleCar item={item} /> ) })) 
    : (
      <h1>Loading...</h1>
    )
  )
}