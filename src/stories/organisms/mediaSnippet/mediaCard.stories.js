import React from "react"
import { Box, Flex } from "rebass"
import { gridRowGap } from "styled-system"

import { MediaCard } from "./mediaCard"

export default {
  title: "mediaCard",
  component: MediaCard,
}

const Template = args => (
  <>
    <Flex sx={{}} maxWidth={500}>
      <Box>
        <MediaCard {...args} />
      </Box>
    </Flex>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      <Box p={3}>
        <MediaCard {...args} />
      </Box>
      <Box p={3}>
        <MediaCard {...args} />
      </Box>
      <Box p={3}>
        <MediaCard {...args} />
      </Box>
    </Box>
  </>
)

export const MediaCardSmall = Template.bind({})

MediaCardSmall.args = {
  image:
    "https://brotokoll.com/wp-content/uploads/2019/12/xPSX_20190928_134709.jpg.pagespeed.ic.qsjw5ilFw5.jpg",
  title: "This is my title",
  text: "Hey and welcome to my first article",
  date: "12 June 2020",
}
