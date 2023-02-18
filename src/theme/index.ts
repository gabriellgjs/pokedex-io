import { extendTheme, theme as base } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts.heading}`,
    body: 'Montserrat'
  }
})