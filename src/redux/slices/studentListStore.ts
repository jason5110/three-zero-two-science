import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiStudent, Student } from '@/libs/types'
import { map } from 'lodash-es'

// Define a type for the slice state
export interface StudentListState {
  students: Student[]
}

// Define the initial state using that type
const initialState: StudentListState = {
  students: []
}

export const studentListSlice = createSlice({
  name: 'student-list',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementStudentAmount: (state, action: PayloadAction<number>) => {
      if (!state.students[action.payload]) {
        return
      }

      state.students[action.payload].amount += 1
    },
    decrementStudentAmount: (state, action: PayloadAction<number>) => {
      if (!state.students[action.payload]) {
        return
      }

      if (state.students[action.payload].amount < 1) {
        return
      }

      state.students[action.payload].amount -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateStudents: (state, action: PayloadAction<ApiStudent[]>) => {
      const newStudents = action.payload

      state.students = map(newStudents, (student, index) => ({
        ...student,
        isUser: student.name !== 'Guest',
        index
      }))
    }
  }
})

export const {
  incrementStudentAmount,
  decrementStudentAmount,
  updateStudents
} = studentListSlice.actions

export default studentListSlice.reducer