import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

// Define a type for the slice state
type Student = {
  name: string,
  amount: number
}

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

      state.students[action.payload].amount -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateStudents: (state, action: PayloadAction<Student[]>) => {
      state.students = action.payload
    }
  }
})

export const { incrementStudentAmount, decrementStudentAmount, updateStudents } = studentListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default studentListSlice.reducer