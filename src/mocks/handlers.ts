
import { http, HttpResponse } from 'msw'
 
// type AddCommentParams = {
//   postId: string
// }
 
// type AddCommentRequestBody = {
//   author: User
//   comment: string
// }
 
// type AddCommentResponseBody = {
//   commentUrl: string
// }
 
// http.post<
//   AddCommentParams,
//   AddCommentRequestBody,
//   AddCommentResponseBody,
//   '/post/:postId'
// >('/post/:postId', async ({ params, request }) => {
//   // Request path parameters are narrowed to the
//   // provided "AddCommentParams" type.
//   const { postId } = params
 
//   // The request body JSON is narrowed to the
//   // provided "AddCommentRequestBody" type.
//   const commentData = await request.json()
//   commentData.comment
 
//   // The JSON response body type must satisfy
//   // the "AddCommentResponseBody" type.
//   return HttpResponse.json({
//     commentUrl: `/post/${postId}?commentId=${crypto.randomUUID()}`,
//   })
// })

const emptyStudent = {
  name: 'Guest',
  amount: 0,  
}

const students = [
  {
    name: 'Phillip',
    amount: 2,
  },
  {
    name: 'Darrell',
    amount: 5,
  },
  emptyStudent,
  {
    name: 'Cody',
    amount: 9
  },
  emptyStudent,
  emptyStudent,
  {
    name: 'Bessie',
    amount: 0,  
  },
  {
    name: 'Wendy',
    amount: 3,  
  },
  emptyStudent,
  {
    name: 'Esther',
    amount: 1,  
  },
  emptyStudent,
  {
    name: 'Gloria',
    amount: 1,  
  },
  emptyStudent,
  {
    name: 'Lee',
    amount: 2,  
  },
  emptyStudent,
  {
    name: 'Ann',
    amount: 0,  
  },
  {
    name: 'Jacob',
    amount: 8,  
  },
  {
    name: 'Calvin',
    amount: 2,  
  },
  emptyStudent,
  {
    name: 'Joe',
    amount: 0,  
  },
  emptyStudent,
  emptyStudent,
  emptyStudent,
  emptyStudent,
  emptyStudent,
  emptyStudent,
  emptyStudent,
  emptyStudent,
  emptyStudent,
  emptyStudent,
]

export const handlers = [
  http.get('/student-list', () => {
    return HttpResponse.json({
      students
    })
  }),
]