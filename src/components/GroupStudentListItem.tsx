import styled from "styled-components";

import { activeColor } from "@/libs/colors";
import { normalizeIndex } from "@/libs/helper";
import { Student } from "@/libs/types";
import useStudents from "@/hooks/useStudents";

const StudentListItemWrapper = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  color: black;
  border-radius: 0.25rem;
  background-color: white;
  border-color: ${props => props.$active ? activeColor : 'lightgray'};
  pointer-events: ${props => props.$active ? 'unset' : 'none'};  
`

const Header = styled.div<{ $active?: boolean }>`
  color: ${props => props.$active ? activeColor : 'lightgray'};
  font-size: 0.75rem;
  text-align: center;
  width: 2.5rem;
`

const Name = styled.div<{ $active?: boolean }>`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  color: ${props => props.$active ? 'balck' : 'lightgray'};
`

const Footer = styled.div<{ $active?: boolean }>`
  flex: 0;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  text-align: center;
  margin-left: -0.25rem;

  & > * {
    margin-left: 0.25rem;
  }
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

interface GroupStudentListItemProps {
  className?: string
  student: Student
}

const GroupStudentListItem = ({ className, student: { index, name, amount, isUser } }: GroupStudentListItemProps) => {
  const { decrementAmountByStudentIndex, incrementAmountByStudentIndex } = useStudents()

  const activeDecrementButton = isUser && amount > 0

  return (
    <StudentListItemWrapper $active={isUser} className={className}>
      <Header $active={isUser}>
        <div>{normalizeIndex(index + 1)}</div>
      </Header>
      <Name $active={isUser}>
        {name}
      </Name>

      <Footer>
        <DecrementButton $active={activeDecrementButton} onClick={() => decrementAmountByStudentIndex(index)}>-1</DecrementButton>
        <div>{amount}</div>
        <IncrementButton $active={isUser} onClick={() => incrementAmountByStudentIndex(index)}>+1</IncrementButton>
      </Footer>
    </StudentListItemWrapper>
  )
}

export default GroupStudentListItem
