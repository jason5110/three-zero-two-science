import { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-width: max(20rem, 100vw);
  min-height: 100vh;
`;

const GridWrapper = styled.div`
  margin: 0.5rem;
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));

  width: 100%;
  gap: 0.5rem;
`;

const AppWrapper = ({children}: PropsWithChildren) => {
  return (
    <Wrapper>
      <GridWrapper>
        {children}
      </GridWrapper>
    </Wrapper>
  )
}

export default AppWrapper
