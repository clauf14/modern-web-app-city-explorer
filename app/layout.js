import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'City Explorer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <ColorModeProvider>
            {children}
          </ColorModeProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
