import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

import GridThirteenItemCard from "@/components/GridThirteenItemCard";
import useInvisable from "@/hooks/useInvisable";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.25rem;

  & > * {
    margin-left: 0.25rem;
  }

  & > svg {
    color: black;
  }
`

const Title = styled.div`
  display: flex;

  font-size: 1.2em;
  color: black;
`

const ScienceContainer = () => {
  const {invisable, setInvisable} = useInvisable()

  const title = (
    <TitleContainer>
      <Title>302 Science</Title>
      <FontAwesomeIcon icon={faUserAlt}/>
      <Title>16/30</Title>
    </TitleContainer>
  )

  return (
    <GridThirteenItemCard
      num={7}
      hidden={invisable}
      title={title}
      closeButtonClick={() => setInvisable(true)}
    >
      <div>ScienceContainer</div>
      <button>Click me</button>
    </GridThirteenItemCard>
  )
}

export default ScienceContainer
