import React from "react"
import Badge from "react-bootstrap/Badge"

export interface BadgeTextProps {
  variant: string
  children: React.ReactElement
}

export const BadgeText = ({ variant, children }: BadgeTextProps) => {
  return <Badge variant={variant}>{children}</Badge>
}
