import React from "react"
import { Box, Flex, Heading, Text } from "rebass"
import { Button } from "../../atoms/button/Button"
import "./hero.css"
export const Hero = ({ title, labelPrimary, labelSecondary }) => {
  return (
    <div className="hero">
      <Box
        sx={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "repeat(2, 50%)",
          gridTemplateColumns: "100%",
        }}
      >
        <Box sx={{ gridRow: 1 }}>
          <Box sx={{ paddingTop: "50px", textAlign: "center" }}>
            <Heading
              type="h1"
              fontSize={[50, 80, 120]}
              sx={{ fontFamily: "inherit" }}
              className="hero-title"
            >
              {title}
            </Heading>
          </Box>
        </Box>
        <Box pt={[0, 20, 20, 15]} sx={{ gridRow: 2, textAlign: "center" }}>
          <Button
            label={labelPrimary}
            primary={false}
            size="large"
            backgroundColor="white"
          />
          <Button label={labelSecondary} primary={true} size="large" />
        </Box>
      </Box>
    </div>
  )
}
