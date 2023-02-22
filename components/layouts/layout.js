import Header from './header'
import Footer from './footer'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box className='chakra-container' mb="120px">{children}</Box>
      <Footer />
    </>
  )
}