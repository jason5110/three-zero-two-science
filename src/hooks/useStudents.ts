import { useAppDispatch } from "@/redux/hooks"
import { updateStudents } from "@/redux/slices/studentListStore"
import { decrementStudentAmount, incrementStudentAmount } from "@/redux/slices/studentListStore";

export const useStudents = () => {
  const dispatch = useAppDispatch()

  const requestStudents = async () => {
    try {
      const response = await fetch('http://localhost:3000/student-list')
      const { students } = await response.json()
      dispatch(updateStudents(students))
    } catch {
      console.error('Failed to fetch students')
    }
  }

  const incrementAmountByStudentIndex = (index: number) => {
    dispatch(incrementStudentAmount(index))
  }

  const decrementAmountByStudentIndex = (index: number) => {
    dispatch(decrementStudentAmount(index))
  }

  return {
    requestStudents,
    incrementAmountByStudentIndex,
    decrementAmountByStudentIndex
  }
}

export default useStudents
