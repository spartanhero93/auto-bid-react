import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem 2rem;
`

export default function Content(props){
    return(
      <Container>
        <h1>This is the {props.title}</h1>
      </Container>
    )
}