import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`

`
const UserBidsContainer = styled.div`

`

export default function MyBids(){
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


  return(
    <Container>
      <h1>My Bids</h1>
      <UserBidsContainer>
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
      </UserBidsContainer>
    </Container>
  )
}