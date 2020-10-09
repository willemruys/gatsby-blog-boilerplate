import React, { InputHTMLAttributes } from "react"
import { Formik, FormikFormProps, FormikProps } from "formik"
import styled from "styled-components"
import { Input, Label } from "@rebass/forms"
import { Box } from "rebass"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "textarea" | "email"
  placeHolder?: string
}

export const InpuField = ({ id, name, type, placeHolder }): InputProps => {
  return (
    <Box>
      <Label></Label>
      <Input id={id} name={name} type={type} placeholder={placeHolder}></Input>
    </Box>
  )
}
