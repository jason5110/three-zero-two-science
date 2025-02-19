import styled from "styled-components";
import { useState } from "react";
import { map } from "lodash-es";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faUserAlt } from "@fortawesome/free-solid-svg-icons";

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

const TabActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TabContainer = styled.div`
  margin-left: -0.25rem;
  margin-bottom: -0.08rem;
  z-index: 1;

  & > * {
    margin-left: 0.25rem;
  }
`

const Tab = styled.button<{ $active?: boolean }>`
  border: none;
  border-bottom-style: ${props => props.$active ? 'unset' : "inset"};
  background-color: ${props => props.$active ? 'white' : "darkgray"};
  color: ${props => props.$active ? '#098df0' : "2f3030"};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  width: 6.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #098df0;
    opacity: 0.8;
  }
`

const TabContent = styled.div`
  flex: 1;
  background-color: white;
  margin-bottom: -1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.25);
`

const MunuButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

const ScienceContainer = () => {
  const {invisable, setInvisable} = useInvisable()
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const tabs = ['Student List', 'Group']
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
      <TabActionsContainer>
        <TabContainer>
          {map(tabs, (tab, index) => (
            <Tab
              key={index}
              $active={activeTabIndex === index}
              onClick={() => setActiveTabIndex(index)}
            >{tab}</Tab>
          ))}
        </TabContainer>
        <MunuButtonWrapper>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </MunuButtonWrapper>
      </TabActionsContainer>
      <TabContent />
    </GridThirteenItemCard>
  )
}

export default ScienceContainer
