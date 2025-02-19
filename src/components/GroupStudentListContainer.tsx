import { useMemo } from "react";
import { chunk, map } from "lodash-es";
import styled from "styled-components";

import { useAppSelector } from "@/redux/hooks";
import GroupStudentListItem from "@/components/GroupStudentListItem";

const GroupStudentListContainerWrapper = styled.div`
  padding: 1rem;
  dispaly: flex;
  flex-direction: column;
  color: black;
`

const GroupStudentListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`

const GroupStudentListItemHeader = styled.h4`
  border-bottom: 0.0125rem solid black;
  margin-bottom: 0.25rem;

`

const CustomGroupStudentListItem = styled(GroupStudentListItem)`
  width: 100%;
  &:not(:first-child) {
    margin-top: 0.25rem;
  }
`

const GroupStudentListContainer = () => {
  const students = useAppSelector(state => state.studentList.students)
  const groupedStudents = useMemo(()=> chunk(students, 5), [students])

  return (
  <GroupStudentListContainerWrapper>
      {map(groupedStudents, (eachGroup, index) => (
        <GroupStudentListItemWrapper>
          <GroupStudentListItemHeader>{(index * 5) + 1} ~ {((index + 1) * 5)}</GroupStudentListItemHeader>
          {map(eachGroup, (groupedStudent)=>(
            <CustomGroupStudentListItem student={groupedStudent}/>
          ))}
        </GroupStudentListItemWrapper>
      ))}
  </GroupStudentListContainerWrapper>)
}

export default GroupStudentListContainer
