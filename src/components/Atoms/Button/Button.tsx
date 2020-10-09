import React from "react"
import styled from "styled-components"
type Button = {}

interface ButtonProps {
  onClick?: () => void
  type?: "submit" | "button"
  disabled?: boolean
}

const ButtonBox = styled.button`
  background-color: blue;
  border: none;
  color: white;
  padding: 15px 43px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

export const Button = ({ type, onClick, disabled, text }): ButtonProps => {
  return (
    <ButtonBox type={type} onClick={onClick} disabled={disabled}>
      {text}
    </ButtonBox>
  )
}
