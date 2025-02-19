import styled from "styled-components";

import { activeColor } from "@/libs/colors";
import { normalizeIndex } from "@/libs/helper";
import { Student } from "@/libs/types";
import useStudents from "@/hooks/useStudents";

const StudentListItemWrapper = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  color: black;
  aspect-ratio: 1;
  border-radius: 0.25rem;
  background-color: white;
  border-color: ${props => props.$active ? activeColor : 'lightgray'};
  border-width: thin;
  border-style: solid;
  pointer-events: ${props => props.$active ? 'unset' : 'none'};
`

const Header = styled.div<{ $active?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.$active ? activeColor : 'lightgray'};
  color: white;
  font-size: 0.75rem;
  text-align: center;
`

const NameWrapper = styled.div<{ $active?: boolean }>`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${props => props.$active ? activeColor : 'lightgray'};
  border-width: thin;
  border-top-style: solid;
  border-bottom-style: solid;
`

const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  border: gary;
  border-width: 1px;
`

const Footer = styled.div<{ $active?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 0.75rem;
  text-align: center;
  border: gary;
  border-width: 1px;
  font-size: 0.75rem;
`

const Button = styled.button<{ $active?: boolean }>`
  border: none;
  height: 0.75rem;
  font-size: 0.5rem;
  border-radius: 0.2rem;
  color: white;
  cursor: ${props => props.$active ? 'pointer' : 'unset'};

  &:hover {
    opacity: ${props => props.$active ? '0.5' : '1'};
  }
`

const IncrementButton = styled(Button) <{ $active?: boolean }>`
  background-color: ${props => props.$active ? '#7bcb3c' : 'lightgray'};
`

const DecrementButton = styled(Button) <{ $active?: boolean }>`
  background-color: ${props => props.$active ? '#f1476d' : 'lightgray'};
`

interface StudentListItemProps {
  student: Student
}

const StudentListItem = ({ student: { index, name, amount, isUser } }: StudentListItemProps) => {
  const { decrementAmountByStudentIndex, incrementAmountByStudentIndex } = useStudents()

  const activeDecrementButton = isUser && amount > 0

  return (
    <StudentListItemWrapper $active={isUser}>
      <Header $active={isUser}>
        <div>{normalizeIndex(index + 1)}</div>
      </Header>
      <NameWrapper $active={isUser}>
        <Name>
          {name}
        </Name>
      </NameWrapper>
      <Footer>
        <DecrementButton $active={activeDecrementButton} onClick={() => decrementAmountByStudentIndex(index)}>-1</DecrementButton>
        <div>{amount}</div>
        <IncrementButton $active={isUser} onClick={() => incrementAmountByStudentIndex(index)}>+1</IncrementButton>
      </Footer>
    </StudentListItemWrapper>
  )
}

export default StudentListItem
