import React from 'react';
import { connect,useDispatch, useSelector} from 'react-redux'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import {
    Box, Heading,
    Avatar,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Grid,
    GridItem ,
    SimpleGrid 
} from "@chakra-ui/react";
import Head from 'next/head'
import UseProfile from '@/hooks/useProfile'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


function getSTP({ users }) {

  const { data: Profile } = UseProfile()

  console.log('Profile:',Profile);
  console.log('Profile', getCookie('access_token'));
  
  
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box pt="55px">
                <Text fontSize='xl'>ดึงข้อมูล getStaticProps { Profile?.email }</Text>
                <Image
                  w={'100'}
                  src={'data:image/png;base64,SW52YWxpZCB0b2tlbg=='}
                />
                <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
                {users.map((post) => (
                    // <li key={post.id}>{post.name}</li>
                    <GridItem colSpan={1} key={post.id}>
                    <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={'https://justfans.sgp1.digitaloceanspaces.com/'+post.cover}
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={'https://justfans.sgp1.digitaloceanspaces.com/'+post.avatar}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {post.name}
            </Heading>
            <Text color={'gray.500'}>{post.email}</Text>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
      </GridItem>
                ))}
                </SimpleGrid >
            </Box>
        </>
    )
}

export async function getServerSideProps({store}) {



    const res = await fetch(`https://bebfans.com/myapi/get_user_all/`)
    const users = await res.json()

    return { props: { users } }

}

export default getSTP