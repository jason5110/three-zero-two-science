import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { HtmlButtonType } from '@/libs/types';

const BackToClassListButtonWrapper = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  color: black;

  &:hover {
    opacity: 0.5;
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
`;

const BackToClassListButton = (props: HtmlButtonType) => {
  return (
    <BackToClassListButtonWrapper {...props}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <Text>Back To Class List</Text>
    </BackToClassListButtonWrapper>
  )
}

export default BackToClassListButton
