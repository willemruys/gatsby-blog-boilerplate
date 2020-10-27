import React from "react"
import { Chip, makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  chip: {
    backgroundColor: theme.palette.primary.main,
  },
}))

export interface ChipComponentProps {
  label: string
  sizeChip?: "small" | "medium"
}

const ChipComponent = ({ label, sizeChip }: ChipComponentProps) => {
  const classes = useStyle()
  return (
    <>
      <Chip className={classes.chip} size={sizeChip} label={label} />
    </>
  )
}

export default ChipComponent
