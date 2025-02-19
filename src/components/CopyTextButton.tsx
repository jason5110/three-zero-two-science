import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons';

import { activeColor } from '@/libs/colors';

const CopyTextButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  color: black;
`

const Label = styled.div`
  margin-right: 0.5rem;
`

const CopyIconWrapper = styled.button`
  border: none;
  background-color: ${activeColor};
  color: white;
  border-radius: 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  svg {
    width: 90%;
    height: 90%;
  }
`

interface CopyTextButtonProps {
  label?: string;
  text: string;
}

const CopyTextButton = ({ label, text }: CopyTextButtonProps) => {

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      console.log("copyText error.");
    }
  }

  return (
    <CopyTextButtonWrapper>
      <TextWrapper>
        {label && <Label>{label}</Label>}
      </TextWrapper>
      <CopyIconWrapper>
        <FontAwesomeIcon icon={faCopy} onClick={copyText}/>
      </CopyIconWrapper>
    </CopyTextButtonWrapper>
  )
}

export default CopyTextButton
