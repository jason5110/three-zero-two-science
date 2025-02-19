import { map } from "lodash-es";
import styled from "styled-components";

import { useAppSelector } from "@/redux/hooks";
import StudentListItem from "@/components/StudentListItem";

const StudentListContainerWrapper = styled.div`
  padding: 1rem;
`

const StudentListGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;

  & > * {
    grid-column: span 1 / span 5;
  }
`

const StudentListContainer = () => {
  const students = useAppSelector(state => state.studentList.students)

  return (
  <StudentListContainerWrapper>
    <StudentListGridContainer>
      {map(students, (student, index) => (
        <StudentListItem key={index} student={student}/>
      ))}
    </StudentListGridContainer>
  </StudentListContainerWrapper>)
}

export default StudentListContainer
