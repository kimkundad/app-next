import { Box, Center, Image  } from '@chakra-ui/react'
import logo from '@/public/img/logo-shopee.png'

export default function Header() {

    
  return (
    <>
      <Box pb="48px">
        <Center w='100%' p="10px" bg="#f6f8fa" border='1px' borderColor='gray.200' pos="fixed">
                <Image src={logo.src} alt='Logo website' h="45"/>
        </Center>
      </Box>
    </>
  )
}