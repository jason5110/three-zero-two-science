import styled from "styled-components";
import { PropsWithChildren, ReactNode } from "react";
import { isString } from "lodash-es";

import CloseButton from "@/components/CloseButton";

const Wrapper = styled.div<{ $num: number, $hidden?: boolean }>`
  grid-column: ${props => `span ${props.$num} / span 13` || "span 13 / span 13"};
  visibility: ${props => props.$hidden ? "hidden" : "visible"};

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
  display: flex;
  flex-direction: column;
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
  font-size: 1.2em;
  color: black;
`;

const RightTopCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

interface GridThirteenItemCardProps extends PropsWithChildren {
  className?: string;
  header?: ReactNode
  title?: ReactNode | string;
  hidden?: boolean;
  num: number;
  closeButtonClick?: () => void;
}

const isValidNum = (num: number) => num >= 0 && num <= 13;

const GridThirteenItemCard = ({
  className,
  header,
  title,
  hidden,
  num,
  closeButtonClick,
  children
}: GridThirteenItemCardProps) => {
  const normalizedNum = isValidNum(num) ? num : 13;
  const aspectRatio = normalizedNum == 6 ? "6 / 7" : undefined;

  const titleElement = isString(title) ? <Title>{title}</Title> : title;

  return (
    <Wrapper $num={normalizedNum} $hidden={hidden} className={className}>
      <Card $aspectRatio={aspectRatio}>
        <CardContainer>
          <RightTopCloseButton onClick={closeButtonClick}/>
          <Header>
            {header}
          </Header>
          {titleElement}
          {children}
        </CardContainer>
      </Card>
    </Wrapper>
  )
}

export default GridThirteenItemCard
