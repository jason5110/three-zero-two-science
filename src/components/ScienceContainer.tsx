import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: span 7 / span 13;
  
  @media (width < 48rem) { 
    grid-column: span 13 / span 13;
  }
`;

const Card = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  background-color: lightgray;
  aspect-ratio: 1 / 1;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const ScienceContainer = () => {
  return (
    <Wrapper>
      <Card>
        <Title>302 Science</Title>
      </Card>
    </Wrapper>
  )
}

export default ScienceContainer
