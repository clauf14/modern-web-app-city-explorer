import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import theme from './../theme'


export const metadata = {
  title: 'City Explorer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <ColorModeProvider>
            {children}
          </ColorModeProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
