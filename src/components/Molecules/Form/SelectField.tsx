import React, { InputHTMLAttributes } from "react"
import { Box } from "rebass"
import { Label, Select } from "@rebass/forms"

export interface SelectFieldProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  labelValue?: string
  id?: string
  name?: string
  options?: []
}

export const SelectField = ({
  labelValue,
  id,
  name,
  options,
}): SelectFieldProps => {
  return (
    <Box>
      <Label>{labelValue}</Label>
      <Select id={id} name={name}>
        {options.map((option, key) => {
          return <option key={key}>{option.name}</option>
        })}
      </Select>
    </Box>
  )
}
