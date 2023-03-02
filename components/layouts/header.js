import { Box, Center, Image, Text } from '@chakra-ui/react'
import { connect,useDispatch, useSelector} from 'react-redux'
import logo from '@/public/img/logo-shopee.png'
import Link from 'next/link'

export default function Header() {

  const authenState = useSelector(App => App.authen)
  const userInfoState = useSelector(App => App.userInfo)

  return (
    <>
      <Box pb="48px">
        <Center w='100%' p="10px" bg="#f6f8fa" border='1px' borderColor='gray.200' pos="fixed">
          <Link href={'/'}>
            <Image src={logo.src} alt='Logo website' h="45" />
            {authenState.isAuthenticate ? 
            (
            <Box>
            <Text fontSize='xl'>{userInfoState.data?.name}</Text>
            </Box>

            ):
            (
              <Box>
                <Text fontSize='xl'>เข้าสู่ระบบ</Text>
              </Box>
              )
              }
          </Link>
        </Center>
      </Box>
    </>
  )
}