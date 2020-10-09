import React from "react"
import { Box } from "rebass"

export interface GridProps extends React.HTMLAttributes<HTMLBodyElement> {
  templateColumnType: string
}
export const Grid = ({ templateColumnType, children }: GridProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridGap: 4,
        gridTemplateColumns: `${templateColumnType}`,
      }}
    >
      {children}
    </Box>
  )
}
//repeat(auto-fit, minmax(300px, 1fr))"
