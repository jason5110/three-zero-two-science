import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: span 6 / span 13;

  @media (width < 48rem) { 
    grid-column: span 13 / span 13;
  }
`;

const Card = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  background-color: lightgray;
  aspect-ratio: 6 / 7;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Qrcode = () => {
  return (
    <Wrapper>
      <Card>
        <Title>Join 302 Science</Title>
      </Card>
    </Wrapper>
  )
}

export default Qrcode
