import styled from "styled-components";
import { PropsWithChildren, ReactNode } from "react";

import CloseButton from "@/components/CloseButton";

const Wrapper = styled.div<{ $num: number }>`
  grid-column: ${props => `span ${props.$num} / span 13` || "span 13 / span 13"};

  @media (width < 48rem) { 
    grid-column: span 13 / span 13;
  }
`;

const Card = styled.div<{ $aspectRatio?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: ${props => props.$aspectRatio || "1"};
`;

const CardContainer = styled.div<{ $aspectRatio?: string }>`
flex: 1;
position: relative;
padding: 1rem;
border-radius: 0.5rem;
background-color: lightgray;
`;

const Header = styled.div`
  height: 1.5rem;
  font-size: 1.0em;
`;

const Title = styled.div`
  font-size: 1.5em;
  color: black;
`;

const RightTopCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

interface GridThirteenItemCardProps extends PropsWithChildren {
  header?: ReactNode
  title?: string;
  num: number;
}

const isValidNum = (num: number) => num >= 0 && num <= 13;

const GridThirteenItemCard = ({ header, title, num, children }: GridThirteenItemCardProps) => {
  const normalizedNum = isValidNum(num) ? num : 13;
  const aspectRatio = normalizedNum == 6 ? "6 / 7" : undefined;

  return (
    <Wrapper $num={normalizedNum}>
      <Card $aspectRatio={aspectRatio}>
        <CardContainer>
          <RightTopCloseButton />
          <Header>
            {header}
          </Header>
          {title && <Title>{title}</Title>}
          {children}
        </CardContainer>
      </Card>
    </Wrapper>
  )
}

export default GridThirteenItemCard
