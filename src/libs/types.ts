import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type HtmlButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export type ApiStudent = {
  name: string,
  amount: number
}

export type Student = ApiStudent &{
  index: number
  isUser: boolean
} 