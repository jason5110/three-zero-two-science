import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { HtmlButtonType } from '@/libs/types';

const ClossButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: black;

  &:hover {
    opacity: 0.5;
  }
`;

const CloseButton = (props: HtmlButtonType) => {
  return (
    <ClossButtonWrapper {...props}>
      <FontAwesomeIcon icon={faXmark} />
    </ClossButtonWrapper>
  )
}

export default CloseButton
